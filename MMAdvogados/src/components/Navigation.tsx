import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Áreas de Atuação", href: "/servicos" },
  { name: "Equipa", href: "/equipe" },
];

/* ---------- Color / contrast helpers ---------- */
const clamp = (v: number, a = 0, b = 255) =>
  Math.max(a, Math.min(b, Math.round(v)));
const parseRgbOrHex = (input?: string | null) => {
  if (!input) return null;
  input = input.trim();
  const rgbMatch = input.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgbMatch)
    return [Number(rgbMatch[1]), Number(rgbMatch[2]), Number(rgbMatch[3])];
  const hexMatch = input.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 3) {
      return [
        parseInt(hex[0] + hex[0], 16),
        parseInt(hex[1] + hex[1], 16),
        parseInt(hex[2] + hex[2], 16),
      ];
    } else {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
      ];
    }
  }
  return null;
};
const toLinear = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};
const luminance = (r: number, g: number, b: number) =>
  0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
const contrastRatio = (rgbA: number[], rgbB: number[]) => {
  const L1 = luminance(rgbA[0], rgbA[1], rgbA[2]);
  const L2 = luminance(rgbB[0], rgbB[1], rgbB[2]);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
};

/* Choose best between white/black text for a background color */
const bestTextForBg = (bgRgb: number[]) => {
  const white = [255, 255, 255];
  const black = [0, 0, 0];
  const ratioWhite = contrastRatio(bgRgb, white);
  const ratioBlack = contrastRatio(bgRgb, black);
  return ratioWhite >= ratioBlack
    ? { color: "white", ratio: ratioWhite }
    : { color: "black", ratio: ratioBlack };
};

/* ---------- Component ---------- */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [forceOverlay, setForceOverlay] = useState(false);
  const [overlayIsDark, setOverlayIsDark] = useState(true); // true => black overlay; false => white overlay
  const [preferDarkText, setPreferDarkText] = useState(false); // when no overlay, choose dark text for light backgrounds
  const location = useLocation();
  const prefersReduced = useReducedMotion();
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    if (isOpen) setTimeout(() => firstMobileLinkRef.current?.focus(), 40);
    else burgerRef.current?.focus();
  }, [isOpen]);

  /**
   * detectHeroContrast:
   *  - first tries to find an element with .hero-parallax or #hero
   *  - if found, samples 3 points (left/center/right) inside that hero's top area
   *  - if hero not found, sample top-center (y=40) as previous
   *  - calculates contrast vs white/black; if neither white nor black reaches WCAG 4.5:1,
   *    sets forceOverlay to true and picks overlay color (dark/ light) to fix readability.
   */
  useEffect(() => {
    let mounted = true;
    const MIN_CONTRAST = 4.5; // WCAG AA for normal text

    const samplePointsForHero = (hero: HTMLElement) => {
      try {
        const rect = hero.getBoundingClientRect();
        // sample at 20% from top of hero so nav overlays hero content
        const y = clamp(
          rect.top + Math.max(20, rect.height * 0.15),
          0,
          window.innerHeight - 1
        );
        const xs = [
          rect.left + rect.width * 0.12,
          rect.left + rect.width * 0.5,
          rect.left + rect.width * 0.88,
        ].map((v) => clamp(v, 1, window.innerWidth - 1));
        const samples: number[][] = [];
        xs.forEach((x) => {
          const el = document.elementFromPoint(
            Math.round(x),
            Math.round(y)
          ) as HTMLElement | null;
          if (el) {
            const cs = window.getComputedStyle(el);
            const bg = cs.backgroundColor || cs.background;
            const rgb = parseRgbOrHex(bg);
            if (rgb) samples.push(rgb.map((v) => clamp(v)));
          }
        });
        return samples;
      } catch {
        return [];
      }
    };

    const detect = () => {
      try {
        // find hero explicitly first
        const hero = document.querySelector<HTMLElement>(
          ".hero-parallax, #hero"
        );
        let samples: number[][] = [];

        if (hero) {
          samples = samplePointsForHero(hero);
          // if no solid backgrounds found inside hero (e.g. image), try to use hero computed backgroundColor
          if (samples.length === 0) {
            const cs = window.getComputedStyle(hero);
            const bg = cs.backgroundColor || cs.background;
            const rgb = parseRgbOrHex(bg);
            if (rgb) samples.push(rgb.map((v) => clamp(v)));
          }
        }

        // fallback: sample top center line (previous behavior)
        if (samples.length === 0) {
          const x = Math.round(window.innerWidth / 2);
          const y = 40;
          const el = document.elementFromPoint(x, y) as HTMLElement | null;
          let iter = el;
          while (iter && iter !== document.body) {
            const cs = window.getComputedStyle(iter);
            const bg = cs.backgroundColor || cs.background;
            const rgb = parseRgbOrHex(bg);
            if (rgb) {
              samples.push(rgb.map((v) => clamp(v)));
              break;
            }
            iter = iter.parentElement;
          }
          // fallback to body
          if (samples.length === 0) {
            const bodyBg = window.getComputedStyle(
              document.body
            ).backgroundColor;
            const rgb = parseRgbOrHex(bodyBg);
            if (rgb) samples.push(rgb.map((v) => clamp(v)));
          }
        }

        if (samples.length === 0) {
          // give up -> prefer dark overlay as safe default
          if (mounted) {
            setForceOverlay(true);
            setOverlayIsDark(true);
          }
          return;
        }

        // average samples to a single RGB
        const avg = samples
          .reduce(
            (acc, cur) => [acc[0] + cur[0], acc[1] + cur[1], acc[2] + cur[2]],
            [0, 0, 0]
          )
          .map((v) => Math.round(v / samples.length));

        // check best text color (white or black)
        const best = bestTextForBg(avg as number[]);
        if (best.ratio >= MIN_CONTRAST) {
          // good: no overlay needed; choose overlay false and text color implied by classes
          if (mounted) {
            setForceOverlay(false);
            setOverlayIsDark(false);
            setPreferDarkText(best.color === "black");
          }
        } else {
          // not enough contrast with either white or black -> force overlay
          // choose overlay color: if bg is light, use dark overlay; else use light overlay
          const bgIsLight =
            contrastRatio(avg as number[], [255, 255, 255]) <
            contrastRatio(avg as number[], [0, 0, 0]); // cheaper heuristic
          if (mounted) {
            setForceOverlay(true);
            setOverlayIsDark(!bgIsLight); // if bg is light -> overlay dark (true). if bg dark -> overlay light (false)
          }
        }
      } catch {
        if (mounted) {
          setForceOverlay(true);
          setOverlayIsDark(true);
        }
      }
    };

    detect();
    // re-check on resize, scroll and route change (hero layout may change)
    window.addEventListener("resize", detect);
    window.addEventListener("scroll", detect, { passive: true });
    const t = setTimeout(detect, 350); // SPA lazy content
    return () => {
      mounted = false;
      window.removeEventListener("resize", detect);
      window.removeEventListener("scroll", detect);
      clearTimeout(t);
    };
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const brandedPaths = ["/sobre", "/servicos", "/equipe"];
  const isBrandedPage = brandedPaths.includes(location.pathname);

  /* Classes selection with overlay support */
  const navBase = `fixed inset-x-0 top-0 z-50 transition-colors duration-300 backdrop-blur-md`;
  const navBgClass = scrolled
    ? "bg-white/95 border-b border-border/60 shadow-sm"
    : forceOverlay
    ? overlayIsDark
      ? "bg-black/30"
      : "bg-white/30"
    : "bg-transparent";
  const logoTextClass = (() => {
    if (isBrandedPage) return "text-[rgb(81,21,38)]";
    if (scrolled) return "text-foreground";
    if (forceOverlay) return overlayIsDark ? "text-white" : "text-foreground";
    return "text-white";
  })();

  const desktopTextClass = (active: boolean) => {
    if (isBrandedPage)
      return active
        ? "text-[rgb(81,21,38)] font-semibold"
        : "text-[rgb(81,21,38)] hover:text-[rgb(81,21,38)]";
    if (scrolled)
      return active
        ? "text-primary font-semibold"
        : "text-foreground/90 hover:text-primary";
    if (forceOverlay) {
      if (overlayIsDark)
        return active
          ? "text-white font-semibold"
          : "text-white/95 hover:text-white";
      return active
        ? "text-primary font-semibold"
        : "text-foreground/90 hover:text-primary";
    }
    return active
      ? "text-white font-semibold"
      : "text-white/95 hover:text-white";
  };

  const socialIconClass = () => {
    if (isBrandedPage)
      return "text-[rgb(81,21,38)] hover:text-[rgb(81,21,38)]/90";
    if (scrolled) return "text-foreground/80 hover:text-primary";
    if (forceOverlay)
      return overlayIsDark
        ? "text-white/90 hover:text-white"
        : "text-foreground/80 hover:text-primary";
    return "text-white/90 hover:text-white";
  };

  const burgerClass = () => {
    if (isBrandedPage)
      return "bg-[rgb(81,21,38)]/10 text-[rgb(81,21,38)] border border-[rgb(81,21,38)]/30";
    if (scrolled) return "bg-white/90 text-foreground border";
    if (forceOverlay)
      return overlayIsDark
        ? "bg-white/10 text-white border-white/20"
        : "bg-foreground/10 text-foreground border";
    return preferDarkText
      ? "bg-foreground/10 text-foreground border"
      : "bg-white/10 text-white";
  };

  const mobileLinkClass = (active: boolean) => {
    if (isBrandedPage)
      return active
        ? "bg-foreground/5 text-[rgb(81,21,38)] font-semibold"
        : "text-[rgb(81,21,38)] hover:text-[rgb(81,21,38)]";
    return active
      ? "bg-foreground/5 text-foreground font-semibold"
      : "text-foreground/90 hover:text-primary";
  };

  // Remover objeto genérico para evitar widen de tipos em transition

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Saltar para o conteúdo
      </a>

      <motion.nav
        initial={prefersReduced ? undefined : { y: -12, opacity: 0 }}
        animate={prefersReduced ? undefined : { y: 0, opacity: 1 }}
        transition={
          prefersReduced
            ? undefined
            : { type: "spring", damping: 22, stiffness: 260 }
        }
        role="navigation"
        aria-label="Navegação principal"
        className={`${navBase} ${navBgClass}`}
        style={{ willChange: "transform, background-color" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Voltar ao início"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary/80 group-hover:scale-105 transform transition">
                <LazyImage
                  src="/logotipo 4-1.png"
                  alt="Logótipo"
                  priority
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </div>
              <div className={`${logoTextClass} leading-tight`}>
                <div className="font-serif font-bold text-base lg:text-lg">
                  Milagrosa Macuácua
                </div>
                <div className="text-xs font-medium opacity-80">
                  ADVOGADOS, LDA
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.name}
                    whileHover={prefersReduced ? undefined : { translateY: -2 }}
                  >
                    <Link
                      to={item.href}
                      className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${desktopTextClass(
                        active
                      )}`}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.span
                        layoutId="underline"
                        initial={false}
                        animate={{
                          width: active ? "calc(100% - 1rem)" : "0px",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 280,
                          damping: 30,
                        }}
                        className={`absolute left-2 right-2 bottom-1 h-[3px] rounded-full ${
                          active
                            ? "bg-gradient-to-r from-primary to-primary/70"
                            : "bg-transparent"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-[rgb(81,21,38)]/30">
                <a
                  href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className={`p-2 rounded-lg transition-transform transform hover:scale-105 ${socialIconClass()}`}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className={`p-2 rounded-lg transition-transform transform hover:scale-105 ${socialIconClass()}`}
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                ref={burgerRef}
                className={`p-2 rounded-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition ${burgerClass()}`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReduced ? { duration: 0 } : { duration: 0.18 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="absolute top-16 left-0 right-0 mx-auto max-w-3xl bg-white rounded-b-xl shadow-2xl border border-border p-6"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={
                prefersReduced
                  ? { duration: 0 }
                  : { type: "spring", damping: 26, stiffness: 320 }
              }
              style={{ willChange: "transform, opacity" }}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={prefersReduced ? undefined : { scale: 1.02 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        ref={idx === 0 ? firstMobileLinkRef : undefined}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${mobileLinkClass(
                          active
                        )}`}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg transition-transform transform hover:scale-105 text-foreground/80"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg transition-transform transform hover:scale-105 text-foreground/80"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <div className="ml-auto text-xs text-muted-foreground">
                  Contacto rápido
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
        .focus\\:not-sr-only:focus { position: static; width: auto; height: auto; padding: 0.5rem 1rem; margin: 0; overflow: visible; clip: auto; white-space: normal; }
        @media (prefers-reduced-motion: reduce) { * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
      `}</style>
    </>
  );
};

export default Navigation;

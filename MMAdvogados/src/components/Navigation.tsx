import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const hasTransparentHero = location.pathname === "/";

  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const prevBodyOverflow = useRef<string | null>(null);

  // Observa a hero (ou usa fallback de scroll)
  useEffect(() => {
    if (!hasTransparentHero) {
      setIsOverHero(false);
      return;
    }

    const hero = document.querySelector(".hero-parallax") || document.getElementById("hero");
    if (!hero) {
      const handler = () => setIsOverHero(window.scrollY < 120);
      window.addEventListener("scroll", handler, { passive: true });
      handler();
      return () => window.removeEventListener("scroll", handler);
    }

    const io = new IntersectionObserver(
      (entries) => setIsOverHero(Boolean(entries[0]?.isIntersecting)),
      { root: null, threshold: [0, 0.05, 0.1] }
    );

    io.observe(hero);
    return () => io.disconnect();
  }, [hasTransparentHero]);

  // Scroll handler com rAF e respeito a reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    const handle = () => {
      if (prefersReduced) {
        setIsScrolled(window.scrollY > 50);
        setIsVisible(window.scrollY <= lastScrollY.current || window.scrollY < 120);
        lastScrollY.current = window.scrollY;
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setIsScrolled(current > 50);
          setIsVisible(!(current > lastScrollY.current && current > 120));
          lastScrollY.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Fechar com ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Travar scroll do body quando menu móvel está aberto
  useEffect(() => {
    if (isOpen) {
      prevBodyOverflow.current = document.body.style.overflow || "";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevBodyOverflow.current ?? "";
      prevBodyOverflow.current = null;
    }
    return () => {
      document.body.style.overflow = prevBodyOverflow.current ?? "";
      prevBodyOverflow.current = null;
    };
  }, [isOpen]);

  // Fechar menu ao atingir breakpoint desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  // Focus-trap simples dentro do painel móvel
  useEffect(() => {
    if (!isOpen || !menuPanelRef.current) return;

    const panel = menuPanelRef.current;
    const focusable = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    (first as HTMLElement | undefined)?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (!first || !last) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Mover foco ao abrir/fechar menu
  useEffect(() => {
    if (isOpen) setTimeout(() => firstMobileLinkRef.current?.focus(), 50);
    else burgerRef.current?.focus();
  }, [isOpen]);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/servicos" },
    { name: "Equipa", href: "/equipe" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const getNavBackground = () => (hasTransparentHero && isOverHero && !isScrolled ? "nav-hero" : "nav-glass");
  
  // Função para desktop - mantém a lógica original
  const getLinkColor = (isActiveLink: boolean) =>
    hasTransparentHero && isOverHero && !isScrolled
      ? isActiveLink
        ? "text-white font-semibold text-shadow-hero"
        : "text-white/90 text-shadow-hero hover:text-white"
      : isActiveLink
      ? "text-primary font-semibold"
      : "text-foreground/90 hover:text-primary";
  
  // MOBILE: agora padronizado para fundo branco — links escuros por padrão
  const getMobileLinkColor = (isActiveLink: boolean) =>
    isActiveLink
      ? "text-foreground font-semibold bg-foreground/5"
      : "text-foreground/90 hover:text-primary";

  const getLogoColor = () =>
    hasTransparentHero && isOverHero && !isScrolled
      ? { main: "text-white text-shadow-hero", sub: "text-white/80 text-shadow-hero" }
      : { main: "text-foreground", sub: "text-muted-foreground" };
  
  // Ícones sociais do menu mobile com cor escura (legível sobre branco)
  const getMobileSocialIconColor = () => "text-foreground/70 hover:text-primary";
  
  const getSocialIconColor = () => (hasTransparentHero && isOverHero && !isScrolled ? "text-white/80 text-shadow-hero" : "text-foreground/80");
  const getBurgerIconColor = () => (hasTransparentHero && isOverHero && !isScrolled ? "text-white text-shadow-hero" : "text-foreground");
  const getUnderlineColor = () => (hasTransparentHero && isOverHero && !isScrolled ? "bg-white" : "bg-gradient-to-r from-primary to-primary/60");

  const logoColors = getLogoColor();

  return (
    <>
      {/* Link para saltar para o conteúdo */}
      <a
        href="#conteudo"
        className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Saltar para o conteúdo
      </a>

      {/* Barra de navegação */}
      <motion.nav
        role="navigation"
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isOpen || isVisible ? "translate-y-0" : "-translate-y-full"} ${getNavBackground()}`}
        style={{ willChange: "transform" }}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 24, stiffness: 220 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:rounded-lg focus-visible:outline-none"
              aria-label="Milagrosa Macuácua Advogados - Voltar ao início"
            >
              <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg group-hover:scale-110 group-hover:shadow-accent transition-all duration-300 shadow-lg logo-glow">
                <img src="/logotipo 4-1.png" alt="Logótipo Milagrosa Macuácua Advogados" className="h-5 w-5 lg:h-6 lg:w-6 object-contain" />
              </div>
              <div>
                <div className={`font-serif font-bold text-base lg:text-lg transition-colors duration-300 ${logoColors.main}`}>Milagrosa Macuácua</div>
                <div className={`text-xs font-medium transition-colors duration-300 ${logoColors.sub}`}>ADVOGADOS, LDA</div>
              </div>
            </Link>

            {/* Navegação desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ y: -10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getLinkColor(isActive(item.href))}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.name}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${getUnderlineColor()} ${isActive(item.href) ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]"}`} />
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-border/30">
                <a href="https://www.instagram.com/milagrosa.macuacua_advogados/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getSocialIconColor()} hover:text-pink-500`} aria-label="Siga-nos no Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getSocialIconColor()} hover:text-blue-600`} aria-label="Siga-nos no Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Botão burger (mobile) */}
            <div className="lg:hidden flex items-center">
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
                <Button 
                  variant="ghost" 
                  onClick={() => setIsOpen((v) => !v)} 
                  aria-expanded={isOpen} 
                  aria-controls="mobile-menu" 
                  aria-label={isOpen ? "Fechar menu" : "Abrir menu"} 
                  ref={burgerRef} 
                  className="p-3 text-primary shadow-lg bg-background/95 backdrop-blur-sm border border-border hover:bg-primary/5"
                >
                  {isOpen ? (
                    <X className="h-7 w-7" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile - PADRÃO: BACKDROP + PAINEL BRANCO */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ willChange: "opacity" }}
          >
            {/* BACKDROP: leve translucidez branca para suavizar transição */}
            <motion.div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              aria-hidden="true"
            />

            {/* PANEL: fundo branco sólido para máxima legibilidade */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              ref={menuPanelRef}
              className="absolute top-0 left-0 right-0 max-h-[100svh] overflow-y-auto border-b border-border/20 shadow-xl z-[10000] bg-white"
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              style={{ willChange: "transform" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ type: "spring", damping: 22, stiffness: 320, delay: 0.05 * idx }}
                    >
                      <Link
                        to={item.href}
                        ref={idx === 0 ? firstMobileLinkRef : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors leading-6 break-words whitespace-normal ${getMobileLinkColor(isActive(item.href))}`}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Ícones Sociais Mobile */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border/30">
                    <motion.a 
                      whileHover={{ scale: 1.06 }} 
                      whileTap={{ scale: 0.95 }} 
                      href="https://www.instagram.com/milagrosa.macuacua_advogados/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`p-2 rounded-lg transition-all duration-300 hover:bg-primary/10 ${getMobileSocialIconColor()}`}
                      aria-label="Siga-nos no Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.06 }} 
                      whileTap={{ scale: 0.95 }} 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`p-2 rounded-lg transition-all duration-300 hover:bg-primary/10 ${getMobileSocialIconColor()}`}
                      aria-label="Siga-nos no Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estilos globais */}
      <style>{`
        .nav-hero { background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)); backdrop-filter: blur(8px); will-change: transform; }
        .nav-glass { background: hsl(var(--background) / 0.8); backdrop-filter: blur(24px); border-bottom: 1px solid hsl(var(--border) / 0.6); box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08); will-change: transform; }
        .text-shadow-hero { text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6); }
        .logo-glow:hover { filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.3)); }
        .skip-to-content { position: absolute; left: -9999px; }
        .skip-to-content:focus { left: 0; top: 0; }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
        .focus\\:not-sr-only:focus { position: static; width: auto; height: auto; padding: 0.5rem 1rem; margin: 0; overflow: visible; clip: auto; white-space: normal; }
        nav { transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        #mobile-menu a { word-break: break-word; white-space: normal; color: inherit; }
        @media (max-width: 420px) {
          #mobile-menu a { font-size: 15px; line-height: 1.25; }
        }
        @media (prefers-reduced-motion: reduce) { nav, nav * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }
      `}</style>
    </>
  );
};

export default Navigation;

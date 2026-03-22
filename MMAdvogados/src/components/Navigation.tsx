import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";

const navItems: { translationKey: TranslationKey; href: string }[] = [
  { translationKey: "nav.home", href: "/" },
  { translationKey: "nav.about", href: "/sobre" },
  { translationKey: "nav.services", href: "/servicos" },
  { translationKey: "nav.retainer", href: "/avenca" },
  { translationKey: "nav.team", href: "/equipe" },
];

const Navigation = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 4);
  const location = useLocation();
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const isHome = location.pathname === "/";
  const SCROLL_THRESHOLD = 20;
  const isScrolled = window.scrollY > SCROLL_THRESHOLD;
  // useLayoutEffect(() => {
  //   const onScroll = () => {
  //     setScrolled(window.scrollY > SCROLL_THRESHOLD);
  //   };

  //   onScroll();
  //   window.addEventListener("scroll", onScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  //  const navBg =
  //   isHome && !scrolled
  //     ? "bg-transparent"
  //     : "bg-white/95 backdrop-blur-md shadow-sm border-b";

  const textColor =
    isHome && isOverHero ? "text-white" : "text-[rgb(81,21,38)]";

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <LazyImage
                src="/logotipo 4-1.png"
                alt="Logótipo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className={`${textColor}`}>
                <div className="font-serif font-bold text-lg">
                  Milagrosa Macuácua
                </div>
                <div className="text-xs opacity-70">ADVOGADOS, LDA</div>
              </div>
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.translationKey}
                    to={item.href}
                    className={`relative text-sm font-medium transition 
                      ${
                        active
                          ? "text-[rgb(81,21,38)]"
                          : textColor + " hover:opacity-80"
                      }`}
                  >
                    {t(item.translationKey)}
                    {active && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[rgb(81,21,38)]" />
                    )}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 border-l pl-6">
                <button
                  onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                  className={`${textColor} hover:opacity-80 flex items-center justify-center gap-1 text-sm font-medium transition-colors`}
                  aria-label="Alternar idioma"
                  title="Alternar idioma"
                >
                  <Globe size={16} />
                  {language.toUpperCase()}
                </button>
                <a
                  href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                  target="_blank"
                  rel="noreferrer"
                  className={`${textColor} hover:opacity-80 flex items-center justify-center w-11 h-11 rounded-full`}
                  aria-label="Abrir Instagram da MMA Advogados em nova aba"
                  title="Instagram da MMA Advogados"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={`${textColor} hover:opacity-80 flex items-center justify-center w-11 h-11 rounded-full`}
                  aria-label="Abrir página do Facebook da MMA Advogados em nova aba"
                  title="Facebook da MMA Advogados"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setIsOpen((v) => !v)}
                ref={burgerRef}
                className={`${textColor}`}
                aria-label={
                  isOpen
                    ? "Fechar menu de navegação"
                    : "Abrir menu de navegação"
                }
                title={
                  isOpen
                    ? "Fechar menu de navegação"
                    : "Abrir menu de navegação"
                }
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="absolute top-16 left-0 right-0 bg-white rounded-b-2xl shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.translationKey}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-[rgb(81,21,38)]"
                  >
                    {t(item.translationKey)}
                  </Link>
                ))}
                
                {/* Language Switcher Mobile */}
                <div className="border-t pt-4 mt-2">
                  <button
                    onClick={() => {
                      setLanguage(language === "pt" ? "en" : "pt");
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 text-base font-medium text-[rgb(81,21,38)]"
                  >
                    <Globe size={18} />
                    {language === "pt" ? "English" : "Português"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

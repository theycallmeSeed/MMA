import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import { prefetchRoute } from "@/utils/routePrefetch";

const navItems: { translationKey: TranslationKey; href: string; hasDropdown?: boolean }[] = [
  { translationKey: "nav.home", href: "/" },
  { translationKey: "nav.about", href: "/sobre" },
  { translationKey: "nav.services", href: "/servicos", hasDropdown: true },
  { translationKey: "nav.retainer", href: "/avenca" },
  { translationKey: "nav.team", href: "/equipe" },
];

const serviceLinks = [
  // Principais (presentes na página Servicos.tsx)
  { titleKey: "servicos.litigation.title", slugKey: "services.slug.litigation" },
  { titleKey: "servicos.credit.title", slugKey: "services.slug.credit" },
  { titleKey: "servicos.family.title", slugKey: "services.slug.family" },
  { titleKey: "servicos.tax.title", slugKey: "services.slug.tax" },
  { titleKey: "servicos.corporate.title", slugKey: "services.slug.corporate" },
  // Corporate M&A (página de serviços também lista esta variação)
  { titleKey: "servicos.corporate2.title", slugKey: "services.slug.corporate" },
  // Áreas adicionais
  { titleKey: "servicos.mining.title", slugKey: "services.slug.mining" },
  { titleKey: "servicos.admin.title", slugKey: "services.slug.admin" },
  { titleKey: "servicos.realestate.title", slugKey: "services.slug.realestate" },
  { titleKey: "servicos.labor.title", slugKey: "services.slug.labor" },
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
const dropdownBg = isHome && isOverHero 
  ? "bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-sm border border-white/40 shadow-lg will-change-transform transform-gpu"
  : "bg-white border border-gray-100 shadow-xl";
 const dropdownTextColor = isHome && isOverHero 
  ? "text-white [text-shadow:0_1px_2px_rgba(81,21,38)] hover:bg-white/20"
  : "text-gray-700 hover:text-[rgb(81,21,38)] hover:bg-gray-50";

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
            <Link to="/" className="flex items-center gap-3" aria-label="Milagrosa Macuácua Advogados - Voltar à página inicial">
              <img
                src="/logo-120.webp"
                srcSet="/logo-120.webp 1x, /logo-400.webp 2x"
                alt="Logótipo Milagrosa Macuácua Advogados"
                width={40}
                height={40}
                className="object-contain"
                fetchPriority="high"
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
                  <div key={item.translationKey} className="relative group">
                    <Link
                      to={item.href}
                      onMouseEnter={() => prefetchRoute(item.href)}
                      className={`relative text-sm font-medium transition flex items-center gap-1
                        ${
                          active
                            ? "text-[rgb(81,21,38)]"
                            : textColor + " hover:opacity-80"
                        }`}
                    >
                      {t(item.translationKey)}
                      {item.hasDropdown && (
                        <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                      {active && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[rgb(81,21,38)]" />
                      )}
                    </Link>

                    {/* Dropdown Menu for Services */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                        <div className={`w-64 rounded-2xl overflow-hidden p-2 flex flex-col gap-1 ${dropdownBg}`}>
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.titleKey}
                              to={`/servicos/${t(service.slugKey)}`}
                              onMouseEnter={() => prefetchRoute(`/servicos/${t(service.slugKey)}`)}
                              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${dropdownTextColor}`}
                            >
                              {t(service.titleKey)}
                            </Link>
                          ))}
                          <div className="w-full h-[1px] bg-border my-1" />
                          <Link
                            to="/servicos"
                            className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-colors text-primary flex justify-between items-center ${isHome && isOverHero ? 'hover:bg-white/20' : 'hover:bg-primary/5'}`}
                          >
                            {t("services.btn.all")}
                            <span className="opacity-70 text-xs">→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
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
                  aria-label="Abrir Instagram da Milagrosa Macuácua Advogados em nova aba"
                  title="Instagram da Milagrosa Macuácua Advogados"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={`${textColor} hover:opacity-80 flex items-center justify-center w-11 h-11 rounded-full`}
                  aria-label="Abrir página do Facebook da Milagrosa Macuácua Advogados em nova aba"
                  title="Facebook da Milagrosa Macuácua Advogados"
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
                  <div key={item.translationKey} className="flex flex-col gap-2">
                    <Link
                      to={item.href}
                      onClick={() => !item.hasDropdown && setIsOpen(false)}
                      className="text-base font-medium text-[rgb(81,21,38)] flex items-center justify-between w-full"
                    >
                      {t(item.translationKey)}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                    </Link>
                    
                    {/* Mobile Dropdown Submenu */}
                    {item.hasDropdown && (
                      <div className="pl-4 flex flex-col gap-4 mt-2 mb-2 border-l-2 border-primary/20">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.titleKey}
                            to={`/servicos/${t(service.slugKey)}`}
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                          >
                            {t(service.titleKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Language Switcher Mobile */}
                <div className="border-t pt-4 mt-2">
                  <button
                    onClick={() => {
                      setLanguage(language === "pt" ? "en" : "pt");
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 text-base font-medium text-[rgb(81,21,38)]"
                    aria-label="Alternar idioma"
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

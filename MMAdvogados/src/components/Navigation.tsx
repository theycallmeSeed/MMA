import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Áreas de Atuação", href: "/servicos" },
  { name: "Regime de Avença", href: "/avenca" },
  { name: "Equipa", href: "/equipe" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 4);
  const location = useLocation();
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const isHome = location.pathname === "/";
const SCROLL_THRESHOLD = 9;
const isScrolled = window.scrollY > SCROLL_THRESHOLD;
  useLayoutEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 2); // ← 4 ou 6 ou 8 — experimenta valores
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  
  onScroll(); // ← executa imediatamente para garantir valor correto no mount

  return () => window.removeEventListener("scroll", onScroll);
}, []);
  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 0);
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const navBg =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-sm border-b";

  const textColor = isHome && !isScrolled ? "text-white" : "text-[rgb(81,21,38)]";

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500  ${navBg}`}
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
                    key={item.name}
                    to={item.href}
                    className={`relative text-sm font-medium transition 
                      ${
                        active
                          ? "text-[rgb(81,21,38)]"
                          : textColor + " hover:opacity-80"
                      }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[rgb(81,21,38)]" />
                    )}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 border-l pl-6">
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
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-[rgb(81,21,38)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

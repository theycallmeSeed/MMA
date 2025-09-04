import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale, Phone, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Verificar se está no topo
      setIsAtTop(currentScrollY < 10);
      
      // Verificar se scrollou o suficiente para mudar o estilo
      setIsScrolled(currentScrollY > 50);
      
      // Controlar visibilidade baseado na direção do scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // Esconde ao rolar para baixo
      } else {
        setIsVisible(true); // Mostra ao rolar para cima
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Equipe", href: "/equipe" },
    { name: "Contactos", href: "/contactos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Determinar o background da navbar
  const getNavBackground = () => {
    // Mobile: sempre sólido
    if (window.innerWidth < 1024) {
      return "bg-background/95 backdrop-blur-md";
    }
    
    // Desktop: transparente apenas no topo, sólido quando scrollado
    if (isAtTop && !isScrolled) {
      return "bg-transparent";
    }
    
    return "bg-background/95 backdrop-blur-md";
  };

  // Determinar a cor do texto
  const getTextColor = (isActive: boolean, isScrolled: boolean, isAtTop: boolean) => {
    // Mobile: sempre com contraste
    if (window.innerWidth < 1024) {
      return isActive ? "text-primary" : "text-foreground/90";
    }
    
    // Desktop: adaptar baseado no background
    if (isAtTop && !isScrolled) {
      return isActive ? "text-primary-foreground" : "text-primary-foreground/90";
    }
    
    return isActive ? "text-primary" : "text-foreground/90";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? `${getNavBackground()} shadow-lg border-b border-border/40`
          : isAtTop 
            ? getNavBackground()
            : "bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group z-60">
            <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg group-hover:scale-105 transition-all duration-300 shadow-card">
              <img 
                src="/logotipo 4-1.png" 
                alt="Milagrosa Macuácua Advogados Logo" 
                className="h-5 w-5 lg:h-6 lg:w-6 object-contain"
              />
            </div>
            <div>
              <div className={`font-serif font-bold text-lg lg:text-xl transition-colors duration-300 ${
                isAtTop && !isScrolled && window.innerWidth >= 1024 
                  ? "text-primary-foreground" 
                  : "text-foreground"
              }`}>
                Milagrosa Macuácua
              </div>
              <div className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isAtTop && !isScrolled && window.innerWidth >= 1024 
                  ? "text-primary-foreground/90" 
                  : "text-muted-foreground"
              }`}>
                ADVOGADOS, LDA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  getTextColor(isActive(item.href), isScrolled, isAtTop)
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-300 ${
                  isActive(item.href) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 ml-4">
              <a
                href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isAtTop && !isScrolled 
                    ? "hover:bg-primary-foreground/10 text-primary-foreground/80 hover:text-pink-400" 
                    : "hover:bg-muted/80 text-foreground/80 hover:text-pink-500"
                }`}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isAtTop && !isScrolled 
                    ? "hover:bg-primary-foreground/10 text-primary-foreground/80 hover:text-blue-400" 
                    : "hover:bg-muted/80 text-foreground/80 hover:text-blue-600"
                }`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isAtTop && !isScrolled 
                    ? "hover:bg-primary-foreground/10 text-primary-foreground/80 hover:text-blue-400" 
                    : "hover:bg-muted/80 text-foreground/80 hover:text-blue-600"
                }`}
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 z-60 ${
              isAtTop && !isScrolled 
                ? "hover:bg-primary-foreground/10 border border-primary-foreground/20" 
                : "hover:bg-muted/80 border border-border/50"
            }`}
          >
            {isOpen ? (
              <X className={`h-5 w-5 ${isAtTop && !isScrolled ? "text-primary-foreground" : "text-foreground"}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isAtTop && !isScrolled ? "text-primary-foreground" : "text-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary border-l-4 border-l-primary"
                      : "text-foreground/90 hover:bg-muted/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-muted/80"
                  >
                    <Instagram className="h-5 w-5 text-foreground/80 hover:text-pink-400" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-muted/80"
                  >
                    <Linkedin className="h-5 w-5 text-foreground/80 hover:text-blue-400" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-muted/80"
                  >
                    <Facebook className="h-5 w-5 text-foreground/80 hover:text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
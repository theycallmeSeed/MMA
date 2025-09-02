import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [navBackground, setNavBackground] = useState("transparent");
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
      
      // Determinar a cor de fundo baseada na posição de scroll
      if (currentScrollY < 100) {
        setNavBackground("transparent");
      } else {
        // Adicionar lógica para detectar a cor do conteúdo subjacente
        // e ajustar o background para contraste adequado
        setNavBackground("bg-background/95 backdrop-blur-md");
      }
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? `${navBackground} shadow-lg border-b border-border/40`
          : isAtTop 
            ? "bg-transparent" 
            : "bg-background/80 backdrop-blur-sm"
      }`}
      style={{ 
        // Garante que a navbar não sobreponha conteúdo
        marginBottom: isScrolled ? "0" : "0",
      }}
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
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                Milagrosa Macuácua
              </div>
              <div className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/90"
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
                  isActive(item.href)
                    ? isScrolled 
                      ? "text-primary" 
                      : "text-primary-foreground"
                    : isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-primary-foreground/80 hover:text-primary-foreground"
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
          </div>

          

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 z-60 ${
              isScrolled 
                ? "hover:bg-muted/80 border border-border/50" 
                : "hover:bg-primary-foreground/10 border border-primary-foreground/20"
            }`}
          >
            {isOpen ? (
              <X className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
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
                      : isScrolled
                        ? "text-foreground/80 hover:bg-muted/80 hover:text-primary"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  Consultoria Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
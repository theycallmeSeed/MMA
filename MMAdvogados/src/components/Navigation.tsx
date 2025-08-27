import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Planos", href: "/planos" },
    { name: "Contactos", href: "/contactos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-background/95 backdrop-blur-sm shadow-card"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-to-br from-primary to-primary/80 rounded-lg group-hover:scale-105 transition-all duration-300 shadow-card">
              <Scale className="h-6 w-6 lg:h-7 lg:w-7 text-primary-foreground" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg lg:text-xl text-primary">
                Milagrosa Macuácua
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground font-medium">
                ADVOGADOS, LDA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80"
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

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80"
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size={window.innerWidth >= 1024 ? "default" : "sm"}
              className="btn-outline-elite hover:scale-105 transition-all duration-300"
            >
              Consultoria Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted/80 transition-all duration-200 border border-border/50"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border/50 pt-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary border-l-4 border-l-primary"
                      : "text-foreground/80 hover:bg-muted/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30">
                <Button 
                  variant="outline" 
                  className="w-full btn-outline-elite"
                  onClick={() => setIsOpen(false)}
                >
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
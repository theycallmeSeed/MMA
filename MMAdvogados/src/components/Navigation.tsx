import { useState, useEffect, useRef } from "react";
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

  // Intersection Observer para detectar quando está sobre a hero
  useEffect(() => {
    if (!hasTransparentHero) {
      setIsOverHero(false);
      return;
    }

    const sentinel = document.createElement('div');
    sentinel.id = 'hero-sentinel';
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.height = '60vh';
    sentinel.style.width = '100%';
    sentinel.style.pointerEvents = 'none';
    
    const heroSection = document.querySelector('section');
    if (heroSection) {
      heroSection.prepend(sentinel);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      { threshold: [0, 0.1] }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [hasTransparentHero]);

  // Smooth scroll behavior com requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          setIsScrolled(currentScrollY > 50);

          // Hide on scroll down, show on scroll up
          if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Equipe", href: "/equipe" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Centralized styling functions
  const getNavBackground = () => {
    if (hasTransparentHero && isOverHero && !isScrolled) {
      return "nav-hero";
    }
    return "nav-glass";
  };

  const getLinkColor = (isActiveLink: boolean) => {
    if (hasTransparentHero && isOverHero && !isScrolled) {
      return isActiveLink
        ? "text-white font-semibold text-shadow-hero"
        : "text-white/90 text-shadow-hero hover:text-white";
    }
    return isActiveLink ? "text-primary font-semibold" : "text-foreground/90 hover:text-primary";
  };

  const getLogoColor = () => {
    if (hasTransparentHero && isOverHero && !isScrolled) {
      return {
        main: "text-white text-shadow-hero",
        sub: "text-white/80 text-shadow-hero"
      };
    }
    return {
      main: "text-foreground",
      sub: "text-muted-foreground"
    };
  };

  const getSocialIconColor = () => {
    if (hasTransparentHero && isOverHero && !isScrolled) {
      return "text-white/80 text-shadow-hero";
    }
    return "text-foreground/80";
  };

  const getUnderlineColor = () => {
    if (hasTransparentHero && isOverHero && !isScrolled) {
      return "bg-white";
    }
    return "bg-gradient-to-r from-primary to-primary/60";
  };

  const logoColors = getLogoColor();

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#conteudo"
        className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Saltar para o conteúdo
      </a>

      <nav
        role="navigation"
        aria-label="Navegação principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${getNavBackground()}`}
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
                <img
                  src="/logotipo 4-1.png"
                  alt=""
                  className="h-5 w-5 lg:h-6 lg:w-6 object-contain"
                  role="presentation"
                />
              </div>
              <div>
                <div className={`font-serif font-bold text-base lg:text-lg transition-colors duration-300 ${logoColors.main}`}>
                  Milagrosa Macuácua
                </div>
                <div className={`text-xs font-medium transition-colors duration-300 ${logoColors.sub}`}>
                  ADVOGADOS, LDA
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getLinkColor(
                    isActive(item.href)
                  )}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-300 ${getUnderlineColor()} ${
                      isActive(item.href) ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]"
                    }`}
                  />
                </Link>
              ))}

              {/* Redes Sociais */}
              <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-border/30">
                <a
                  href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getSocialIconColor()} hover:text-pink-500`}
                  aria-label="Siga-nos no Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${getSocialIconColor()} hover:text-blue-600`}
                  aria-label="Siga-nos no Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none min-h-[44px] min-w-[44px] ${
                hasTransparentHero && isOverHero && !isScrolled
                  ? "bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20"
                  : "bg-muted/50 border-border/50 hover:bg-muted/80"
              }`}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className={`h-5 w-5 ${hasTransparentHero && isOverHero && !isScrolled ? "text-white" : "text-foreground"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${hasTransparentHero && isOverHero && !isScrolled ? "text-white" : "text-foreground"}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 border-t border-border/50">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary border-l-4 border-l-primary"
                        : "text-foreground/90 hover:bg-muted/80 hover:text-primary"
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Redes Sociais Mobile */}
                <div className="pt-4 flex justify-center space-x-4 border-t border-border/50 mt-4">
                  <a
                    href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-pink-50 border border-border min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
                    aria-label="Siga-nos no Instagram"
                  >
                    <Instagram className="h-5 w-5 text-pink-500" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-blue-50 border border-border min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:outline-none"
                    aria-label="Siga-nos no Facebook"
                  >
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Styles */}
      <style>{`
        /* Utility Classes */
        .nav-hero {
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0));
          backdrop-filter: blur(8px);
          will-change: transform;
        }

        .nav-glass {
          background: hsl(var(--background) / 0.8);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid hsl(var(--border) / 0.6);
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08);
          will-change: transform;
        }

        .text-shadow-hero {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.55);
        }

        .logo-glow:hover {
          filter: drop-shadow(0 0 4px rgba(255, 215, 0, 0.3));
        }

        /* Skip to content */
        .skip-to-content {
          position: absolute;
          left: -9999px;
        }

        .skip-to-content:focus {
          left: 0;
          top: 0;
        }

        /* Screen reader only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }

        /* Smooth transitions */
        nav {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                      backdrop-filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Performance optimization */
        @media (prefers-reduced-motion: reduce) {
          nav,
          nav * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
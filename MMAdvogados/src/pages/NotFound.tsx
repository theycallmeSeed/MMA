import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl lg:text-8xl font-serif font-bold text-primary mb-6">404</h1>
        <p className="text-xl lg:text-2xl text-muted-foreground mb-8">Página não encontrada</p>
        <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
          A página que procura não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-all duration-300 hover:scale-105"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;

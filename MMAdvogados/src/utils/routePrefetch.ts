export const prefetchRoute = (path: string) => {
  switch (path) {
    case "/": return import("../pages/Index");
    case "/sobre": return import("../pages/Sobre");
    case "/servicos": return import("../pages/Servicos");
    case "/equipe": return import("../pages/equipe");
    case "/avenca": return import("../pages/Avenca");
    case "/contactos": return import("../pages/Contactos");
    default:
      if (path.startsWith("/servicos/")) return import("../pages/ServiceDetail");
      return null;
  }
};

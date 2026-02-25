import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop: controla navegação SPA para melhorar UX, performance e acessibilidade.
 * - Ao mudar pathname: volta ao topo imediatamente, desbloqueia overflow do body/html, foca <main id="conteudo">.
 * - Com hash (#id): rola suavemente até o alvo; se não encontrar, volta ao topo.
 * - Não altera rotas nem design; atua apenas no cliente.
 */
export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  // Desbloqueia overflow e fecha qualquer estado travado de menu mobile
  const unlockBodyOverflow = () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    ["overflow-hidden", "fixed", "modal-open"].forEach((cls) => {
      document.body.classList.remove(cls);
      document.documentElement.classList.remove(cls);
    });
    const toggles = document.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"][data-menu-toggle], input[type="checkbox"][id*="menu"], input[type="checkbox"][name*="menu"]'
    );
    toggles.forEach((el) => {
      if (el.checked) {
        el.checked = false;
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  };

  // Foca o main para acessibilidade sem causar CLS
  const focusMain = () => {
    const main = (document.getElementById("conteudo") ||
      document.querySelector("main")) as HTMLElement | null;
    if (main) {
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  };

  // Ao mudar de página (pathname): voltar ao topo, desbloquear overflow e focar main
  useEffect(() => {
    // Top instantâneo, sem animação -> evita CLS/LCP interferência
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    unlockBodyOverflow();
    // Usar rAF para focar após pintura da nova view
    requestAnimationFrame(() => focusMain());
    // Opcional: emitir um evento para componentes ouvirem se necessário
    document.dispatchEvent(
      new CustomEvent("mm:route-changed", { detail: { pathname } })
    );
  }, [pathname]);

  // Com hash (#id): rolar suavemente até o elemento alvo
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    // Espera breve para garantir que o elemento está no DOM (SSR/lazy)
    const t = setTimeout(() => {
      const target =
        document.getElementById(id) ||
        (document.querySelector(
          `[name="${CSS.escape(id)}"]`
        ) as HTMLElement | null);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);

  return null;
}

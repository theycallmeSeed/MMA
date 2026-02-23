export function initLazyBackgrounds(root: Element | Document = document) {
  const els = Array.from(root.querySelectorAll<HTMLElement>("[data-bg]"));
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const bg = el.dataset.bg;
          if (bg) {
            el.style.backgroundImage = `url('${bg}')`;
            el.removeAttribute("data-bg");
          }
          io.unobserve(el);
        }
      });
    },
    { rootMargin: "200px" }
  );

  els.forEach((el) => io.observe(el));
}

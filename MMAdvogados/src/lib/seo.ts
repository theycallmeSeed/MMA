export const CANONICAL_BASE = "https://madvogados.co.mz";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  const head = document.head || document.getElementsByTagName("head")[0];
  let el = head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    head.appendChild(el);
    return el;
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k !== "content") el!.setAttribute(k, v);
  });
  return el;
}

function upsertLinkRel(rel: string, href: string) {
  const head = document.head || document.getElementsByTagName("head")[0];
  let link = head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function setPageSEO(params: { title: string; description: string; path: string }) {
  const { title, description, path } = params;
  document.title = title;
  const canonicalUrl = `${CANONICAL_BASE}${path}`;
  upsertLinkRel("canonical", canonicalUrl);
  const descMeta =
    (document.head.querySelector('meta[name="description"]') as HTMLMetaElement | null) ??
    upsertMeta('meta[name="description"]', { name: "description", content: description });
  if (descMeta) descMeta.setAttribute("content", description);
  const ogTitle =
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
  ogTitle.setAttribute("content", title);
  const ogDesc =
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
  ogDesc.setAttribute("content", description);
  const ogUrl =
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  ogUrl.setAttribute("content", canonicalUrl);
  const twTitle =
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  twTitle.setAttribute("content", title);
  const twDesc =
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  twDesc.setAttribute("content", description);
}

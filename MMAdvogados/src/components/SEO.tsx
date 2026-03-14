import { useEffect } from "react";

type JSONLD = Record<string, unknown> | Record<string, unknown>[];
type SEOProps = {
  title: string;
  description: string;
  canonicalPath: string;
  jsonLd?: JSONLD;
};

const BASE_URL = "https://madvogados.co.mz";

const ensureMeta = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  if (tag.getAttribute("content") !== content) {
    tag.setAttribute("content", content);
  }
};

const ensureCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  if (link.getAttribute("href") !== href) {
    link.setAttribute("href", href);
  }
};

const SEO = ({ title, description, canonicalPath, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    ensureMeta("description", description);
    ensureCanonical(`${BASE_URL}${canonicalPath}`);

    const scriptId = "ld-json-dynamic";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = scriptId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};

export default SEO;

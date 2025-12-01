import React, { useEffect, useRef, useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  priority?: boolean; // se true -> carrega eager / para hero/nav
  srcSet?: string;
  sizes?: string;
  fallbackSrc?: string; // usado se variante não existir ou falhar
};

export default function LazyImage({ src, alt, priority, className = "", width, height, srcSet, sizes, fallbackSrc, onError, ...rest }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(Boolean(priority));

  useEffect(() => {
    if (visible || priority) return;
    const el = imgRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible, priority]);

  // Set the fetchpriority attribute directly on the element to avoid React warning
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    el.setAttribute("fetchpriority", priority ? "high" : "auto");
  }, [priority]);

  // When visible, ensure we also set srcset/sizes if provided
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    if (visible || priority) {
      if (srcSet) el.setAttribute("srcset", srcSet);
      if (sizes) el.setAttribute("sizes", sizes);
    }
  }, [visible, priority, srcSet, sizes]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    if (fallbackSrc && target.src !== fallbackSrc) {
      // Remove srcset/sizes to force using fallback
      target.removeAttribute("srcset");
      target.removeAttribute("sizes");
      target.src = fallbackSrc;
    }
    if (onError) onError(e);
  };

  return (
    <img
      ref={imgRef}
      src={visible ? src : undefined}
      data-src={src}
      data-srcset={srcSet}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
}

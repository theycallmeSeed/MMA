import React, { useEffect, useRef, useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  priority?: boolean; // se true -> carrega eager / para hero/nav
};

export default function LazyImage({ src, alt, priority, className = "", width, height, ...rest }: Props) {
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

  return (
    <img
      ref={imgRef}
      src={visible ? src : undefined}
      data-src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      width={width}
      height={height}
      className={className}
      {...rest}
    />
  );
}

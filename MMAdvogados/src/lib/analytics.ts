export const GA_MEASUREMENT_ID = "G-69RGZWYD1F";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const canTrack = () => {
  if (typeof window === "undefined") return false;
  if (typeof window.gtag !== "function") return false;
  try {
    return window.localStorage.getItem("cookie-consent") === "accepted";
  } catch {
    return false;
  }
};

export const pageview = (url: string) => {
  if (!canTrack()) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (!canTrack()) return;
  window.gtag("event", action, params);
};

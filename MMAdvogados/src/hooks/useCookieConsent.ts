import { useCallback, useEffect, useMemo, useState } from "react";

export const COOKIE_CONSENT_KEY = "cookie-consent";

export type CookieConsentValue = "accepted" | "rejected";

const isConsentValue = (value: string | null): value is CookieConsentValue =>
  value === "accepted" || value === "rejected";

const readConsent = (): CookieConsentValue | null => {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return isConsentValue(value) ? value : null;
  } catch {
    return null;
  }
};

export const canLoadTrackingScripts = () => readConsent() === "accepted";

export const useCookieConsent = () => {
  const [consent, setConsentState] = useState<CookieConsentValue | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialize = () => {
      setConsentState(readConsent());
      setIsReady(true);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(initialize, { timeout: 600 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(initialize, 0);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onStorage = (event: StorageEvent) => {
      if (event.key !== COOKIE_CONSENT_KEY) return;
      setConsentState(readConsent());
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setConsent = useCallback((value: CookieConsentValue) => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
      } catch {
        // Ignore persistence failures and keep in-memory state.
      }
      window.dispatchEvent(
        new CustomEvent("cookie-consent-changed", { detail: value })
      );
    }
    setConsentState(value);
  }, []);

  const shouldShowBanner = isReady && consent === null;
  const isAccepted = consent === "accepted";

  return useMemo(
    () => ({
      consent,
      isReady,
      isAccepted,
      shouldShowBanner,
      setConsent,
      accept: () => setConsent("accepted"),
      reject: () => setConsent("rejected"),
    }),
    [consent, isReady, isAccepted, shouldShowBanner, setConsent]
  );
};

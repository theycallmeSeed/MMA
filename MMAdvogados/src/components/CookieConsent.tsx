import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/useCookieConsent";

const CookieConsent = () => {
  const { shouldShowBanner, accept, reject } = useCookieConsent();
  const [showPreferences, setShowPreferences] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (!shouldShowBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[120] pointer-events-none p-3 sm:p-4">
      <AnimatePresence>
        <motion.aside
          key="cookie-consent"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pointer-events-auto mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-[rgba(22,12,16,0.92)] p-4 text-white shadow-2xl sm:p-5"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-wide text-accent">
                Privacidade e Cookies
              </p>
              <p className="mt-1 text-sm leading-relaxed text-white/85">
                Usamos cookies essenciais para o funcionamento do site e, com a
                sua permissão, cookies de medição para melhorar a experiência.
              </p>
              <button
                type="button"
                onClick={() => setShowPreferences((value) => !value)}
                className="mt-2 text-xs font-medium text-white/80 underline-offset-2 transition-colors hover:text-white hover:underline"
                aria-label="Show or hide cookie preferences"
                aria-expanded={showPreferences}
              >
                Preferências
              </button>
              {showPreferences && (
                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  Essenciais: sempre ativas. Analíticas: só serão ativadas após
                  clicar em “Aceitar”.
                </p>
              )}
            </div>

            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:w-auto">
              <Button
                type="button"
                onClick={reject}
                variant="outline"
                className="w-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                aria-label="Reject non-essential cookies"
              >
                Rejeitar
              </Button>
              <Button
                type="button"
                onClick={accept}
                className="w-full bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90"
                aria-label="Accept all cookies"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </motion.aside>
      </AnimatePresence>
    </div>
  );
};

export default CookieConsent;


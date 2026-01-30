import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<
    "fade-in" | "fade-out"
  >("fade-in");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fade-out");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fade-out") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fade-in");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fade-out") {
          setTransitionStage("fade-in");
        }
      }}
    >
      {children}

      <style>{`
        .page-transition {
          animation-duration: 400ms;
          animation-fill-mode: both;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .page-transition.fade-out {
          animation-name: fadeOut;
        }

        .page-transition.fade-in {
          animation-name: fadeIn;
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(-10px) scale(0.99);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.99);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page-transition {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PageTransition;

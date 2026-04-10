import { useSyncExternalStore } from "react";
import { loaderState } from "@/utils/loaderState";

export const GlobalStateLoader = () => {
  const isVisible = useSyncExternalStore(loaderState.subscribe, loaderState.getSnapshot);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300"
      role="status"
      aria-label="A carregar..."
    >
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <img
          src="/logo-120.webp"
          alt="Milagrosa Macuácua Advogados Logótipo"
          width={60}
          height={60}
          className="object-contain"
          fetchPriority="high"
        />
        <div className="text-[rgb(81,21,38)] text-center">
          <div className="font-serif font-bold text-xl">Milagrosa Macuácua</div>
          <div className="text-sm opacity-70 tracking-widest mt-1">ADVOGADOS</div>
        </div>
        <p className="text-sm font-medium text-muted-foreground mt-2">
          A processar...
        </p>
      </div>
    </div>
  );
};

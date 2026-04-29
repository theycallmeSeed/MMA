export type ServiceId =
  | "litigation"
  | "credit"
  | "family"
  | "tax"
  | "corporate"
  | "corporate2"
  | "mining"
  | "admin"
  | "realestate"
  | "labor";

export const SERVICE_ORDER: ServiceId[] = [
  "litigation",
  "credit",
  "family",
  "tax",
  "corporate",
  "corporate2",
  "mining",
  "admin",
  "realestate",
  "labor",
];

// Slugs canónicos fixos (não dependem do idioma)
export const SERVICE_SLUGS: Record<ServiceId, string> = {
  litigation: "contencioso-e-arbitragem",
  credit: "recuperacao-de-credito",
  family: "direito-da-familia-e-sucessoes",
  tax: "direito-fiscal-e-aduaneiro",
  corporate: "direito-societario-e-empresarial",
  corporate2: "fusoes-e-aquisicoes",
  mining: "direito-mineiro",
  admin: "direito-administrativo",
  realestate: "imobiliaria-e-terras",
  labor: "laboral-e-migracao",
};

// Compatibilidade com URLs antigas (EN) para não perder tráfego/indexação.
const LEGACY_SERVICE_SLUGS: Partial<Record<ServiceId, string[]>> = {
  litigation: ["litigation-and-arbitration"],
  credit: ["credit-recovery"],
  family: ["family-and-succession-law"],
  tax: ["tax-and-customs-law"],
  corporate: ["corporate-and-business-law"],
  mining: ["mining-law"],
  admin: ["administrative-law"],
  realestate: ["real-estate-and-land"],
  labor: ["labor-and-migration"],
};

export const getServiceSlug = (serviceId: ServiceId) => SERVICE_SLUGS[serviceId];

export const getServicePath = (serviceId: ServiceId) =>
  `/servicos/${getServiceSlug(serviceId)}`;

export const findServiceIdBySlug = (slug: string): ServiceId | undefined => {
  const canonicalMatch = (Object.entries(SERVICE_SLUGS) as [ServiceId, string][])
    .find(([, serviceSlug]) => serviceSlug === slug);
  if (canonicalMatch) return canonicalMatch[0];

  const legacyMatch = (Object.entries(LEGACY_SERVICE_SLUGS) as [ServiceId, string[]][])
    .find(([, legacySlugs]) => legacySlugs.includes(slug));
  return legacyMatch?.[0];
};


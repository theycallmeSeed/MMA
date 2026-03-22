import {
  Scale,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/sobre" },
    { name: t("nav.services"), href: "/servicos" },
    { name: t("nav.retainer"), href: "/avenca" },
    { name: t("nav.team"), href: "/equipe" },
  ];

  const services = [
    t("services.litigation.title"),
    t("services.corporate.title"),
    t("services.credit.title"),
  ];

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Milagrosa%20Macuacua%20Advogados%20Av.%20Joaquim%20Chissano%201919%2C%20Fomento%2C%20Matola%2C%20Mo%C3%A7ambique";

  return (
    <footer className="relative overflow-hidden bg-[rgb(47,14,25)] text-white">
      {/* Background premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(47,14,25)] via-[rgb(64,18,33)] to-[rgb(87,28,47)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_18%)]" />
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[0.95fr_0.8fr_1.4fr] xl:gap-12">
            {/* Brand / identity */}
            <div className="space-y-8">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm shadow-lg">
                    <Scale className="h-6 w-6 text-[#f3d08b]" />
                  </div>

                  <div>
                    <div className="font-serif text-xl font-bold leading-tight">
                      Milagrosa Macuácua
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/65">
                      Advogados, Lda
                    </div>
                  </div>
                </div>

                <p className="max-w-md text-sm leading-7 text-white/72 md:text-[15px]">
                  {t("footer.brand.desc")}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-lg font-semibold text-white">
                  {t("footer.contacts.title")}
                </h4>

                <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f3d08b]" />
                    <div className="space-y-1 text-sm md:text-[15px]">
                      <a
                        href="tel:+258845469097"
                        className="block text-white/80 transition-colors hover:text-[#f3d08b]"
                      >
                        +258 84 54 69 097
                      </a>
                      <a
                        href="tel:+258823860701"
                        className="block text-white/80 transition-colors hover:text-[#f3d08b]"
                      >
                        +258 82 38 60 701
                      </a>
                       <a
                        href="tel:+258873860701"
                        className="block text-white/80 transition-colors hover:text-[#f3d08b]"
                      >
                        +258 87 38 60 701
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-[#f3d08b]" />
                    <a
                      href="mailto:geral@milagrosama.co.mz"
                      className="text-sm text-white/80 transition-colors hover:text-[#f3d08b] md:text-[15px]"
                    >
                      geral@milagrosama.co.mz
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f3d08b]" />
                    <div className="text-sm text-white/80 md:text-[15px]">
                      <div>{t("footer.hours.wd")}</div>
                      <div>{t("footer.hours.we")}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f3d08b]" />
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm leading-6 text-white/80 transition-colors hover:text-[#f3d08b] md:text-[15px]"
                    >
                      <div>{t("footer.address.l1")}</div>
                      <div>{t("footer.address.l2")}</div>
                      <div>{t("footer.address.l3")}</div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Navigation / services */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-1">
              <div>
                <h4 className="mb-5 font-serif text-lg font-semibold text-white">
                  {t("footer.nav.title")}
                </h4>

                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm text-white/72 transition-colors duration-200 hover:text-[#f3d08b] md:text-[15px]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 font-serif text-lg font-semibold text-white">
                  {t("footer.areas.title")}
                </h4>

                <ul className="space-y-3">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="text-sm leading-6 text-white/72 md:text-[15px]"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Large premium map */}
            <div>
              <h4 className="mb-5 font-serif text-lg font-semibold text-white">
                {t("footer.location.title")}
              </h4>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no Google Maps ou aplicação de mapas disponível"
                className="group relative block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative h-[320px] sm:h-[380px] lg:h-[460px] w-full overflow-hidden">
                  {/* faux premium map background */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))]" />
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                      backgroundSize: "34px 34px",
                    }}
                  />
                  <div className="absolute -left-10 top-12 h-40 w-40 rounded-full border border-white/10 bg-white/10 blur-2xl" />
                  <div className="absolute right-10 bottom-12 h-52 w-52 rounded-full border border-white/10 bg-white/10 blur-3xl" />

                  {/* route lines */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 72 C22 58, 28 62, 40 48 S62 28, 82 34"
                      fill="none"
                      stroke="rgba(243,208,139,0.65)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeDasharray="2.5 2.5"
                    />
                    <path
                      d="M18 20 C36 28, 44 20, 61 36 S78 62, 92 56"
                      fill="none"
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* marker */}
                  <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/20 bg-[rgba(81,21,38,0.82)] shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
                      <MapPin className="h-8 w-8 text-[#f3d08b]" />
                    </div>
                    <div className="mt-3 rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs font-medium tracking-[0.16em] text-white/85 uppercase backdrop-blur-sm">
                      {t("footer.location.office")}
                    </div>
                  </div>

                  {/* overlay content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                    <div className="rounded-[24px] border border-white/10 bg-[rgba(19,10,14,0.48)] p-5 backdrop-blur-xl">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                            {t("footer.location.title")}
                          </p>
                          <h5 className="mt-1 font-serif text-xl font-semibold text-white sm:text-2xl">
                            {t("footer.location.full")}
                          </h5>
                        </div>

                        <div className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>

                      <p className="max-w-xl text-sm leading-6 text-white/72 sm:text-[15px]">
                        {t("footer.location.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <p className="text-sm text-white/55">
                {t("footer.rights").replace("{year}", currentYear.toString())}
              </p>

              <div className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6">
                <Link
                  to="/privacidade"
                  className="text-white/55 transition-colors duration-200 hover:text-[#f3d08b]"
                >
                  {t("footer.privacy")}
                </Link>
                <Link
                  to="/termos"
                  className="text-white/55 transition-colors duration-200 hover:text-[#f3d08b]"
                >
                  {t("footer.terms")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
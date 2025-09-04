import { Scale, Mail, Phone, MapPin, Clock, Linkedin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Equipe", href: "/equipe" },
    { name: "Contactos", href: "/contactos" },
  ];

  const services = [
    "Contencioso e Arbitragem",
    "Corporate",
    "Direito Administrativo e Fiscal",
    "Imobiliária e Terras",
    "Laboral e Migração",
    "Societário",
    "Recuperação de Créditos",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Scale className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-serif font-bold text-xl">
                  Milagrosa Macuácua
                </div>
                <div className="text-sm text-primary-foreground/80">
                  ADVOGADOS, LDA
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm lg:text-base">
              Sociedade de advogados de elite em Maputo, especializada em
              excelência jurídica para empresas que exigem resultados excepcionais.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/milagrosa.macuacua_advogados/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-110"
              >
                <Instagram className="h-5 w-5 text-pink-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all duration-200 hover:scale-110"
              >
                <Facebook className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">
              Os Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm lg:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contactos</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  <div>Av. Joaquim Chissano, 1919</div>
                  <div>Fomento, Matola</div>
                  <div>Moçambique</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  +258 87 154 9533
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  +258 84 530 5689
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  geral@milagrosama.co.mz
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm lg:text-base">
                  <div>Seg - Sex: 08:00 - 17:00</div>
                  <div>Sáb - Dom: Encerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-primary-foreground/60 text-sm text-center lg:text-left">
              © {currentYear} Milagrosa Macuácua Advogados, LDA. Todos os
              direitos reservados.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a
                href="/privacidade"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
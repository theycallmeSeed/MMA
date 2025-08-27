import { Scale, Mail, Phone, MapPin, Clock, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Planos", href: "/planos" },
    { name: "Contactos", href: "/contactos" },
  ];

  const services = [
    "Contencioso e Arbitragem",
    "Corporate",
    "Direito Administrativo",
    "Imobiliária e Terras",
    "Laboral e Migração",
    "Societário",
    "Recuperação de Créditos",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Mantenha-se Informado
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                Receba insights jurídicos e actualizações legislativas
                directamente no seu e-mail.
              </p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Seu e-mail profissional"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="px-8">
                Subscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Sociedade de advogados de elite em Maputo, especializada em
              excelência jurídica para empresas que exigem resultados.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
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
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
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
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
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
                <div className="text-primary-foreground/80 text-sm">
                  <div>Av. Joaquim Chissano</div>
                  <div>Matola, Moçambique</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  +258 84 xxx xxxx
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  geral@milagrosama.co.mz
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Seg - Sex: 08:00 - 17:00</div>
                  <div>Sáb: 08:00 - 12:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Milagrosa Macuácua Advogados, LDA. Todos os
              direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
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
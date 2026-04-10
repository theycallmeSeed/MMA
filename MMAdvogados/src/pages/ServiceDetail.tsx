import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { 
  Scale, 
  Building2, 
  CreditCard, 
  Users, 
  FileText, 
  Home, 
  ShieldCheck, 
  HardHat, 
  Gavel,
  ArrowLeft,
  ArrowRight,
  
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import { useEffect } from "react";

const serviceIcons: Record<string, LucideIcon> = {
  litigation: Scale,
  corporate: Building2,
  credit: CreditCard,
  family: Users,
  tax: FileText,
  mining: HardHat,
  admin: Gavel,
  realestate: Home,
  labor: ShieldCheck,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Encontrar o ID do serviço pelo slug
  const serviceIds = [
    "litigation", "corporate", "credit", "family", 
    "tax", "mining", "admin", "realestate", "labor"
  ];

  const serviceId = serviceIds.find(id => t(`services.slug.${id}`) === slug);
  const Icon = serviceId ? serviceIcons[serviceId] : Scale;

  useEffect(() => {
    if (!serviceId && slug) {
      // Se o slug não for encontrado, redirecionar para a página de serviços
      navigate("/servicos");
    }
  }, [serviceId, slug, navigate]);

  if (!serviceId) return null;

  const title = t(`servicos.${serviceId}.title`);
  const subtitle = t(`servicos.${serviceId}.subtitle`);
  const description = t(`servicos.${serviceId}.desc`);
  const longDescription = t(`servicos.${serviceId}.long`);
  
  // SEO Data
  const seoTitle = t("services.detail.seo.title").replace("{service}", title);
  const seoDesc = t("services.detail.seo.desc").replace("{service}", title);
  const canonicalPath = `/servicos/${slug}`;

  const features = [
    { title: t(`servicos.${serviceId}.d1.title`), desc: t(`servicos.${serviceId}.d1.desc`) },
    { title: t(`servicos.${serviceId}.d2.title`), desc: t(`servicos.${serviceId}.d2.desc`) },
    { title: t(`servicos.${serviceId}.d3.title`), desc: t(`servicos.${serviceId}.d3.desc`) },
    { title: t(`servicos.${serviceId}.d4.title`), desc: t(`servicos.${serviceId}.d4.desc`) },
  ].filter(f => f.title && f.title !== `servicos.${serviceId}.d4.title`); // Filtro básico para chaves inexistentes

  return (
    <div className="min-h-screen pt-28 pb-20">
      <SEO 
        title={seoTitle}
        description={seoDesc}
        canonicalPath={canonicalPath}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to="/servicos" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors gap-2 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            {t("services.detail.btn.back")}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                  {title}
                </h1>
              </div>

              <p className="text-2xl text-muted-foreground mb-8 font-serif italic">
                {subtitle}
              </p>

              <div className="prose prose-lg max-w-none text-muted-foreground mb-12 space-y-6">
                <p className="leading-relaxed font-medium text-foreground">
                  {description}
                </p>
                <p className="leading-relaxed">
                  {longDescription}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group"
                  >
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="sticky top-32 space-y-8"
            >

              {/* WhatsApp CTA */}
              <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {t("services.detail.cta.title").replace("{service}", title)}
                </h3>
                <p className="opacity-90 mb-8 leading-relaxed">
                  {t("services.detail.cta.desc").replace("{service}", title)}
                </p>
                
                <a
                  href={generateWhatsAppLink(
                    "+258 87 154 9533",
                    `Olá, gostaria de agendar uma consultoria sobre ${title}.\n\nIdioma: ${language === 'pt' ? 'Português' : 'English'}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold py-6 text-lg group">
                    {t("services.detail.cta.btn")}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

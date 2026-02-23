import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateWhatsAppLink } from "@/lib/utils";

const Contactos = () => {
  const contactInfo = {
    whatsapp: "+258871549533",
    phone: "+258845305689",
    address:
      "Av.joaquim Chissano, 1919- Fomento- Matola Matola- fomento, Matola, Moçambique",
    coordinates: "25°55'53.1\"S 32°28'10.5\"E",
    city: "MATOLA, Maputo 1114",
  };

  const businessHours = [
    { day: "quinta-feira", hours: "08:00–17:00" },
    { day: "sexta-feira", hours: "08:00–17:00" },
    { day: "sábado", hours: "Encerrado" },
    { day: "domingo", hours: "Encerrado", note: "(Dia dos Acordos de Lusaka)" },
    {
      day: "segunda-feira",
      hours: "08:00–17:00",
      note: "(Dia dos Acordos de Lusaka (observado))",
    },
    { day: "terça-feira", hours: "08:00–17:00" },
    { day: "quarta-feira", hours: "08:00–17:00" },
  ];

  const getGoogleMapsUrl = () => {
    const address = encodeURIComponent(contactInfo.address);
    return `https://www.google.com/maps/search/?api=1&query=${address}`;
  };

  const getWhatsAppMessage = () => {
    return `Bom dia, gostaria de obter mais informações sobre os vossos serviços jurídicos.

Nome: [escreva aqui o seu nome]
Contacto: [telefone ou e-mail]
Assunto: Informações sobre serviços jurídicos

Aguardo o vosso contacto.
Muito obrigado(a).`;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Contactos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contacto connosco para obter assessoria jurídica
              especializada. Estamos aqui para ajudar com todas as suas
              necessidades legais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                Informações de Contacto
              </h2>

              {/* WhatsApp */}
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-foreground mb-3">
                    {contactInfo.whatsapp}
                  </p>
                  <a
                    href={generateWhatsAppLink(
                      contactInfo.whatsapp,
                      getWhatsAppMessage()
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Enviar Mensagem
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    Telefone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-foreground mb-3">
                    {contactInfo.phone}
                  </p>
                  <a href={`tel:${contactInfo.phone}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Ligar Agora
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-2">{contactInfo.address}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {contactInfo.coordinates}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {contactInfo.city}
                  </p>
                  <a
                    href={getGoogleMapsUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-primary/20 hover:border-primary/40"
                    >
                      Ver no Mapa
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">
                Horário de Funcionamento
              </h2>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border/20 last:border-b-0"
                      >
                        <div>
                          <span className="font-medium text-foreground capitalize">
                            {schedule.day}
                          </span>
                          {schedule.note && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {schedule.note}
                            </p>
                          )}
                        </div>
                        <span
                          className={`font-medium ${
                            schedule.hours === "Encerrado"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="text-sm text-amber-800">
                      <strong>Nota:</strong> O horário de funcionamento pode ser
                      diferente em feriados e datas especiais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Localização
            </h2>
            <p className="text-lg text-muted-foreground">
              Visite-nos no nosso escritório em Matola
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.1234567890123!2d32.46972222222222!3d-25.93138888888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU1JzUzLjEiUyAzMsKwMjgnMTAuNSJF!5e0!3m2!1spt!2smz!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Milagrosa Macuácua Advogados - Matola"
            />
          </div>

          <div className="mt-8 text-center">
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-elite">
                Abrir no Google Maps
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contactos;

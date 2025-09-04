import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacidade = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protegemos a sua privacidade e garantimos a confidencialidade dos seus dados pessoais 
              em conformidade com a legislação moçambicana e internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Introduction */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-primary" />
                  Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  A Milagrosa Macuácua Advogados, LDA ("nós", "nosso", "nossa") respeita a sua privacidade 
                  e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade 
                  explica como recolhemos, utilizamos, armazenamos e protegemos as suas informações pessoais.
                </p>
                <p className="text-foreground leading-relaxed">
                  Esta política aplica-se a todos os serviços prestados pela nossa sociedade de advogados, 
                  incluindo consultas jurídicas, representação legal e outros serviços relacionados.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Última atualização:</strong> {currentYear}
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  Informações que Recolhemos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Recolhemos as seguintes categorias de informações pessoais:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Informações de identificação:</strong> Nome, número de identificação, 
                      data de nascimento, nacionalidade
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Informações de contacto:</strong> Endereço, telefone, email, 
                      redes sociais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Informações profissionais:</strong> Cargo, empresa, 
                      informações laborais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Informações jurídicas:</strong> Documentos legais, 
                      informações sobre casos jurídicos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Informações técnicas:</strong> Endereço IP, cookies, 
                      dados de navegação do website
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-primary" />
                  Como Utilizamos as Suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Utilizamos as suas informações pessoais para os seguintes fins:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Prestar serviços jurídicos e assessoria legal
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Cumprir obrigações legais e regulamentares
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Comunicar consigo sobre serviços e atualizações
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Melhorar a qualidade dos nossos serviços
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Proteger os nossos direitos e interesses legítimos
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  Partilha de Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros, 
                  exceto nas seguintes circunstâncias:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Com o seu consentimento:</strong> Quando autorizar explicitamente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Obrigação legal:</strong> Quando exigido por lei ou autoridades
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Prestadores de serviços:</strong> Empresas que nos ajudam a 
                      prestar serviços (sempre com proteções adequadas)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Proteção de direitos:</strong> Para proteger os nossos 
                      direitos legais ou de terceiros
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-5 w-5 text-primary" />
                  Segurança dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para 
                  proteger as suas informações pessoais contra:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Acesso não autorizado ou uso indevido
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Perda, alteração ou destruição acidental
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Divulgação não autorizada
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Estas medidas incluem encriptação, firewalls, controlos de acesso e 
                  formação regular da nossa equipa sobre proteção de dados.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-5 w-5 text-primary" />
                  Os Seus Direitos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Tem os seguintes direitos relativamente aos seus dados pessoais:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Acesso:</strong> Solicitar informações sobre os dados que temos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Retificação:</strong> Corrigir dados inexatos ou incompletos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Eliminação:</strong> Solicitar a remoção dos seus dados
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Portabilidade:</strong> Receber os seus dados num formato estruturado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Oposição:</strong> Opor-se ao tratamento dos seus dados
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Para exercer estes direitos, contacte-nos através dos dados de contacto 
                  fornecidos no final desta política.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Se tiver questões sobre esta Política de Privacidade ou sobre o tratamento 
                  dos seus dados pessoais, contacte-nos:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-medium">Milagrosa Macuácua Advogados, LDA</p>
                  <p className="text-foreground">Av. Joaquim Chissano, 1919</p>
                  <p className="text-foreground">Fomento, Matola, Moçambique</p>
                  <p className="text-foreground">Email: geral@milagrosama.co.mz</p>
                  <p className="text-foreground">Telefone: +258 87 154 9533</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidade;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Termos = () => {
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
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Condições e termos que regem a utilização dos nossos serviços e
              website, estabelecendo os direitos e obrigações de ambas as
              partes.
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
                  <Info className="h-5 w-5 text-primary" />
                  Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Estes Termos de Uso ("Termos") regem a utilização do website e
                  serviços da Milagrosa Macuácua Advogados, LDA ("nós", "nosso",
                  "nossa"). Ao aceder ao nosso website ou utilizar os nossos
                  serviços, concorda em cumprir estes Termos.
                </p>
                <p className="text-foreground leading-relaxed">
                  Estes Termos aplicam-se a todos os utilizadores do website,
                  clientes e potenciais clientes da nossa sociedade de
                  advogados.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Última atualização:</strong> {currentYear}
                </p>
              </CardContent>
            </Card>

            {/* Acceptance of Terms */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Ao utilizar o nosso website ou serviços, confirma que:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Leu e compreendeu estes Termos de Uso
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Aceita cumprir todos os termos e condições aqui
                      estabelecidos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Tem capacidade legal para celebrar contratos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Não utilizará os nossos serviços para fins ilegais
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-primary" />
                  Descrição dos Serviços
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  A Milagrosa Macuácua Advogados, LDA presta os seguintes
                  serviços jurídicos:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Contencioso e Arbitragem:</strong> Representação
                      em tribunais e processos arbitrais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Corporate:</strong> Assessoria em operações
                      empresariais e M&A
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Direito Administrativo e Fiscal:</strong>{" "}
                      Consultoria fiscal e aduaneira
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Imobiliária e Terras:</strong> Assessoria em
                      transações imobiliárias
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Laboral e Migração:</strong> Gestão de relações
                      laborais e vistos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Societário:</strong> Constituição e reestruturação
                      de empresas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Recuperação de Créditos:</strong> Estratégias de
                      cobrança e recuperação
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Responsabilidades do Utilizador
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Como utilizador dos nossos serviços, compromete-se a:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Fornecer informações verdadeiras e completas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Respeitar a confidencialidade e sigilo profissional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Cumprir com as obrigações contratuais estabelecidas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Não utilizar os serviços para fins fraudulentos ou ilegais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Pagar pontualmente os honorários acordados
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Colaborar ativamente no desenvolvimento do caso jurídico
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Todo o conteúdo do nosso website, incluindo mas não limitado
                  a:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Textos, imagens e gráficos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Logótipos e marcas registadas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Software e código fonte
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Design e layout do website
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  É propriedade da Milagrosa Macuácua Advogados, LDA e está
                  protegido pelas leis de propriedade intelectual. É proibida a
                  reprodução, distribuição ou modificação sem autorização
                  prévia.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  A Milagrosa Macuácua Advogados, LDA não se responsabiliza por:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Danos indiretos ou consequenciais
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Perdas de lucros ou oportunidades de negócio
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Danos resultantes de força maior ou eventos imprevisíveis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      Problemas técnicos ou interrupções do website
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  A responsabilidade máxima da sociedade está limitada ao valor
                  dos honorários pagos pelo cliente no período de 12 meses
                  anteriores.
                </p>
              </CardContent>
            </Card>

            {/* Confidentiality */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-primary" />
                  Confidencialidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Comprometemo-nos a manter a confidencialidade de todas as
                  informações partilhadas pelos nossos clientes, em conformidade
                  com:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      O Código de Deontologia dos Advogados de Moçambique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      O sigilo profissional estabelecido por lei
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      As melhores práticas internacionais da profissão
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Todas as informações partilhadas durante a prestação de
                  serviços são tratadas com o máximo sigilo e segurança.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Rescisão
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Estes Termos podem ser rescindidos nas seguintes
                  circunstâncias:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Por acordo mútuo:</strong> Entre as partes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Por violação:</strong> Dos termos estabelecidos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Por força maior:</strong> Eventos imprevisíveis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Por decisão judicial:</strong> Quando ordenado por
                      tribunal
                    </span>
                  </li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  Em caso de rescisão, todas as obrigações pendentes devem ser
                  cumpridas e a confidencialidade mantida.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-primary" />
                  Lei Aplicável
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Estes Termos de Uso são regidos pelas leis da República de
                  Moçambique. Qualquer disputa será resolvida nos tribunais
                  moçambicanos, com jurisdição exclusiva em Maputo.
                </p>
                <p className="text-foreground leading-relaxed">
                  Em caso de conflito entre estes Termos e a legislação
                  aplicável, prevalece a legislação moçambicana.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-primary" />
                  Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Para questões sobre estes Termos de Uso, contacte-nos:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-foreground font-medium">
                    Milagrosa Macuácua Advogados, LDA
                  </p>
                  <p className="text-foreground">Av. Joaquim Chissano, 1919</p>
                  <p className="text-foreground">Fomento, Matola, Moçambique</p>
                  <p className="text-foreground">
                    Email: geral@milagrosama.co.mz
                  </p>
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

export default Termos;

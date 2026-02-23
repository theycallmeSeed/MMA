import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(phone: string, message?: string): string {
  const defaultMessage = `Bom dia, gostaria de agendar uma consultoria jurídica com a vossa sociedade de advogados.

Nome: [escreva aqui o seu nome]
Contacto: [telefone ou e-mail]
Assunto: [indique brevemente a área ou tema jurídico que pretende tratar]
Data/Hora Preferencial: [insira a sua disponibilidade]

Aguardo o vosso contacto de confirmação.
Muito obrigado(a).`;

  const messageToUse = message || defaultMessage;
  const encodedMessage = encodeURIComponent(messageToUse);
  const formattedPhone = phone.replace(/\s/g, "");
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

export function getWhatsAppConsultoriaLink(): string {
  return "https://wa.me/258871549533?text=Bom%20dia%2C%20gostaria%20de%20agendar%20uma%20consultoria%20jur%C3%ADdica%20com%20a%20vossa%20sociedade%20de%20advogados.%0A%0ANome%3A%20[escreva%20aqui%20o%20seu%20nome]%0AContacto%3A%20[telefone%20ou%20e-mail]%0AAssunto%3A%20[indique%20brevemente%20a%20%C3%A1rea%20ou%20tema%20jur%C3%ADdico%20que%20pretende%20tratar]%0AData/Hora%20Preferencial%3A%20[insira%20a%20sua%20disponibilidade]%0A%0AAguardo%20o%20vosso%20contacto%20de%20confirma%C3%A7%C3%A3o.%20Muito%20obrigado(a).";
}

export function getWhatsAppConsultoriaLinkExact(): string {
  return "https://wa.me/258871549533?text=Bom%20dia%2C%20gostaria%20de%20agendar%20uma%20consultoria%20jur%C3%ADdica%20com%20a%20vossa%20sociedade%20de%20advogados.%0A%0ANome%3A%20[escreva%20aqui%20o%20seu%20nome]%0AContacto%3A%20[telefone%20ou%20e-mail]%0AAssunto%3A%20[indique%20brevemente%20a%20%C3%A1rea%20ou%20tema%20jur%C3%ADdico%20que%20pretende%20tratar]%0AData/Hora%20Preferencial%3A%20[insira%20a%20sua%20disponibilidade]%0A%0AAguardo%20o%20vosso%20contacto%20de%20confirma%C3%A7%C3%A3o.%20Muito%20obrigado(a).";
}

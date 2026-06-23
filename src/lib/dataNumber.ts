// src/lib/dataNumber.ts

/**
 * Gera um link personalizado do WhatsApp com mensagem tratada
 * @param phone Número de telefone (ex: "67 99999-9999" ou "67999999999")
 * @param message Mensagem de texto limpa
 */
// src/lib/dataNumber.ts

export function buildCustomWhatsAppUrl(phone: string, message: string): string {
  const cleanedPhone = phone.replace(/\D/g, "");

  const formattedPhone = cleanedPhone.startsWith("55")
    ? cleanedPhone
    : `55${cleanedPhone}`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

export const DENTIST_PHONE = "67 99999-9999";

export const DENTIST_DEFAULT_MESSAGE =
  "Olá! Gostaria de agendar uma consulta de avaliação com o dentista.";

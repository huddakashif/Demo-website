// Shared contact details used by every WhatsApp / support button on the site.
// Replace WHATSAPP_NUMBER with the real business number (country code + number, digits only).
export const WHATSAPP_NUMBER = '18005556387';

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

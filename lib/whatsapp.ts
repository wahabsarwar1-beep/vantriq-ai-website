// Placeholder — swap in the real WhatsApp Business number when available.
export const WHATSAPP_NUMBER = "92XXXXXXXXXX";

export function waLink(number: string = WHATSAPP_NUMBER): string {
  return "https://wa.me/" + number.replace(/[^0-9]/g, "");
}

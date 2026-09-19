export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface InquiryPayload {
  name: string;
  phone: string;
  message: string;
  equipment?: string;
  honeypot?: string; // hidden anti-spam field
}

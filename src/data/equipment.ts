import { EquipmentItem } from "@/types";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const STOREFRONT_IMAGE = `${basePath}/images/storefront.webp`;

export const equipment: EquipmentItem[] = [
  {
    id: "hydra-crane",
    name: "Hydra Crane",
    description:
      "Versatile pick-and-carry crane used in construction, loading, and industrial lifting operations.",
    image: `${basePath}/images/fleet/hydra-crane.webp`,
    alt: "Hydra crane operated by Deshwal Crane Service",
  },
  {
    id: "new-generation-crane",
    name: "New Generation Crane",
    description:
      "Modern heavy-duty crane with advanced safety features for demanding construction and infrastructure projects.",
    image: `${basePath}/images/fleet/new-generation-crane.webp`,
    alt: "New generation crane from Deshwal Crane Service fleet",
  },
  {
    id: "forklift",
    name: "Forklift",
    description:
      "Heavy-duty forklift for warehousing, yard handling, and material movement at construction and industrial sites.",
    image: `${basePath}/images/fleet/forklift.webp`,
    alt: "Heavy-duty forklift available for hire from Deshwal Crane Service",
  },
  {
    id: "recovery-van",
    name: "Recovery Van",
    description:
      "Recovery and breakdown vehicle for heavy equipment transport and roadside vehicle recovery.",
    image: `${basePath}/images/fleet/recovery-van.webp`,
    alt: "Recovery van from Deshwal Crane Service for heavy vehicle recovery",
  },
  {
    id: "crawler-crane",
    name: "Crawler Crane",
    description:
      "Heavy crawler crane for foundation work, bridge erection, and large-scale construction lifting.",
    image: `${basePath}/images/fleet/crawler-crane.webp`,
    alt: "Crawler crane from Deshwal Crane Service at a project site",
  },
  {
    id: "backhoe-loader",
    name: "Backhoe Loader",
    description:
      "Backhoe loader for site preparation, digging, trenching, and earthmoving operations.",
    image: `${basePath}/images/fleet/backhoe-loader.webp`,
    alt: "Backhoe loader available for hire from Deshwal Crane Service",
  },
  {
    id: "soil-compactor",
    name: "Soil Compactor",
    description:
      "Soil compactor for road construction, site levelling, and ground compaction in infrastructure projects.",
    image: `${basePath}/images/fleet/soil-compactor.webp`,
    alt: "Soil compactor from Deshwal Crane Service for road and site work",
  },
];

export const PHONE_PRIMARY = "9053402400";
export const PHONE_SECONDARY = "9053502400";
export const EMAIL = "deshwalcrane@gmail.com";
export const WHATSAPP_URL = `https://wa.me/91${PHONE_PRIMARY}?text=${encodeURIComponent(
  "Hi, I want to enquire about crane and heavy equipment services."
)}`;
export const ADDRESS =
  "Shop No. 10, Shri Ram Market, Bahalgarh Chowk, Bahalgarh, Sonipat, Haryana 131021";
export const BUSINESS_NAME = "Deshwal Crane Service";
export const TAGLINE =
  "17+ Years of Reliable Heavy Equipment Service — Based in Sonipat, Serving Clients Across India";

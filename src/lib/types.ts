export type PricingType = "FIXED" | "RANGE" | "SALE" | "CONTACT_FOR_PRICE";

export interface Service {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  featured: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  serviceSlugs: string[];
  location: string;
  year: string;
  completionDate: string;
  description: string;
  challenge: string;
  solution: string;
  coverImage: string;
  images: ProjectImage[];
  featured: boolean;
  size: "large" | "medium" | "small";
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  images: string[];
  specifications: { label: string; value: string }[];
  pricingType: PricingType;
  price?: number;
  oldPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  currency: string;
  availability: "In Stock" | "Made to Order" | "Contact for Availability";
  featured: boolean;
}

export interface BuiltProduct {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: { label: string; value: string }[];
  relatedProjectSlug?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
}

export type GalleryCategory =
  | "SOLAR"
  | "SMART HOME"
  | "SECURITY"
  | "ENGINEERING"
  | "CONSTRUCTION"
  | "PRODUCTS"
  | "TEAM";

export interface Engineer {
  id: string;
  slug: string;
  name: string;
  position: string;
  specialty: string;
  bio: string;
  photo: string;
  linkedin?: string;
  isCeo: boolean;
  sortOrder: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  quote: string;
  image: string;
  projectSlug?: string;
}

export interface SocialLink {
  platform: "Instagram" | "Facebook" | "TikTok" | "LinkedIn" | "YouTube" | "X";
  url: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  whatsappNumber: string;
  phone: string;
  phoneSecondary: string;
  email: string;
  address: string;
  city: string;
  openingHours: string;
  mapEmbedQuery: string;
  socialLinks: SocialLink[];
  stats: { label: string; value: string }[];
}

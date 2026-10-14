export type CakeCategory = 'all' | 'wedding-tiered' | 'signature-gateaux' | 'vintage-piped' | 'petite-tasting';

export interface CakeItem {
  id: string;
  name: string;
  frenchSubtitle: string;
  category: CakeCategory;
  price: number;
  description: string;
  longDescription: string;
  servings: string;
  diameter: string;
  leadTime: string;
  dietary: string[];
  flavorNotes: string[];
  sponge: string;
  filling: string;
  exterior: string;
  rating: number;
  reviewsCount: number;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
}

export interface BespokeCakeConfig {
  tiers: 'single' | 'two-tier' | 'three-tier';
  spongeFlavor: string;
  fillingFlavor: string;
  finishStyle: string;
  colorTone: string;
  botanicalAccent: string;
  customPlaqueText: string;
  fontStyle: string;
  presentationBox: string;
  deliveryDate: string;
  deliverySlot: string;
  specialNotes: string;
}

export interface CartItem {
  cartId: string;
  cakeId?: string;
  title: string;
  subtitle: string;
  image: string;
  price: number;
  quantity: number;
  isBespoke?: boolean;
  bespokeDetails?: BespokeCakeConfig;
  customInscription?: string;
  selectedSize?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  event: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
}


export interface PlatformLinks {
  spotify?: string;
  youtube?: string;
  appleMusic?: string;
  deezer?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  soundCloud?: string;
  merchStore?: string;
  smartLink?: string; // Pre-save/Fan link
}

export interface RoyaltyReport {
  month: string;
  amount: number;
  currency: string;
  status: 'Pendente' | 'Pago' | 'Processando';
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  isrc: string;
  upc?: string;
  coverUrl: string;
  links: PlatformLinks;
  copyrightInfo: string;
  promotionBudget?: string;
  status: 'Rascunho' | 'Agendado' | 'Publicado';
  stats?: {
    streams: number;
    saves: number;
    shares: number;
  };
}

export interface MarketingContent {
  facebook: string;
  instagram: string;
  youtubeDescription: string;
  tiktokCaptions: string;
  smartLinkSlogan: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  checkoutUrl: string;
}

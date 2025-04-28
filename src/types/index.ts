export interface Template {
    id: string;
    title: string;
    category: string;
    // image: string;
    url: string;
    description: string;
    features: string[];
    isFeatured?: boolean;
  }
  
  export type Category = {
    id: string;
    name: string;
    icon: string;
  }
  
  export type ViewMode = 'desktop' | 'tablet' | 'mobile';
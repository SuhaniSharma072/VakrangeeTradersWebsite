export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        url: string;
        altText: string | null;
      };
    }[];
  };
  tags: string[];
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  product: string;
  quantity: string;
  message: string;
}

export type ProductCategory =
  | "all"
  | "lungi"
  | "towel"
  | "gamacha"
  | "bedsheet"
  | "other";

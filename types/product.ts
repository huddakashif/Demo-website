export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export interface Product {
  id: string;
  slug: string;
  name: string;
  color: string;
  price: number;
  sizes: ProductSize[];
  description: string;
  details: string[];
  gradientA: string;
  gradientB: string;
  image?: string;
  inStock: boolean;
  category: "Shirts" | "Dresses" | "Tunics" | "Sets" | "Kaftans" | "Outerwear";
  bestseller?: boolean;
}

export interface CartItem {
  product: Product;
  size: ProductSize;
  quantity: number;
}

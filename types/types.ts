export type ProductStatus = "coming-soon" | "beta" | "released";

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  status: ProductStatus;
  href: string;
}

export interface ProductSeries {
  name: string;
  description: string;
  products: Product[];
}

export interface ProductCatalog {
  [key: string]: ProductSeries;
}

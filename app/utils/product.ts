import type { Product, ProductSeries } from "@/types/types";
import { PRODUCTS } from "@/app/consts/consts";

export const getProductSeries = (
  seriesId: string
): ProductSeries | undefined => {
  return PRODUCTS[seriesId];
};

export const getProduct = (
  seriesId: string,
  productId: string
): Product | undefined => {
  const series = PRODUCTS[seriesId];
  return series?.products.find((p) => p.id === productId);
};

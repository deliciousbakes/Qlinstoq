/** @format */

import { fetchProducts } from "@/actions/ProductActions";
import ProductsList from "@/components/home/ProductsList";
import { ProductCardProps } from "@/types/types";
import EmptyList from "./EmptyList";


export const  ProductsContainer=async({
  category,
  search,
}: {
  category?: string;
  search?: string;
})=> {
  const products: ProductCardProps[] = await fetchProducts({
    category,
    search,
  });

  console.log({ products });

  if (products.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    );
  }

  return <ProductsList products={products} />;
}
export default ProductsContainer;

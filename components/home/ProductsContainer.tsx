import { fetchProducts } from '@/actions/ProductActions';
import { ProductCardProps } from "@/types/types";
import EmptyList from './EmptyList';
import ProductsList from './ProductsList';

async function ProductsContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const products: ProductCardProps[] = await fetchProducts({
    category,
    search,
  });

  if (products.length === 0) {
    return (
      <EmptyList
        heading='No results.'
        message='Try changing or removing some of your filters.'
        btnText='Clear Filters'
      />
    );
  }

  return <ProductsList products={products} />;
}
export default ProductsContainer;

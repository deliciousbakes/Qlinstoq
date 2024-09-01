import { ProductCardProps } from "@/types/types";
import ProductCard from '../card/Card';

function ProductsList({ products }: { products: ProductCardProps[] }) {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-5">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </section>
  );
}
export default ProductsList;  
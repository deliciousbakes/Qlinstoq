/** @format */

import ProductsContainer from "./ProductsContainer";

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  return (
    <section className="mt-28">
      <ProductsContainer category={searchParams.category} />
    </section>
  );
};

export default HomePage;

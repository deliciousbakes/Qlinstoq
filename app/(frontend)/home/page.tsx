/** @format */

import ProductsContainer from "./ProductsContainer";

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  return (
    <section className="mt-28">
      {/* <CategoriesNav /> */}
      {/* <CategoriesList category={searchParams.category} /> */}
      <ProductsContainer category={searchParams.category} />
    </section>
  );
};

export default HomePage;

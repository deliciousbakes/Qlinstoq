import { formatCurrency } from '@/utils/format';

const ProductInfoContainer = ({
  description,
  name,
  sellingPrice,
}: {
  description: string;
  name: string;
  sellingPrice: GLfloat;
}) => {
  return (
    <section className=" mt-20  flex flex-col w-full ">
      <p className="mb-10 font-semibold   text-2xl   ">{name}</p>
      <p className="max-w-3xl">{description}</p>
      <p className="font-semibold   text-xl   mt-8">
        {" "}
        {formatCurrency(sellingPrice)}
      </p>
    </section>
  );
};
export default ProductInfoContainer;

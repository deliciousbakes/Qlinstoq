/** @format */

import { getProductById } from "@/actions/ProductActions";
import ProductForm from "@/components/Forms/ProductForm";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getProductById(id);
  if (!product) return null;
  return (
    <div className="p-8">
      <ProductForm initialData={product} editingId={id} />
    </div>
  );
};

export default page;

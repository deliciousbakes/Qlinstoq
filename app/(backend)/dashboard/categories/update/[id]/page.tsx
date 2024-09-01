/** @format */

import { getCategoryById } from "@/actions/CategoryAction";
import CategoryForm from "@/components/Forms/CategoryForm";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const category = await getCategoryById(id);
  return (
    <div className="p-8">
      <CategoryForm initialData={category} editingId={id} />
    </div>
  );
};

export default page;

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";

import TextArea from "@/components/FormInputs/TextArea";
import TextInput from "@/components/FormInputs/TextInput";

import { createCategory, updateCategoryById } from "@/actions/CategoryAction";
import ImageInput from "@/components/FormInputs/ImageInput";
import { generateSlug } from "@/lib/generateSlug";
import { CategorySchemaType } from "@/utils/schemas";
// import { Category } from "@prisma/client";
import toast from "react-hot-toast";
import FormFooter from "./FormFooter";

type CategoryFormProps = {
  editingId?: string | undefined;
  initialData?: Category | undefined | null;
};
export default function CategoryForm({
  editingId,
  initialData,
}: CategoryFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    defaultValues: {
      title: initialData?.title,
      description: initialData?.description || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/tent-2.JPG";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveCategory(data: CategorySchemaType) {
    try {
      setLoading(true);
      data.slug = generateSlug(data.title);
      data.imageUrl = imageUrl;

      if (editingId) {
        await updateCategoryById(editingId, data);
        setLoading(false);
        // Toast
        toast("Category Successfully Updated!");
        //reset
        reset();
        //route
        router.push("/dashboard/categories");
        setImageUrl("/images/tent-2.JPG");
      } else {
        await createCategory(data);
        setLoading(false);
        // Toast
        toast("Category created successfully !");
        //reset
        reset();
        setImageUrl("/images/tent-2.JPG");
        //route
        router.push("/dashboard/categories");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveCategory)}>
      <FormHeader
        href="/categories"
        title="Category"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Category Title</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Category Title"
                    name="title"
                  />
                </div>
                <div className="grid gap-3">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Description"
                    name="description"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          {/* <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
            <FormSelectInput
              label="Main Categories"
              options={mainCategories}
              option={selectedMainCategory}
              setOption={setSelectedMainCategory}
              toolTipText="Add New Main Category"
              href="/dashboard/inventory/main-categories/new"
            />
          </div>
        </CardContent>
      </Card> */}
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            {/* <Card>
          <CardHeader>
            <CardTitle>Category Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <Select
                isSearchable
                primaryColor="blue"
                value={status}
                onChange={handleChange}
                options={options}
                tent-2=JPGatus"
              />
            </div>
          </CardContent>
        </Card> */}
            <ImageInput
              title="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/categories"
        editingId={editingId}
        loading={loading}
        title="Category"
      />
    </form>
  );
}

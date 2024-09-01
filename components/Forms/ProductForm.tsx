/** @format */

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

import { createProduct, updateProductById } from "@/actions/ProductActions";
import ImageInput from "@/components/FormInputs/ImageInput";
import { ProductSchemaType } from "@/utils/schemas";
import { Product } from "@prisma/client";
import toast from "react-hot-toast";
import FormFooter from "./FormFooter";
// import { categories } from "@/utils/categories";
import { categories } from "@/utils/categoriesWithIcons";
import CategoryInput from "../FormInputs/CategoryInput";

type ProductFormProps = {
  editingId?: string | undefined;
  initialData?: Product;
};
export default function ProductForm({
  editingId,
  initialData,
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    defaultValues: {
      name: initialData?.name,
      description: initialData?.description || "",
      costPrice: initialData?.costPrice,
      sellingPrice: initialData?.costPrice,
      category: initialData?.category,
      userId: initialData?.userId || "",
      imageUrl: initialData?.imageUrl || "",
    },
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const initialImage = initialData?.imageUrl || "/images/tent-2.JPG";
  const [imageUrl, setImageUrl] = useState(initialImage);

  async function saveProduct(data: ProductSchemaType) {
    try {
      setLoading(true);
      data.imageUrl = imageUrl;

      if (editingId) {
        await updateProductById(editingId, data);
        setLoading(false);
        // Toast
        toast("Product Successfully Updated!");
        //reset
        reset();
        //route
        router.push("/dashboard/products");
        setImageUrl("/images/tent-5.JPG");
      } else {
        await createProduct(data);
        setLoading(false);
        // Toast
        toast("Product created successfully !");
        //reset
        reset();
        setImageUrl("/images/tent-3.JPG");
        //route
        router.push("/dashboard/products");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast("Problems during product creation process!");
    }
  }

  const category = watch("category");
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  return (
    <form className="" onSubmit={handleSubmit(saveProduct)}>
      <FormHeader
        href="/products"
        title="Product"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-8 col-span-full space-y-3">
          <Card>
            <CardHeader>
              <CardTitle>Product Title</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-1">
                <div className="grid grid-cols-2 gap-6">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Product Name"
                    name="name"
                  />
                  <TextInput
                    type="number"
                    register={register}
                    errors={errors}
                    label="Product Cost Price"
                    name="costPrice"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <TextInput
                    type="number"
                    register={register}
                    errors={errors}
                    label="Product Selling Price"
                    name="sellingPrice"
                  />
                  <TextInput
                    type="number"
                    register={register}
                    errors={errors}
                    label="Quantity In Hand"
                    name="quantityInHand"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6">
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
          <Card>
            <div className="w-full font-medium ">
              <div className="mb-4 font-semibold">
                <div className="grid  xl:grid-cols-6  lg:grid-cols-5   md:grid-cols-3  grid-cols-2  max-h[30vh] overflow-y-auto  gap-4">
                  {categories.map((item) => {
                    if (item.label === "All") {
                      return null;
                    }
                    return (
                      <div className="col-span" key={item.label}>
                        <CategoryInput
                          selected={category === item.label}
                          icon={item.icon}
                          label={item.label}
                          onClick={(category) =>
                            setCustomValue("category", category)
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <div className="grid auto-rows-max items-start gap-4 ">
            {/* <Card>
          <CardHeader>
            <CardTitle>Product Status</CardTitle>
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
              title="Product Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImage"
            />
          </div>
        </div>
      </div>
      <FormFooter
        href="/products"
        editingId={editingId}
        loading={loading}
        title="Product"
      />
    </form>
  );
}

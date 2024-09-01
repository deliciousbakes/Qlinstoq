/** @format */

// "use client";
import { fetchProductDetails } from "@/actions/ProductActions";
import ProductDetails from "@/components/card/ProductDetails";
import { redirect } from "next/navigation";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const product = await fetchProductDetails(params.id);
  if (!product) redirect("/");
  const pdtImage = product.imageUrl;
  console.log(product?.category);
  console.log(product?.quantityInHand);

  return   <ProductDetails product={product} />
  }

export default PropertyDetailsPage;

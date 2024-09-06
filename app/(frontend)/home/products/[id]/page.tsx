/** @format */

// "use client";
import { fetchProductDetails } from "@/actions/ProductActions";
import ProductDetails from "@/components/card/ProductDetails";
import ProductDetailsInfo from "@/components/card/ProductDetailsInfo";
import { redirect } from "next/navigation";

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const product = await fetchProductDetails(params.id);
  if (!product) redirect("/");

  return <ProductDetailsInfo product={product} />;
}

export default PropertyDetailsPage;

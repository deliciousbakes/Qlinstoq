/** @format */

import { ProductCardProps } from "@/types/types";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

function ProductCard({ product }: { product: ProductCardProps }) {
  const { name, imageUrl, sellingPrice } = product;
  const { id: productId, description } = product;

  return (
    <div className="group relative  grid  justify-center mt-20   gap-12">
      <div className="relative h-[300px] mb-2 overflow-hidden rounded-md    ml-40 ">
        <Image
          src={imageUrl}
          fill
          // sizes="(max-width:300px) 50vw, 50vw"
          alt={name}
          className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold mt-1 capitalize">
            {`Name: ${name.substring(0, 30)}`}
          </h1>
        </div>
        <p className="text-lg mt-1 text-muted-foreground">
          {`Description: ${description.substring(0, 50)}`}
          {/* {`Description: ${description.substring(0, 50)}`} */}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold text-xl">
              {`Cost Price: ${formatCurrency(sellingPrice)}`}
            </span>
          </p>
        </div>
      </div>
      {/* <div className="absolute top-5 right-5 z-5"> */}
      {/* <FavoriteToggleButton productId={productId} /> */}
      {/* </div> */}
    </div>
  );
}
export default ProductCard;

/** @format */

"use client";

import { CartProductProps } from "@/types/types";
import { MinusCircle, PlusCircle } from "lucide-react";

interface setQttyProps {
  cartCounter?: boolean;
  cartProduct: CartProductProps;
  handleQttyIncrease: () => void;
  handleQttyDecrease: () => void;
}

const btnStyles=" border-slate-300    rounded"


const SetQuantity = ({
  cartCounter,
  cartProduct,
  handleQttyIncrease,
  handleQttyDecrease,
}: setQttyProps) => {
  return (
    <div className=" items-center  flex gap-4">
      {cartCounter ? null : <div className=" font-semibold">Quantity:</div>}
      <div className="flex items-center  gap-4  text-sm">
      <button className={btnStyles}  onClick={handleQttyDecrease} >
        <MinusCircle />
      </button>
      <div className="text-sm font-medium">{cartProduct.quantity}</div>
      <button className={btnStyles}       onClick={handleQttyIncrease}>
        <PlusCircle />
      </button>
    </div>
    </div>
  );
};

export default SetQuantity;

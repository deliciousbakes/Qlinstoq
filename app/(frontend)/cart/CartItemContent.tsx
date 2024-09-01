/** @format */

"use client";
import SetQuantity from "@/components/FormInputs/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { CartProductProps } from "@/types/types";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

interface CartItemContentProps {
  item: CartProductProps;
}

const CartItemContent = ({ item }: CartItemContentProps) => {
  const { handleRemoveItemFromCart,handleCartItemQttyDecrease, handleCartItemQttyIncrease ,cartTotalAmount} = useCart();
  return (
    <div
      className=" border-l-[0.5px] border-r-[0.5px]
         border-red-900  "
    >
      <div
        className=" pl-2 grid grid-cols-5  text-sm
         md:text-sm gap-4 border-t-[0.5px]
         border-red-900 py-1 items-center  text-stone-900"
        key={item.id}
      >
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
          <Link href={`/home/products/${item.id}`}>
            <div className="relative w-[70px] aspect-square">
              <Image
                src={item.imageUrl}
                fill
                alt={item.name}
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-between">
            <Link href={`/home/products/${item.id}`}>
              {item.name.substring(0, 30)}
            </Link>
            <div className="">{item.description.substring(0, 50)}</div>
            <div className="w-[70px]">
              <button
                onClick={() => handleRemoveItemFromCart(item)}
                className="text-red-600 underline"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="justify-self-center">
          {formatCurrency(item.sellingPrice)}
        </div>
        <div className="justify-self-center">
          <SetQuantity
            cartProduct={item}
            handleQttyIncrease={() => handleCartItemQttyIncrease(item)}
            handleQttyDecrease={() => handleCartItemQttyDecrease(item)}
            cartCounter
          />
        </div>
        <div className="justify-self-end pr-2 text-black">
          {formatCurrency(item.quantity * item.sellingPrice)}
        </div>
      </div>
    </div>
  );
};

export default CartItemContent;

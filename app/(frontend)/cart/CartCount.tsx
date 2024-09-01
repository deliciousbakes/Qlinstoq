/** @format */

"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

const CartCount = () => {
  const { cartTotalQtty } = useCart();
  const router = useRouter();
  return (
    <div
      className=" cursor-pointer relative"
      onClick={() => {
        router.push("/cart");
      }}
    >
      <div className="text-3xl dark:text-cyan-950 ">
        <FaShoppingCart />
      </div>
      <span className="absolute top-[-10px] right-[-15px] bg-jade   dark:bg-amber-900 text-white h-7 w-7   rounded-full flex items-center justify-center text-sm">
        {cartTotalQtty}
      </span>
    </div>
  );
};

export default CartCount;

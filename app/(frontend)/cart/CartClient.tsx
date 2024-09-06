/** @format */

"use client";
// import { MakeOrderTransaction } from "@/actions/OrderActions";
import HeadingPage from "@/components/FormInputs/Heading";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MdArrowBack } from "react-icons/md";
import CartItemContent from "./CartItemContent";

const CartClient = () => {
  const { handleSubmit } = useForm();
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center ">
        <div className="text-2xl">Your cart is empty</div>
        <div className="">
          <Link
            href="/home"
            className="flex text-slate-500 gap-4 items-center mt-3"
          >
            <MdArrowBack />
            <span>Start shopping now</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className="">
      <div>
        <HeadingPage
          title={"Shopping Cart"}
          className={"grid place-items-center mb-8   dark:text-gray-950"}
        />

        <div className="grid grid-cols-5 items-center gap-4  bg-cyan-700 py-2  px-3 text-lg  font-semibold rounded-t-xl">
          <div className="col-span-2 justify-self-start capitalize">
            product
          </div>
          <div className=" justify-self-center  capitalize">price</div>
          <div className="justify-self-center  capitalize">quantity</div>
          <div className=" justify-self-end  capitalize">total</div>
        </div>
        {cartProducts &&
          cartProducts?.map((product) => {
            const { id } = product;
            return <CartItemContent key={id} item={product} />;
          })}
        <div className="border-t-[0.5px]   border-red-900  bg-cyan-700   px-2 pb-2   rounded-b-2xl">
          <div className=" gap-4 grid grid-cols-2 my-2">
            <div className="">
              <Button
                variant="default"
                onClick={() => handleClearCart()}
                className="mt-2  text-white text-xl  dark:bg-slate-900"
              >
                Clear cart
              </Button>
            </div>
            <div className="flex  flex-col ">
              <div className="flex justify-between w-full  font-semibold  text-white text-xl">
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotalAmount)}</span>
              </div>
              <p>Discount at Checkout</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <Link
                href="/home"
                className="flex text-white   text-xl gap-2   items-center mt-3"
              >
                <MdArrowBack />
                <span className="text-white text-xl   ">Continue shopping</span>
              </Link>
            </div>
            <Button
              variant="default"
              type="submit"
              // onClick={() => MakeOrderTransaction()}
              className="mt-2 w-full  text-white text-xl    dark:bg-slate-900 "
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CartClient;

/** @format */

import { getCart, setCartProductQuantity } from "@/actions/CartActions";
import Container from "@/components/container";
import HeadingPage from "@/components/FormInputs/Heading";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import CartItemEntry from "./CartItemEntry";

export const metadata = {
  title: "Your QlinStoQ cart",
};

const CartPage = async () => {
  const cart = await getCart();
  return (
    <div className="pt-8 ">
      <Container>
        <HeadingPage
          title={"Shopping Cart"}
          className={"grid place-items-center mb-8  "}
        />

        {!cart?.cartItems.length ? (
          <>
            <p className="flex   text-xl gap-4 items-center mt-3">
              Your cart is empty
            </p>
            <div>
              <Link
                href="/home"
                className="flex   text-xl text-slate-500 gap-4 items-center mt-3"
              >
                <MdArrowBack />
                <span>Start shopping now</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-5 items-center gap-4  bg-cyan-700 py-2  px-3 text-lg  font-semibold rounded-t-xl">
              <div className="col-span-2 justify-self-start capitalize">
                product
              </div>
              <div className=" justify-self-center  capitalize">price</div>
              <div className="justify-self-center  capitalize">quantity</div>
              <div className=" justify-self-end  capitalize">total</div>
            </div>
            {cart?.cartItems.map((cartItem) => (
              <CartItemEntry
                cartItem={cartItem}
                key={cartItem.id}
                setCartProductQuantity={setCartProductQuantity}
              />
            ))}

            <div className="border-t-[0.5px]   border-red-900  bg-cyan-700   px-2 pb-2   rounded-b-2xl">
              <div className=" gap-4 grid grid-cols-2 my-2">
                <div className="">{/* <ClearButton /> */}</div>
                <div className="flex  flex-col ">
                  <div className="flex justify-between w-full  font-semibold  text-white text-xl">
                    <span>Subtotal</span>
                    <span>{formatCurrency(cart?.cartItemSubTotal || 0)}</span>
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
                    <span className="text-white text-xl   ">
                      Continue shopping
                    </span>
                  </Link>
                </div>
               <Button
                  variant="default"
                  type="submit"
                  // onClick={() => MakeOrderTransaction()}
                  className="mt-2 w-full  text-white text-xl   "
                >
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CartPage;

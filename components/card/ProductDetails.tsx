/** @format */
"use client";
import { useCart } from "@/hooks/useCart";
import { CartProductProps, ProductCardProps } from "@/types/types";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import Container from "../container";
import AddToCartButton from "../FormInputs/AddToCartButton";
import SetQuantity from "../FormInputs/SetQuantity";

const Horizontal = () => {
  return <hr className="w-[30%] my-1" />;
};
const ProductDetails = ({ product }: { product: ProductCardProps }) => {
  const { handleAddProductToCart, cartProducts } = useCart();

  const [isProductInCart, setIsProductInCart] = useState(false);

  const router = useRouter();
  console.log({ cartProducts });
  const {
    id: pdtId,
    name,
    imageUrl,
    sellingPrice,
    description,
    category,
    userId,
    costPrice,
    quantityInHand,
  } = product;
  const [cartProduct, setCartProduct] = useState<CartProductProps>({
    imageUrl: imageUrl,
    id: pdtId,
    name: name,
    userId: userId,
    costPrice: costPrice,
    quantityInHand: quantityInHand,
    description: description,
    category: category,
    sellingPrice: sellingPrice,
    cartTotalQtty: 1,
    quantity: 1,
  });

  const handleQttyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  const handleQttyIncrease = useCallback(() => {
    if (cartProduct.quantity === 10000) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product.id]);

  return (
    <Container>
      <div className="mt-20 grid  grid-cols-1 md:grid-cols-2 gap-12 place-content-center">
        <div className=" ">
          <Image
            src={imageUrl}
            alt={name}
            width={1650}
            height={1600}
            className="rounded-lg"
          />
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold mt-1 capitalize">
              {`Name: ${name.substring(0, 30)}`}
            </h1>
          </div>
          <Horizontal />
          <span className="text-xl font-semibold">Description: </span>
          <span className="text-lg mt-1 text-muted-foreground">
            {description.substring(0, 50)}
          </span>
          <Horizontal />
          <div className="-col justify-between items-center mt-1">
            <p className="text-sm mt-1">
              <span className="font-semibold text-xl">
                {`Cost Price: ${formatCurrency(sellingPrice)}`}
              </span>
            </p>
            <Horizontal />
            <div className="font-bold">
              <span>Category: </span> {category}
            </div>
            <Horizontal />
            <div
              className={
                quantityInHand >= 1
                  ? "text-cyan-800   text-xl font-semibold"
                  : "text-red-950 text-xl font-semibold"
              }
            >
              {quantityInHand >= 1 ? "In Stock" : "Out of Stock"}
            </div>
            <Horizontal />

            {isProductInCart ? (
              <>
                <p className="mb-2 text-slate-500 flex items-center gap-4">
                  <MdCheckCircle size={20} className="text-teal-600" />
                  <span>Product Added to cart</span>
                </p>
                <div className="max-w-[500px]">
                  <AddToCartButton
                    label={"View cart"}
                    onClick={() => router.push("/cart")}
                  />
                </div>{" "}
              </>
            ) : (
              <>
                <div className="">
                  <SetQuantity
                    cartProduct={cartProduct}
                    handleQttyIncrease={handleQttyIncrease}
                    handleQttyDecrease={handleQttyDecrease}
                  />
                </div>
                <Horizontal />
                <div className="max-w-[500px]">
                  <AddToCartButton
                    label={"Add To cart"}
                    icon={FaShoppingCart}
                    onClick={() => handleAddProductToCart(cartProduct)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;

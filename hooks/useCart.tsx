/** @format */
"use client";
import { CartProductProps } from "@/types/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQtty: number;
  cartTotalAmount: number;
  cartProducts: CartProductProps[] | null;
  handleAddProductToCart: (product: CartProductProps) => void;
  handleRemoveItemFromCart: (product: CartProductProps) => void;
  handleCartItemQttyDecrease: (product: CartProductProps) => void;
  handleCartItemQttyIncrease: (product: CartProductProps) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQtty, setCartTotalQtty] = useState(0);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductProps[] | null>(
    null
  );

console.log({ cartTotalAmount });
console.log({ cartTotalQtty });

  useEffect(() => {
    const cartItems: any = localStorage.getItem("empireStoreCartItems");
    const localStorageCartProducts: CartProductProps[] | null =
      JSON.parse(cartItems);
    // put cartproducts  from local storage into state
    setCartProducts(localStorageCartProducts);
  }, []);

  useEffect(() => {
    const getCartTotals = () => {
      if (cartProducts) {
        const { totalCartItemQtty, totalCartAmount } = cartProducts?.reduce(
          (acc, item) => {
            const { sellingPrice, quantity } = item;
            const itemTotal = sellingPrice * quantity;
            acc.totalCartAmount += itemTotal;
            acc.totalCartItemQtty += quantity;
            return acc;
          },
          { totalCartItemQtty: 0, totalCartAmount: 0 }
        );
        setCartTotalQtty(totalCartItemQtty);
        setCartTotalAmount(totalCartAmount);
      }
    };
    getCartTotals();
  }, [cartProducts]);

  const handleAddProductToCart = useCallback((product: CartProductProps) => {
    setCartProducts((prevState) => {
      let updatedCart;
      if (prevState) {
        updatedCart = [...prevState, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem("empireStoreCartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  }, []);

  const handleRemoveItemFromCart = useCallback(
    (product: CartProductProps) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        // set the state with the filtered pdts
        setCartProducts(filteredProducts);
        toast.success("Product Removed from cart");
        // make local storage have the rest of the cart objects wwithout the one removed
        localStorage.setItem(
          "empireStoreCartItems",
          JSON.stringify(filteredProducts)
        );
      }
    },
    [cartProducts]
  );

  const handleCartItemQttyIncrease = useCallback(
    (product: CartProductProps) => {
      let updatedProduct;
      if (product.quantity === 2000)
        return toast.error("Opp! Maximum quantity reached");
      
      console.log("running to add qtty")
      
      if (cartProducts) {
        updatedProduct = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        //if product exists then we can increase its qtty
        if (existingIndex > -1) {
          updatedProduct[existingIndex].quantity = ++updatedProduct[
            existingIndex
          ].quantity;
        }
        //put it in state
        setCartProducts(updatedProduct);

        // make local storage up to date
        localStorage.setItem(
          "empireStoreCartItems",
          JSON.stringify(updatedProduct)
        );
      }
    },
    [cartProducts]
  );

  const handleClearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQtty(0);
    // empty local storage
    localStorage.setItem("empireStoreCartItems", JSON.stringify(null));
  }, [cartProducts]);

  const handleCartItemQttyDecrease = useCallback(
    (product: CartProductProps) => {
      let updatedProduct;
      // values should not be nagative

      if (product.quantity === 1)
        return toast.error("Opp! Minimum quantity reached");
      if (cartProducts) {
        updatedProduct = [...cartProducts];
        const existingIndex = cartProducts.findIndex(
          (item) => item.id === product.id
        );
        //if product exists then we can increase its qtty
        if (existingIndex > -1) {
          updatedProduct[existingIndex].quantity = --updatedProduct[
            existingIndex
          ].quantity;
        }
        //put it in state
        setCartProducts(updatedProduct);

        // make local storage up to date
        localStorage.setItem(
          "empireStoreCartItems",
          JSON.stringify(updatedProduct)
        );
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQtty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveItemFromCart,
    handleCartItemQttyIncrease,
    handleCartItemQttyDecrease,
    handleClearCart,
    cartTotalAmount,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};

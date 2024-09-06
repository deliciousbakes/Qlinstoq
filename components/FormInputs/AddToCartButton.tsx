/** @format */

"use client";

import { useState, useTransition } from "react";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
// import { Icon } from "lucide-react";

interface ButtonProps {
  label: string;
  icon?: IconType;
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}
const AddToCartButton = ({
  productId,
  incrementProductQuantity,
  label,
  icon: Icon,
}: ButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="">
      <Button
        size="lg"
        className="gap-6 text-lg "
        onClick={() => {
          setSuccess(false),
            startTransition(async () => {
              await incrementProductQuantity(productId);
              setSuccess(true);
            });
        }}
      >
        {Icon && <Icon size={24} />} {label}
      </Button>
      {isPending && <span className="loading loading-spinner loading-md " />}
      {!isPending && success && (
        <span className="text-green-700">Added to Cart</span>
      )}
    </div>
  );
};

export default AddToCartButton;

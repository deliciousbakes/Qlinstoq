/** @format */

"use client";

import { Button } from "@/components/ui/button";
// import { SignInButton } from "@clerk/nextjs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-hook-form";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuPenSquare, LuTrash2 } from "react-icons/lu";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  title: string;
  LoadingTitle: string;
  size?: btnSize;
  // onSubmit: () => void;
};

export const SubmitButton = ({
  className = "",
  title = "",
  LoadingTitle = "",
  size = "lg",
}: // onSubmit,
SubmitButtonProps) => {
  const { isSubmitting } = useFormState();

  return (
    <Button
      // onSubmit={onSubmit}
      type="submit"
      disabled={isSubmitting}
      className={`capitalize ${className} `}
      size={size}
    >
      {isSubmitting ? (
        <div className="flex gap-3 sm:size-sm">
          <ReloadIcon className="mr-2 h-6 w-6 animate-spin" />
          <span> {LoadingTitle} </span>
        </div>
      ) : (
        <span> {title} </span>
      )}
    </Button>
  );
};

export const DeleteBtn = ({
  title,
  id,
}: {
  title: string;
  id: string | undefined;
}) => {
  return (
    <Button type="submit" size="lg" id={id}>
      {title}
    </Button>
  );
};

export const EditBtn = ({
  row,
  title,
  editEndpoint,
  id,
}: {
  row: string;
  id: string | undefined;
  title: string;
  editEndpoint: string;
}) => {
  return (
    <Button type="submit" size="lg" id={id}>
      {title}
    </Button>
  );
};

// export const CardSignInButton = () => {
//   return (
//     <SignInButton mode="modal">
//       <Button
//         type="button"
//         size="icon"
//         variant="outline"
//         className="p-2 cursor-pointer"
//         asChild
//       >
//         <FaRegHeart />
//       </Button>
//     </SignInButton>
//   );
// };

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

type actionType = "edit" | "delete";
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LuPenSquare />;
      case "delete":
        return <LuTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <ReloadIcon className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};

type AddNewButtonProps = {
  href: string;
  btnTitle: string;
};

export const AddNewButton = ({ btnTitle, href }: AddNewButtonProps) => {
  return (
    <Button
      type="button"
      size="lg"
      variant="secondary"
      asChild
      className="bg-jade text-xl  hover:bg-emerald-600   dark:bg-orange-900 "
      // className="bg-jade hover:bg-cyan-700   dark:bg-emerald-950 "
    >
      <Link className="flex items-center space-x-3 text-white " href={href}>
        <Plus />
        <span>{btnTitle}</span>
      </Link>
    </Button>
  );
};

type LinkProps = {
  href: string;
  btnTitle: string;
  className?: string;
  children: React.ReactNode;
};

export const LinkButton = ({
  btnTitle,
  href,
  children,
  className,
}: LinkProps) => {
  return (
    <Button
      type="button"
      size="lg"
      variant="secondary"
      asChild
      className={`"   bg-jade hover:bg-cyan-700   space-x-3 dark:bg-emerald-950 text-xl  font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 ${className}`}
      // className="focus:outline-none text-white bg-green-700  "
    >
      <Link href={href} key={href}>
        {children}
        <span>{btnTitle}</span>
      </Link>
    </Button>
  );
};

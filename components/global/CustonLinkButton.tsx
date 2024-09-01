/** @format */

import Link from "next/link";
import { Button } from "../ui/moving-border";
// import { Button } from "@components/ui/MovingBorder";

type CustomLinkButtonProps = {
  title: string;
  href: string;
};

const CustonLinkButton = ({ title, href }: CustomLinkButtonProps) => {
  return (
    <div>
      <Button
        asChild
        className="py-2 text-xl text-black  bg-emerald-300 dark:bg-emerald-500 dark:text-white border-neutral-400  dark:border-slate-400 px-8"
      >
        <Link href={href}>{title}</Link>
      </Button>
    </div>
  );
};

export default CustonLinkButton;

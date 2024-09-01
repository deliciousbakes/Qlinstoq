import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
type AddNewButtonProps = {
href: string;
toolTipText: string;
title: string;
};
export default function AddNewButton({ href, toolTipText , title}: AddNewButtonProps) {
return (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button asChild variant={"outline"} size={"sm"}>
          <Link href={href} className="flex gap-2">
            <Plus className="w-4 h-4" />{title}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{toolTipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
}
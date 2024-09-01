/** @format */

"use client";


import { Button } from "@/components/ui/moving-border";

export const MovingBorderDemo=({title}:{title:string})=> {
  return (
    <div>
      <Button className=  "text-lg bg-zinc-300 dark:bg-slate-400 text-teal-900 font-semibold  border-neutral-200 dark:border-slate-800  w-96 h-10 justify-center ">
       {title}
      </Button>
    </div>
  );
}

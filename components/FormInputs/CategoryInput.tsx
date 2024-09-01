/** @format */

"use client";
import { IconType } from "react-icons";

interface CategoryInputprops {
  selected: boolean;
  label: string;
  icon: IconType;
  onClick: (value: string) => void;
}
const CategoryInput = ({
  selected,
  label,
  icon: Icon,
  onClick,
}: CategoryInputprops) => {
  return (
    <div
      className={`flex rounded-xl border-2 p-3  items-center gap-2 justify-center hover:border-slate-400 transtion cursor-pointer
              ${selected ? "border-slate-500" : "border-slate-200"}
      `}
      onClick={() => onClick(label)}
    >
      <span>
        <p>take it fron thier heart</p>
      </span>
      <Icon size={30} />
      {label}
    </div>
  );
};

export default CategoryInput;

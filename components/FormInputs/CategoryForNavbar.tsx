/** @format */

"use client";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryInputprops {
  selected: boolean;
  label: string;
  icon: IconType;
}
const CategoryForNavbar = ({
  selected,
  label,
  icon: Icon,
}: CategoryInputprops) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClcik = useCallback(() => {
    if (label === "All") {
      router.push("/home");
    } else {
      let currentQuery = {};
      if (params) {
        currentQuery = queryString.parse(params.toString());
      }
      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };
      const url = queryString.stringifyUrl(
        {
          url: "/home/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );
      router.push(url);
    }
  }, [label, params, router]);
  return (
    <div
      onClick={handleClcik}
      className={`flex  text-center p-2 border-2  items-center justify-center hover:border-b-melon  transtion cursor-pointer
              ${
                selected
                  ? "border-b-canbery   text-jade text-xl font-bold"
                  : "border-slate-500   border-transparent"
              }
      `}
    >
      <div className=" flex gap-3">
        <Icon size={20} />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </div>
  );
};

export default CategoryForNavbar;

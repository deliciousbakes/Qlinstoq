/** @format */
"use client";
import { categories } from "@/utils/categoriesWithIcons";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryForNavbar from "./CategoryForNavbar";

const CategoriesNav = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/home";
  if (!isMainPage) return null;

  return (
    <div className="">
      <div className="pt-4 flex flex-row justify-between  items-center  px-8">
        {categories.map((item) => {
          return (
            <div className="col-span" key={item.label}>
              <CategoryForNavbar
                selected={
                  category === item.label ||
                  (category === null && item.label === "All")
                }
                icon={item.icon}
                label={item.label}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesNav;

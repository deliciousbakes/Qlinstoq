/** @format */

import { categories } from "@/utils/categories";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const name = "category";
function CategoriesSelect({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize  mb-10 pb-10">
        Select category
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
        onValueChange={(value) => {}}
      >
        <SelectTrigger id={name} >
          <SelectValue />
        </SelectTrigger>
        <SelectContent >
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex items-center gap-2">{item.label}</span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default CategoriesSelect;

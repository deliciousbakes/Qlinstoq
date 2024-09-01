/** @format */

import { CategoryLabel } from "@/utils/categories";
import { IconType } from "react-icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: Category[];
  register:any
};
const FormSelect = ({
  label,
  name,
  options,
  register,
}: // defaultValue:{},
SelectInputProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel> {label || name} </FormLabel>
            <Select
              // defaultValue={ options[0]}
              name={name}
              {...register(`${name}`, { required: true })}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger id={name}>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((item) => {
                  return (
                    <SelectItem key={item.label} value={item.label.toString()}>
                        <item.icon /> {item.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>{" "}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormSelect;

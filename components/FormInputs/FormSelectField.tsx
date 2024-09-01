/** @format */

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

type SelectInputProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
  control: any;
};
const FormSelectField = ({
  label,
  name,
  options,
  control,
  defaultValue,
}: SelectInputProps) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel> {label || name} </FormLabel>
            <Select
              defaultValue={defaultValue || options[0]}
              name={name}
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
                    <SelectItem key={item} value={item.toString()}>
                      {item}
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

export default FormSelectField;

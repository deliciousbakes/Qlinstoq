/** @format */

"use client";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type FormFieldsInputProps = {
  name: string;
  type?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  control: any;
};

export const FormInputField = (props: FormFieldsInputProps) => {
  const { label, name, placeholder, type, control } = props;

  return (
    <div className="mb-1">
      <FormField
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel className="pl-3 mb-1 text-xl">{label}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  type={type}
                  className="text-xl"
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </FormItem>
          );
        }}
      />
    </div>
  );
};

/** @format */

import { Controller } from "react-hook-form";
import { FormControl } from "../ui/form";
import { Label } from "../ui/label";
import { Select } from "../ui/select";
import { MenuItem } from "@headlessui/react";

type SelectInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
};
const FormSelect = ({
 register,
errors,
label,
type,
name,
placeholder,
defaultValue,
}: SelectInputProps) => {
  return (
    <FormControl>
      <Label id={`input-label-${name}`}>{label}</Label>
      <Controller
        name={name}
        defaultValue={defaultValue || ""}
        require={require}
        key={`select-${name}`}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            onChange={onChange}
            value={value}
            label={label}
            error={!!error}
          >
            {Option.map((option, index) => (
              <MenuItem
                value={option.value}
                key={`menu-item-${name}$-{option?.key}-${index}`}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

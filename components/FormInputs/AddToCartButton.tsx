"use client"

import { IconType } from "react-icons";
import { Button } from "../ui/button";
// import { Icon } from "lucide-react";

interface ButtonProps{
    label: string;
    icon?: IconType;
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=> void
    

}
const AddToCartButton = ({ label, icon:Icon, onClick }: ButtonProps) => {
    return (
      <Button size="lg" className="gap-6 text-lg "onClick={onClick}>
        {Icon && <Icon size={24} />} {label} 
      </Button>
    );
};

export default AddToCartButton

/** @format */

import { IconType } from "react-icons";
import { MdCabin, MdStorefront } from "react-icons/md";

import { TbBuildingCottage, TbCaravan, TbTent } from "react-icons/tb";

import { GiMushroomHouse, GiWoodCabin } from "react-icons/gi";
import { PiLighthouse, PiVan, PiWarehouse } from "react-icons/pi";

import { GoContainer } from "react-icons/go";
import { FaAirbnb } from "react-icons/fa";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | "Fried Goods"
  | "Baked goods"
  | "Kitchen"
  | "Juices"
  | "Raw"
  | "Others"
  | "All"
  | "magic"
  | "Phone"
  | "warehouse"
  | "lodge";

export const categories: Category[] = [
  {
    label: "Fried Goods",
    icon: MdCabin,
  },
  {
    label: "Baked goods",
    icon: PiVan,
  },
  {
    label: "Kitchen",
    icon: TbTent,
  },
  {
    label: "Juices",
    icon: PiWarehouse,
  },
  {
    label: "Raw",
    icon: TbBuildingCottage,
  },
  {
    label: "magic",
    icon: GiMushroomHouse,
  },
  {
    label: "Phone",
    icon: FaAirbnb,
  },
  {
    label: "Others",
    icon: GoContainer,
  },

  {
    label: "All",
    icon: PiLighthouse,
  },
  {
    label: "lodge",
    icon: GiWoodCabin,
  },
];

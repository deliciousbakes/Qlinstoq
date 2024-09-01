/** @format */

type Category = {
  label: CategoryLabel;
};

export type CategoryLabel =
  | "Baked good"
  | "Fried goods"
  | "Fast food"
  | "cottage"
  | "Restaurant"
  | "Others"
  | "tiny"
  | "magic"
  | "warehouse"
  | "lodge";

export const categories: Category[] = [
  {
    label: "Baked good",
  },
  {
    label: "Restaurant",
  },
  {
    label: "Fast food",
  },
  {
    label: "Fried goods",
  },
  {
    label: "Others",
  },
  // {
  //   label: 'warehouse',
  // },
  // {
  //   label: 'cottage',
  // },
  // {
  //   label: 'magic',
  // },

  // {
  //   label: 'Others',
  // },

  // {
  //   label: 'tiny',
  // },
];

type SingleCategory = {
  label: string;
};

// export type SingleCategoryLabel =
//   | "Bakeds goods"
//   | "Fried goods"
//   | "Fast food"
//   | "cottage"
//   | "Restaurant"
//   | "Others"
//   | "tiny"
//   | "magic"
//   | "warehouse"
//   | "lodge";

export const singleCategories: string[] = [
"Baked goods" ,
"Restaurant",
"Fast food",
"Fried goods",
"Others",
];

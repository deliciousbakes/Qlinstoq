/** @format */

export type ProductCardProps = {
  imageUrl: string | null;
  id: string;
  name: string;
  userId: string | null;
  costPrice: number;
  quantityInHand: number;
  description: string;
  category: string;
  sellingPrice: number;
};

export type CartProductProps = {
  imageUrl: string | null;
  id: string;
  name: string;
  userId: string | null;
  costPrice: number;
  quantityInHand: number;
  description: string;
  category: string;
  sellingPrice: number;
  cartTotalQtty: number;
  quantity: number;
};
export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  userId: string;
};

export type ProductProps = {
  imageUrl: string | null;
  description: string;
  userId: string | null;
  employeeName: string | null;
  name: string;
  costPrice: number;
  quantityInHand: number;
  sellingPrice: number;
  category: string;
};

export type EmployeeProps = {
  emplPhone: number;
  emplImageUrl: string;
  name: string;
  userId: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type UserProps = {
  email: string;
  userImageurl: string;
  name: string;
  clerkUserId: string;
  role: string;
};

/** @format */

"use server";

import db from "@/lib/db";
// import { ProductProps } from "@/types/types";
import { ProductProps } from "@/types/types";
import { revalidatePath } from "next/cache";
import { GetUserFromDatabaseByEmail } from "./UserActions";

export async function createBulkProducts(products: ProductProps[]) {
  try {
    for (const product of products) {
      await createProduct(product);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductById(id: string, data: ProductProps) {
  try {
    const updatedProduct = await db.product.update({
      where: {
        id,
      },
      data: {
        ...data,
        quantityInHand: Number(data?.quantityInHand),
        costPrice: Number(data?.costPrice),
        sellingPrice: Number(data?.sellingPrice),
      },
    });
    revalidatePath("/dashboard/products");
    return updatedProduct;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProductById(id: string) {
  try {
    const deletedProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedProduct,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function deleteManyProducts() {
  try {
    await db.product.deleteMany();

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function createProduct(data: ProductProps) {
  const loggedInDBUser = await GetUserFromDatabaseById();
  const userId = loggedInDBUser?.id;
  const emplName = `${loggedInDBUser?.firstName} ${loggedInDBUser?.lastName}`;
  console.log({ emplName });
  console.log({ loggedInDBUser });
  try {
    //   const existingProduct = await db.product.findUnique({
    //     where: {
    //       slug,
    //     },
    //   });
    //   if (existingProduct) {
    //     return existingProduct;
    //   }

    const newProduct = await db.product.create({
      data: {
        ...data,
        quantityInHand: Number(data?.quantityInHand),
        employeeName: `${loggedInDBUser?.firstName} ${loggedInDBUser?.lastName}`,
        userId: userId,
        costPrice: Number(data?.costPrice),
        sellingPrice: Number(data?.sellingPrice),
        category: "Fried Goods",
      },
    });
    revalidatePath("/dashboard/products");
    return newProduct;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return products;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const fetchProductDetails = (id: string) => {
  return db.product.findUnique({
    where: {
      id,
    },
  });
};

export const fetchProductsByCategoryAndSearch = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const products = await db.product.findMany({
    where: {
      category,
      OR: [
        {
          name: { contains: search, mode: "insensitive" },
          description: { contains: search, mode: "insensitive" },
        },
      ],
    },
    select: {
      id: true,
      imageUrl: true,
      name: true,
      description: true,
      category: true,
      sellingPrice: true,
      userId: true,
      costPrice: true,
      quantityInHand: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

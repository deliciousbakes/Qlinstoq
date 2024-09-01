/** @format */

"use server";

// import { auth } from "@/auth";
import db from "@/lib/db";
import { ProductProps } from "@/types/types";
import { revalidatePath } from "next/cache";
import { CheckUser } from "./UserActions";

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

export const fetchProductByCategory = async ({
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

export async function updateProductQIHById(id: string, data: ProductProps) {
  const getCurrentQIH = await db.product.findUnique({
    where: {
      id,
    },
  });
  const currentProductQIH = getCurrentQIH?.quantityInHand;
  try {
    const updatedProduct = await db.product.update({
      where: {
        id,
      },
      data: {
        ...data,
        quantityInHand:
          Number(currentProductQIH) + Number(data?.quantityInHand),
        costPrice: Number(data?.costPrice),
        sellingPrice: Number(data?.sellingPrice),
      },
    });
    revalidatePath(`/dashboard/products/${id}`);
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

export const createProduct = async (data: ProductProps) => {
  const user = await CheckUser();
  if (!user) return null;
  console.log({ user });
  try {
    const newProduct = await db.product.create({
      data: {
        ...data,
        quantityInHand: Number(data?.quantityInHand),
        employeeName: user.email,
        userId: user?.id,
        costPrice: Number(data?.costPrice),
        sellingPrice: Number(data?.sellingPrice),
      },
    });
    revalidatePath("/dashboard/products");
    return newProduct;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function fetchAllProducts() {
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

export const fetchProducts = async ({
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
      costPrice: true,
      quantityInHand: true,
      userId: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

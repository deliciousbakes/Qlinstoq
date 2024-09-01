"use server";

import db from "@/lib/db";
import { UserProps } from "@/types/types";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getUsers() {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
}

export const createUser = async (data: UserProps) => {
  const user = await currentUser();

  if (!user) return null;
  const { email, name } = data;

  const existingUser = await db.user.findUnique({
    where: { clerkUserId: user.id },
  });
  if (existingUser) {
    return { error: "Email not available!" };
  }
  try {
    const newUser = await db.user.create({
      data: {
        name: user.fullName,
        email: user.emailAddresses[0].emailAddress,
        clerkUserId: user.id,
      },
    });
    revalidatePath("/home/users");
    return newUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function deleteUsers() {
  try {
    await db.user.deleteMany();
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export const CheckUser = async () => {
  const loggedInUser = await currentUser();
  console.log({ loggedInUser });

  if (!loggedInUser) return null;

  const loggedInUserInDB = await db.user.findUnique({
    where: {
      clerkUserId: loggedInUser.id,
    },
  });

  if (loggedInUserInDB) return loggedInUserInDB;

  if (!loggedInUserInDB) {
    return await db.user.create({
      data: {
        clerkUserId: loggedInUser.id,
        userImageUrl: loggedInUser.imageUrl,
        email: loggedInUser.emailAddresses[0].emailAddress,
        name: loggedInUser.fullName,
        role: "ADMIN",
      },
    });
  }
  return loggedInUserInDB;
};

export const GetUserFromDatabaseByEmail = async () => {
  const user = await currentUser();

  if (!user) return null;
  const loggedInUser = await db.user.findUnique({
    where: { email: user?.emailAddresses[0].emailAddress },
  });
  return loggedInUser;
};


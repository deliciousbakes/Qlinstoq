/** @format */

"use server";

import { auth } from "@clerk/nextjs/server";

export  const isAuth = async () => {
  const { userId } = await auth();
  console.log({ userId });
  const isAuth = !!userId;
  return isAuth;
};


"use server";

import prisma from "./prisma";

export const getUser = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  return user;
};

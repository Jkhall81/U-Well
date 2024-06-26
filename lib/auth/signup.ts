"use server";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { signIn } from "@/app/auth";

const prisma = new PrismaClient();

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
}

export const signup = async (data: SignUpData) => {
  const { firstName, lastName, email, password1, password2 } = data;

  if (password1 !== password2) {
    return { error: "Passwords dont match!" };
  }

  const hashedPassword = await hash(password1, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  const response = await signIn("credentials", {
    email,
    password: password1,
    redirect: false,
  });
  return response;
};

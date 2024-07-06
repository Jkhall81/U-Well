"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";
import { auth } from "@/app/auth";
import prisma from "./prisma";

export const login = async (data: any) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  console.log("from login server action!", user);
  if (user?.emailVerified) {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      const session = await auth();
      return session;
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials!" };
          default:
            return { error: "Something went wrong!" };
        }
      }
      throw error;
    }
  } else {
    return "email not verified";
  }
};

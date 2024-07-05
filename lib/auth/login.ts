"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";
import { auth } from "@/app/auth";

export const login = async (data: any) => {
  const { email, password } = data;

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
};

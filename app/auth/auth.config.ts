import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig, User } from "next-auth";
import bcrypt from "bcryptjs";
import prisma from "@/lib/auth/prisma";

interface Credentials {
  email: string;
  password: string;
}

interface UserWithPassword extends User {
  password: string | null;
}

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        // Type assertion to ensure credentials is of type Credentials
        const { email, password } = credentials as Credentials;

        // 1. Find user by username
        const user = (await prisma.user.findUnique({
          where: { email: email },
        })) as UserWithPassword | null;
        console.log("checking this user object", user);
        // 2. Check if user exists and password matches
        if (
          user &&
          user.password &&
          (await bcrypt.compare(password, user.password))
        ) {
          // User found and password matches, return the user object
          return user;
        } else {
          // Invalid credentials, return null
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;

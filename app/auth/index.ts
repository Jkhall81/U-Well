import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import prisma from "@/lib/auth/prisma";

interface Credentials {
  email: string;
  password: string;
}

interface UserWithPassword extends User {
  password: string | null;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
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
});

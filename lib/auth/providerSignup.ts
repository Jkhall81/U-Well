"use server";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { signIn } from "@/app/auth";

const prisma = new PrismaClient();

interface SignUpData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  providerCode: string;
  email: string;
  phoneNumber: string;
  passwordOne: string;
  passwordTwo: string;
}

export const providerSignup = async (data: SignUpData) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    providerCode,
    phoneNumber,
    email,
    passwordOne,
    passwordTwo,
  } = data;

  if (passwordOne !== passwordTwo) {
    return { error: "Passwords dont match!" };
  }

  const hashedPassword = await hash(passwordOne, 10);

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        dateOfBirth,
        phoneNumber,
      },
    });

    const serviceProvider = await prisma.serviceProvider.create({
      data: {
        providerCode,
      },
    });

    const userId = user.id;
    const serviceProviderId = serviceProvider.id;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        serviceProviderId: serviceProviderId,
      },
    });

    const updatedServiceProvider = await prisma.serviceProvider.update({
      where: { id: serviceProviderId },
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    const response = await signIn("credentials", {
      email,
      password: passwordOne,
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error("Error singing up: ", error);
    throw error;
  }
};

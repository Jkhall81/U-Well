"use server";

import prisma from "./prisma";
import { hash } from "bcryptjs";
import { sendEmail } from "./email-actions";
import { signIn } from "@/app/auth";
import React from "react";
import VerificationTemplate from "@/emails/verification-template";
import { generateSecureToken } from "../utils";

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

  const emailVerificationToken = generateSecureToken();

  const hashedPassword = await hash(passwordOne, 10);

  try {
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        emailVerificationToken,
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

    await sendEmail({
      to: [user.email],
      subject: "Verify your email address",
      react: React.createElement(VerificationTemplate, {
        email: user.email,
        emailVerificationToken,
      }),
    });
    return response;
  } catch (error) {
    console.error("Error singing up: ", error);
    throw error;
  }
};

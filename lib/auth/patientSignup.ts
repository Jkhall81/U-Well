"use server";

import prisma from "./prisma";
import { hash } from "bcryptjs";
import { signIn } from "@/app/auth";
import { sendEmail } from "./email-actions";
import { VerificationTemplate } from "@/emails/verification-template";
import { generateSecureToken } from "../utils";
import React from "react";

interface SignUpData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  employerCode?: string;
  familyCode: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  usingInsurance: boolean;
  isAdult: boolean;
  email: string;
  phoneNumber: string;
  passwordOne: string;
  passwordTwo: string;
  emailVerificationToken?: string;
}

export const patientSignup = async (data: SignUpData) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    employerCode,
    familyCode,
    isAdult,
    address,
    city,
    state,
    zipcode,
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

    const patient = await prisma.patient.create({
      data: {
        isAdult,
        usingInsurance: false,
        address,
        city,
        state,
        zipcode,
        familyCode,
        employerCode,
      },
    });

    const userId = user.id;
    const patientId = patient.id;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        patientId: patientId,
      },
    });

    const updatedPatient = await prisma.patient.update({
      where: { id: patientId },
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

"use server";

import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { signIn } from "@/app/auth";

const prisma = new PrismaClient();

interface SignUpData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  employerCode?: string;
  familyCode: string;
  isAdult: boolean;
  email: string;
  phoneNumber: string;
  passwordOne: string;
  passwordTwo: string;
}

export const patientSignup = async (data: SignUpData) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    employerCode,
    familyCode,
    isAdult,
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

    const patient = await prisma.patient.create({
      data: {
        isAdult,
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
    return response;
  } catch (error) {
    console.error("Error singing up: ", error);
    throw error;
  }
};

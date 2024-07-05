"use client";

import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  companyName: z.string().min(2).max(100),
  senderStatus: z.string(),
  comments: z.string().min(10).max(1000),
});

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const passwordSchema = z
  .string()
  .min(8)
  .refine((value) => passwordRegex.test(value), {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
  });

export const patientRegistrationFormSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    dateOfBirth: z.string().min(8),
    isAdult: z.boolean(),
    familyCode: z.string().min(4),
    employerCode: z.string().optional(),
    phoneNumber: z.string().min(10).max(15),
    email: z.string().email(),
    passwordOne: passwordSchema,
    passwordTwo: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.passwordOne === data.passwordTwo, {
    message: "Passwords must match",
    path: ["passwordTwo"],
  });

export const providerRegistrationFormSchema = z
  .object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    dateOfBirth: z.string().min(8),
    providerCode: z.string().min(4),
    phoneNumber: z.string().min(10).max(15),
    email: z.string().email(),
    passwordOne: passwordSchema,
    passwordTwo: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.passwordOne === data.passwordTwo, {
    message: "Passwords must match",
    path: ["passwordTwo"],
  });

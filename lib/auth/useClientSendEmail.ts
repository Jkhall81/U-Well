"use server";

import prisma from "./prisma";
import { sendEmail } from "./email-actions";
import { VerificationTemplate } from "@/emails/verification-template";
import React from "react";

export const clientSendEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  await sendEmail({
    to: [email],
    subject: "Verify your email address",
    react: React.createElement(VerificationTemplate, {
      email: email,
      emailVerificationToken: user?.emailVerificationToken as string,
    }),
  });
};

"use server";

import prisma from "./prisma";

export const getUser = async (email: string) => {
  // getting user data from the user table using an email
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  // checking to see if the user has a patient ID, if so grabbing their data from the patient table
  // then returning an array with a user and patient object
  if (user?.patientId) {
    const patient = await prisma.patient.findUnique({
      where: { id: user.patientId },
    });
    return [user, patient];
  }

  // same as above except checking if the user is a provider.
  if (user?.serviceProviderId) {
    const provider = await prisma.serviceProvider.findUnique({
      where: { id: user.serviceProviderId },
    });
    return [user, provider];
  }
};

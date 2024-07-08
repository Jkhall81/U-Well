"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { getUser } from "@/lib/auth/getUser";
import React, { useEffect, useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  emailVerified: boolean;
  emailVerifiedAt: Date | null;
  emailVerificationToken: string | null;
  phoneNumber: string | null;
  phoneNumberVerified: boolean;
  phoneNumberVerifiedAt: Date | null;
  phoneNumberVerificationCode?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const Page = () => {
  const { email } = useParams();
  const decodedEmail = decodeURIComponent(email as string);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(decodedEmail);
      setUser(userData);
      console.log("inside useEffect", userData);
    };
    fetchUser();
  }, [decodedEmail]);

  return (
    <div className="relative z-[40] flex w-full flex-col items-center">
      <h1 className="mt-[200px] text-4xl font-semibold text-white">
        Hi! Your email address has not been verified.
      </h1>
      <p className="mt-10 text-2xl text-white">
        Please check your email, or resend the verification link below:
      </p>
      <Button
        onClick={() => {}}
        className="mt-10 h-[60px] w-[600px] rounded-3xl bg-blue-600 text-2xl"
      >
        Resend Verification Link
      </Button>
    </div>
  );
};
export default Page;

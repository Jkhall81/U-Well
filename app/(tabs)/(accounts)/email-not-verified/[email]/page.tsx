"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { clientSendEmail } from "@/lib/auth/useClientSendEmail";
import { useState } from "react";

const Page = () => {
  const { email } = useParams();
  const decodedEmail = decodeURIComponent(email as string);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    clientSendEmail(decodedEmail);
    setMessage(
      "A verification link has been sent to your email address.  Please check your email!",
    );
    setIsDisabled(true);
  };
  return (
    <div className="relative z-[40] flex w-full flex-col items-center">
      <h1 className="mt-[200px] text-4xl font-semibold text-white">
        Hi! Your email address has not been verified.
      </h1>
      <p className="mt-10 text-2xl text-white">
        Please check your email, or resend the verification link below:
      </p>
      <Button
        disabled={isDisabled}
        onClick={handleClick}
        className="mt-10 h-[60px] w-[600px] rounded-3xl bg-white text-2xl text-black hover:bg-blue-600 hover:text-white"
      >
        Resend Verification Link
      </Button>
      <p className="mt-20 text-4xl font-bold text-amber-400">{message}</p>
    </div>
  );
};
export default Page;

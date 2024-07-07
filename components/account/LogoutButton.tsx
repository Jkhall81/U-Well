"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { envTest } from "@/lib/auth/envTest";

const LogoutButton = () => {
  const handleSignOut = () => {
    console.log("Variables!!", envTest);
    signOut();
  };
  return (
    <div className="w-full">
      <Button
        onClick={handleSignOut}
        className="h-[60px] w-full rounded-3xl bg-blue-600 text-2xl text-white hover:bg-blue-700 hover:text-white"
      >
        Logout
      </Button>
    </div>
  );
};
export default LogoutButton;

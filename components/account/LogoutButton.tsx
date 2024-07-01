"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <div className="w-full">
      <Button
        onClick={() => signOut()}
        className="h-[60px] w-full rounded-3xl bg-blue-600 text-2xl text-white hover:bg-blue-700 hover:text-white"
      >
        Logout
      </Button>
    </div>
  );
};
export default LogoutButton;

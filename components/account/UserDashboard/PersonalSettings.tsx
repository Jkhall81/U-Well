"use client";

import { IoPersonSharp } from "react-icons/io5";
import { SideBarLink } from "./SideBarLink";

export const PersonalSettings = () => {
  return (
    <div className="h-full flex-col text-white">
      <div className="flex px-10 pt-10">
        <IoPersonSharp size={30} />
        <h2 className="ml-4 text-2xl font-bold">Personal Settings</h2>
      </div>
      <div className="ml-12 flex flex-col px-10 pt-6 text-2xl">
        <SideBarLink title="Profile" href="/account/profile" />
        <SideBarLink title="Insurance" href="/account/insurance" />
      </div>
    </div>
  );
};

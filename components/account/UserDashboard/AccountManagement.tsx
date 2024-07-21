import { FaGear } from "react-icons/fa6";
import { SideBarLink } from "./SideBarLink";

export const AccountManagement = () => {
  return (
    <div className="h-full w-full flex-col text-white">
      <div className="flex px-10 pt-10">
        <FaGear size={30} />
        <h2 className="ml-4 text-2xl font-bold">Account Management</h2>
      </div>
      <div className="ml-12 flex flex-col px-10 pt-6 text-2xl">
        <SideBarLink title="Billing" href="/account/billing" />
        <SideBarLink title="Security" href="/account/security" />
        <SideBarLink title="Settings" href="/account/settings" />
      </div>
    </div>
  );
};

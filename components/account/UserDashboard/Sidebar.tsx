import { AccountManagement } from "./AccountManagement";
import { PersonalSettings } from "./PersonalSettings";

const Sidebar = () => {
  return (
    <nav className="h-full rounded-tr-3xl bg-slate-900">
      <div className="h-[40%]">
        <PersonalSettings />
      </div>
      <div className="h-[60%]">
        <AccountManagement />
      </div>
    </nav>
  );
};
export default Sidebar;

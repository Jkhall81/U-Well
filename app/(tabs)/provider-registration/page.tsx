import { ProviderRegistrationIntroUseClient } from "@/components/useClientComponents/ProviderRegistrationIntroUseClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Registration",
};

const ProviderRegistrationPage = () => {
  return (
    <main className="main-container">
      <ProviderRegistrationIntroUseClient />
    </main>
  );
};

export default ProviderRegistrationPage;

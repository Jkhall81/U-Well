import { UseClientComponent } from "@/components/useClientComponents/UseClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Provider Registration",
};

const ProviderRegistrationPage = () => {
  return (
    <main className="main-container">
      <div className="content-container flex">
        <UseClientComponent height={500} />
      </div>
    </main>
  );
};

export default ProviderRegistrationPage;

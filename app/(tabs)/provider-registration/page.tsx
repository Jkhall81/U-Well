import { UseClientComponent } from "@/components/useClientComponents/UseClientComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Provider Registration",
};

const ProviderRegistrationPage = () => {
  return (
    <main className="main-container">
      <div className="content-container flex">
        {/* Left Heading and Paragraph Text */}
        <div className="flex h-full w-[50%] flex-col">
          <div className="flex h-[45%] w-full flex-col justify-center pl-[40px]"></div>
          <div className="flex h-[55%] w-full items-center justify-center pl-[45px]"></div>
        </div>
        {/* Image */}

        <UseClientComponent height={500} />
      </div>
    </main>
  );
};

export default ProviderRegistrationPage;

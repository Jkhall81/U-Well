import { UseClientComponent } from "@/components/useClientComponents/UseClientComponent";
import { Metadata } from "next";
import { BackgroundContent } from "@/components/BackgroundContent";

export const metadata: Metadata = {
  title: "Provider Registration",
};

const ProviderRegistrationPage = () => {
  return (
    <main className="main-container">
      {/* Background Stuff */}
      <BackgroundContent />

      {/* Above Background Content */}
      <div className="content-container flex">
        {/* Left Heading and Paragraph Text */}
        <div className="flex h-full w-[50%] flex-col">
          <div className="flex h-[45%] w-full flex-col justify-center pl-[40px]"></div>
          <div className="flex h-[55%] w-full items-center justify-center pl-[45px]"></div>
        </div>
        {/* Image */}
        <div className="flex h-full w-[50%]">
          <div className="flex h-full w-[50%] flex-col pt-[220px]"></div>
          <div className="h-full w-[50%] pl-[10px] pt-[180px]"></div>
        </div>

        <UseClientComponent />
      </div>
    </main>
  );
};

export default ProviderRegistrationPage;

import { MultiStepForm } from "@/components/MultiStepForm";
import { UseClientComponent } from "@/components/useClientComponents/UseClientComponent";
import { Metadata } from "next";
import { BackgroundContent } from "@/components/BackgroundContent";

export const metadata: Metadata = {
  title: "Patient Registration",
};

const PatientRegistrationPage = () => {
  return (
    <main className="main-container">
      {/* Background Stuff */}
      <BackgroundContent />

      {/* Above Background Content */}
      <div className="content-container flex h-[1500px] flex-col">
        <div className="flex w-full items-center justify-center px-5">
          <h1 className="prose pb-12 text-center text-3xl text-white">
            Please answer all questions as open and honest as possible. We use
            these to help match you to a provider that will mesh well with your
            needs and values.
          </h1>
        </div>
        {/* Form Container */}
        <div className="h-full w-full">
          <MultiStepForm />
        </div>

        <UseClientComponent />
      </div>
    </main>
  );
};

export default PatientRegistrationPage;

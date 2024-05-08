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
      <div className="absolute h-[1900px] w-full">
        {/* Above Background Content */}
        <div className="content-container flex flex-col">
          <div className="flex w-full flex-col items-center justify-center px-5">
            <h1 className="heading-one mb-10 py-4 text-7xl font-bold lg:text-8xl">
              Registration
            </h1>
            <p className="prose pb-12 text-center text-3xl text-white">
              Please answer all questions as open and honest as possible. We use
              these to help match you to a provider that will mesh well with
              your needs and values.
            </p>
          </div>
          {/* Form Container */}
          <div className="h-full w-full">
            <MultiStepForm />
          </div>

          <UseClientComponent height={500} />
        </div>
      </div>
    </main>
  );
};

export default PatientRegistrationPage;

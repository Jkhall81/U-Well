import { MultiStepForm } from "@/components/MultiStepForm";
import { Metadata } from "next";
import { PatientRegistrationFooter } from "@/components/useClientComponents/PatientRegistrationFooter";

export const metadata: Metadata = {
  title: "Patient Registration",
};

const PatientRegistrationPage = () => {
  return (
    <main className="main-container">
      <div className="absolute h-full w-full">
        <div className="content-container flex flex-col">
          <div className="flex w-full flex-col items-center justify-center px-5">
            <h1 className="heading-one mb-10 py-4 text-6xl font-bold lg:text-8xl">
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
          <PatientRegistrationFooter height={0} />
        </div>
      </div>
    </main>
  );
};

export default PatientRegistrationPage;

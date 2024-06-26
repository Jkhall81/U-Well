"use client";

import { useState } from "react";
import { ProviderMultiStepForm } from "@/components/ProviderMultiStepForm";
import { PatientRegistrationFooter } from "@/components/useClientComponents/PatientRegistrationFooter";
import { ProviderQuestionIntro } from "../ProviderQuestionIntro";

export const ProviderRegistrationIntroUseClient = () => {
  const [isIntro, setIsIntro] = useState(true);
  return (
    <div className="content-container flex flex-col">
      {isIntro ? (
        <ProviderQuestionIntro setIsIntro={() => setIsIntro(false)} />
      ) : (
        <>
          <div className="flex w-full flex-col items-center justify-center px-5">
            <h1 className="heading-one mb-10 py-4 text-center text-6xl font-bold lg:text-8xl">
              Provider Registration
            </h1>
            <p className="prose pb-12 text-center text-3xl text-white">
              Please answer all questions as open and honest as possible.
            </p>
          </div>
          {/* Form Container */}
          <div className="h-full w-full">
            <ProviderMultiStepForm />
          </div>

          <PatientRegistrationFooter height={0} />
        </>
      )}
    </div>
  );
};

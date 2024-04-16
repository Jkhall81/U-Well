"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PatientRegistrationSteps } from "@/lib/data";
import { StepStandardAlpha } from "./formsteps/StepStandardAlpha";
import { StepNumberSelect } from "./formsteps/StepNumberSelect";
import { IoChevronBack } from "react-icons/io5";

type Inputs = {
  [step: string | number]: string;
};

export const MultiStepForm = () => {
  const stepData = PatientRegistrationSteps;
  const [currentStep, setCurrentStep] = useState(0);

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const setStep = (step: number, option: string) => {
    setValue(step.toString(), option);
  };

  // steps 3 to 31
  const stepComponents = stepData.slice(2).map((step, index) => {
    const stepIndex = index + 2;
    return currentStep === stepIndex ? (
      <StepStandardAlpha
        key={stepIndex}
        answers={step.answers}
        setStep={(step: number, option: string) => setStep(step, option)}
        question={step.question}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    ) : null;
  });

  const handlePrevious = (currentStep: number) => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  useEffect(() => {
    if (currentStep === 31) {
      handleSubmit(onSubmit)();
    }
  }, [currentStep, handleSubmit]);

  console.log(currentStep);
  return (
    <section className="z-50 flex justify-center pt-2">
      <div
        onClick={() => handlePrevious(currentStep)}
        className="absolute left-5 z-40 mt-[200px] flex items-center hover:cursor-pointer"
      >
        <IoChevronBack color="white" size={40} />
        <span className="text-2xl font-semibold text-white">Previous Step</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Step 1 */}
        {currentStep === 0 && (
          <StepStandardAlpha
            answers={stepData[0].answers}
            setStep={setStep}
            question={stepData[0].question}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}

        {/* Step 2 */}
        {currentStep === 1 && (
          <StepNumberSelect
            answers={stepData[1].answers}
            setStep={setStep}
            question={stepData[1].question}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}

        {/* Render steps 3 to 31 */}
        {stepComponents}
      </form>
    </section>
  );
};

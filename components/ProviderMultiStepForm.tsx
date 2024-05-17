"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProviderRegistrationSteps } from "@/lib/data";
import { StepStandardAlpha } from "./formsteps/StepStandardAlpha";
import { StepNumberSelect } from "./formsteps/StepNumberSelect";
// import { IoChevronBack } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import { CheckBoxComponent } from "./formsteps/CheckBoxComponent";

type Inputs = {
  [step: string | number]: string | string[];
};

export const ProviderMultiStepForm = () => {
  const stepData = ProviderRegistrationSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const setStep = (step: number, option: string | string[]) => {
    setValue(step.toString(), option);
  };

  const handlePrevious = (currentStep: number) => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Autosubmit, currently 22 questions
  useEffect(() => {
    if (currentStep === 22) {
      handleSubmit(onSubmit)();
    }
  }, [currentStep, handleSubmit]);

  console.log(currentStep);
  return (
    <section className="z-50 flex justify-center pt-2">
      <div
        onClick={() => handlePrevious(currentStep)}
        className="absolute left-5 mt-[200px] flex items-center hover:cursor-pointer"
      >
        {/* <IoChevronBack color="white" size={40} />
        <span className="text-2xl font-semibold text-white">Previous Step</span> */}
      </div>
      {/* animation container */}
      <div className="relative w-[640px] overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1 */}
          <CSSTransition
            className=""
            in={currentStep === 0}
            timeout={300}
            classNames={{
              enter: "left-enter",
              enterActive: "left-enter-active",
              exit: "left-exit",
              exitActive: "left-exit-active",
            }}
            unmountOnExit
          >
            <StepStandardAlpha
              answers={stepData[0].answers}
              setStep={setStep}
              question={stepData[0].question}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </CSSTransition>

          {/* Step 2 */}
          <CSSTransition
            className=""
            in={currentStep === 1}
            timeout={300}
            classNames={{
              enter: "left-enter",
              enterActive: "left-enter-active",
              exit: "left-exit",
              exitActive: "left-exit-active",
            }}
            unmountOnExit
          >
            <StepNumberSelect
              answers={stepData[1].answers}
              setStep={setStep}
              question={stepData[1].question}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </CSSTransition>

          {/* Render steps 3 to 22 */}
          {stepData.slice(2).map((step, index) => {
            const stepIndex = index + 2;
            return (
              <CSSTransition
                key={stepIndex}
                className=""
                in={currentStep === stepIndex}
                timeout={300}
                classNames={{
                  enter: "left-enter",
                  enterActive: "left-enter-active",
                  exit: "left-exit",
                  exitActive: "left-exit-active",
                }}
                unmountOnExit
              >
                {/* TODO MAKE CHECKBOX COMPONENT */}
                {currentStep === 4 ||
                currentStep === 9 ||
                currentStep === 10 ? (
                  <CheckBoxComponent
                    answers={step.answers}
                    setStep={(step: number, option: string[]) =>
                      setStep(step, option)
                    }
                    question={step.question}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                  />
                ) : (
                  <StepStandardAlpha
                    answers={step.answers}
                    setStep={(step: number, option: string) =>
                      setStep(step, option)
                    }
                    question={step.question}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                  />
                )}
              </CSSTransition>
            );
          })}
          {/* Last Step */}
          {currentStep === 31 && (
            <CSSTransition
              key={currentStep}
              className=""
              in={currentStep === 31}
              timeout={300}
              classNames={{
                enter: "left-enter",
                enterActive: "left-enter-active",
                exit: "left-exit",
                exitActive: "left-exit-active",
              }}
              unmountOnExit
            ></CSSTransition>
          )}
        </form>
        {/* Thank you message */}
        {currentStep === 22 && <div />}
      </div>
    </section>
  );
};
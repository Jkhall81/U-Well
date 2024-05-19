"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ProviderRegistrationSteps } from "@/lib/data";
import { StepStandardAlpha } from "./formsteps/StepStandardAlpha";
import { StepNumberSelect } from "./formsteps/StepNumberSelect";
// import { IoChevronBack } from "react-icons/io5";
import { CSSTransition } from "react-transition-group";
import { CheckBoxComponent } from "./formsteps/CheckBoxComponent";
import { TextAreaComponent } from "./formsteps/TextAreaComponent";

type Inputs = {
  [step: string | number]: string | string[];
};

export const ProviderMultiStepForm = () => {
  const stepData = ProviderRegistrationSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
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

  // Autosubmit, currently 22 questions
  useEffect(() => {
    if (currentStep === 22) {
      handleSubmit(onSubmit)();
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  }, [currentStep, handleSubmit]);

  console.log("currentStep", currentStep);
  const checkBoxSteps = [3, 8, 9];
  return (
    <section className="z-50 flex justify-center pt-2">
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
            let stepIndex = index + 2;
            return checkBoxSteps.includes(stepIndex) ? (
              <CSSTransition
                key={`${stepIndex}-checkbox`}
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
                <CheckBoxComponent
                  answers={step.answers}
                  setStep={(step: number, option: string[]) =>
                    setStep(step, option)
                  }
                  question={step.question}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </CSSTransition>
            ) : currentStep === 11 ? (
              <CSSTransition
                key={`${stepIndex}-textarea-11`}
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
                <TextAreaComponent
                  answers={step.answers}
                  setStep={(step: number, option: string) =>
                    setStep(step, option)
                  }
                  question={step.question}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </CSSTransition>
            ) : (
              <CSSTransition
                key={`${stepIndex}-standard`}
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
                <StepStandardAlpha
                  answers={step.answers}
                  setStep={(step: number, option: string) =>
                    setStep(step, option)
                  }
                  question={step.question}
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </CSSTransition>
            );
          })}
        </form>
        {/* Thank you message */}
        {showThankYou && (
          <div className="flex justify-center">
            <p className="prose text-2xl font-semibold text-white">
              Thank you for completing the registration. Your submission has
              been received and is under review.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

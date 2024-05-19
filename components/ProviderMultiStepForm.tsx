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
import { LastStep } from "./formsteps/LastStep";
import Image from "next/image";

type Inputs = {
  [step: string | number]: string | string[];
};

export const ProviderMultiStepForm = () => {
  const stepData = ProviderRegistrationSteps;
  const [currentStep, setCurrentStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data: Inputs) => {
    if (currentStep === 23) {
      Object.assign(data, { 23: formData });
    }
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

  const updateFormData = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  // Autosubmit, currently 23 questions
  useEffect(() => {
    if (currentStep === 23) {
      handleSubmit(onSubmit)();
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  }, [currentStep, handleSubmit]);

  console.log("currentStep", currentStep);
  const checkBoxSteps = [3, 8, 9];
  return (
    <section className="z-50 flex flex-col items-center pt-2">
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
          {/* Last Step */}
          {currentStep === 22 && (
            <CSSTransition
              key={currentStep}
              className=""
              in={currentStep === 22}
              timeout={300}
              classNames={{
                enter: "left-enter",
                enterActive: "left-enter-active",
                exit: "left-exit",
                exitActive: "left-exit-active",
              }}
              unmountOnExit
            >
              <LastStep
                updateFormData={updateFormData}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setStep={setStep}
              />
            </CSSTransition>
          )}
        </form>
      </div>
      {/* Thank you message */}
      {showThankYou && (
        <div className="flex h-full w-full flex-col items-center">
          <p className="prose mx-10 text-3xl font-semibold text-white">
            Thank you for completing the registration. Your submission has been
            received and is under review.
          </p>
          <Image
            src="/Hero.png"
            alt="image of water"
            height={1550}
            width={1550}
            className=""
          />
        </div>
      )}
    </section>
  );
};

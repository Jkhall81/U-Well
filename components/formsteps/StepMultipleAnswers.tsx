"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { striptQuotes } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface StepMultipleAnswers {
  question: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, options: string[]) => void;
  answers: string[];
}

export const StepMultipleAnswers = ({
  question,
  currentStep,
  setCurrentStep,
  setStep,
  answers,
}: StepMultipleAnswers) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  const handleClick = (answer: string) => {
    const isSelected = selectedAnswers.includes(answer);

    if (isSelected) {
      setSelectedAnswers(selectedAnswers.filter((item) => item !== answer));
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleSubmit = () => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, selectedAnswers);
  };

  const isNextDisabled = selectedAnswers.length === 0;

  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="prose mx-auto px-5 text-center text-3xl font-bold text-white">
        {question}
      </h1>

      <p
        className={cn(
          "pt-4 text-xl font-semibold text-white",
          `${isVisible ? "" : "hidden"}`,
        )}
      >
        Select all that apply.
      </p>

      <div
        className={cn(
          "flex w-[640px] flex-col items-center gap-4 rounded-md py-10",
        )}
      >
        {answers.map((answer: string, index) => {
          const isSelected = selectedAnswers.includes(answer);
          return (
            <Button
              className={cn(
                "w-[400px] rounded-3xl lg:w-[600px]",
                isSelected
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-600 hover:text-white",
              )}
              onClick={() => handleClick(answer)}
              variant={isSelected ? "solid" : "outline"}
              size="lg"
              key={index}
            >
              <span className="font-semibold xl:text-lg">
                {striptQuotes(answer)}
              </span>
            </Button>
          );
        })}
      </div>

      <Button
        className={cn(
          "w-[200px] rounded-3xl bg-white px-6 py-3 text-lg text-black hover:bg-blue-600 hover:text-white",
          `${isVisible ? "flex" : "hidden"}`,
        )}
        onClick={handleSubmit}
        size="lg"
        disabled={isNextDisabled}
      >
        Next
      </Button>
      {isNextDisabled && (
        <p className={cn("text-red-500", `${isVisible ? "" : "hidden"}`)}>
          Please select at least one answer to continue.
        </p>
      )}
    </section>
  );
};

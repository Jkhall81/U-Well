{
  /* This component will handle any multi-form step in which there are multiple answers in button format.  The majority of the steps will use this step component */
}

import { Button } from "../ui/button";
import { striptQuotes } from "@/lib/utils";

interface StepStandardAlphaProps {
  question: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string) => void;
  answers: string[];
}

export const StepStandardAlpha = ({
  question,
  currentStep,
  setCurrentStep,
  setStep,
  answers,
}: StepStandardAlphaProps) => {
  const handleClick = (answer: string) => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, answer);
  };

  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="prose mx-auto px-5 text-3xl font-bold text-white">
        {question}
      </h1>
      <div className="flex w-[640px] flex-col items-center gap-4 rounded-md py-10 shadow-md shadow-gray-600">
        {answers.map((answer: string, index) => {
          return (
            <Button
              className="w-[600px] rounded-2xl hover:bg-blue-600 hover:text-white"
              onClick={() => handleClick(answer)}
              value={answer}
              variant="outline"
              size="lg"
              key={index}
            >
              <span className="text-xl font-semibold">
                {striptQuotes(answer)}
              </span>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

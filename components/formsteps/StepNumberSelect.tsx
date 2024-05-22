"use client";
{
  /* This will handle steps that require a number select. */
}

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface StepNumberSelectProps {
  question: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string) => void;
  answers: string[];
}

const formSchema = z.object({
  age: z.string(),
});

export const StepNumberSelect = ({
  question,
  currentStep,
  setCurrentStep,
  setStep,
}: StepNumberSelectProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = (answer: string) => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, answer);
  };
  const ageOptions = Array.from({ length: 84 }, (_, index) => index + 16);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  });

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-4",
        `${isVisible ? "" : "hidden"}`,
      )}
    >
      <h1 className="prose mx-auto text-3xl font-bold text-white">
        {question}
      </h1>
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={handleClick}>
              <SelectTrigger className="w-[400px] rounded-3xl lg:w-[600px]">
                <SelectValue placeholder="Select your age." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ageOptions.map((age) => (
                    <SelectItem key={age} value={age.toString()}>
                      {age}{" "}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </section>
  );
};

"use client";
{
  /* This will handle steps that require a number select.  Should only be neede for step two of the form */
}

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  answers,
}: StepNumberSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (answer: string) => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, answer);
  };
  const ageOptions = Array.from({ length: 84 }, (_, index) => index + 16);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <section className="flex flex-col items-center gap-4">
      <h1 className="prose mx-auto text-3xl font-bold text-white">
        {question}
      </h1>
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={handleClick}>
              <SelectTrigger className="w-[600px] rounded-3xl">
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

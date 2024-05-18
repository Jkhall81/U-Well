"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface CheckBoxComponentProps {
  question: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string[]) => void;
  answers: string[];
}

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export const CheckBoxComponent = ({
  question,
  currentStep,
  setCurrentStep,
  setStep,
  answers,
}: CheckBoxComponentProps) => {
  const handleClick = (answer: string[]) => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, answer);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className={cn("mb-6 flex flex-col")}>
                <FormLabel className="text-3xl text-white">
                  {question}
                </FormLabel>
                <FormDescription></FormDescription>
              </div>
              {answers.map((answer, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <div className="flex justify-start">
                        <FormItem
                          key={index}
                          className="flex flex-row items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(answer)}
                              onCheckedChange={(checked) => {
                                const currentValue = field.value || [];
                                const updatedValue = checked
                                  ? [...currentValue, answer]
                                  : currentValue.filter(
                                      (value) => value !== answer,
                                    );
                                field.onChange(updatedValue);
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-2xl text-white">
                            {answer}
                          </FormLabel>
                        </FormItem>
                      </div>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="button"
          className="w-[200px] rounded-3xl bg-white text-black hover:bg-blue-600 hover:text-white"
          size="lg"
          onClick={() => {
            const checkedAnswers = form.getValues("items");
            handleClick(checkedAnswers);
          }}
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

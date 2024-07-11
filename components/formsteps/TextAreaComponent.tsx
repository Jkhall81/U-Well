"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface TextAreaComponentProps {
  question: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string) => void;
  answers: string[];
}

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export const TextAreaComponent = ({
  question,
  currentStep,
  setCurrentStep,
  setStep,
  answers,
}: TextAreaComponentProps) => {
  const handleClick = (answer: string) => {
    setCurrentStep(currentStep + 1);
    setStep(currentStep + 1, answer);
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  const { bio } = form.getValues();
  const isDisabled = !!form.formState.errors.bio || !form.formState.isValid;
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center space-y-6"
      >
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <div className="mx-20">
              <FormItem>
                <div className="mx-10 mb-8 2xl:mx-0">
                  <FormLabel className="text-center text-xl font-semibold text-white">
                    {question}
                  </FormLabel>
                </div>
                <div className="mx-10">
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="rounded-xl px-4 text-xl"
                      rows={8}
                      {...field}
                    />
                  </FormControl>
                </div>
                <div className="pt-8 text-center">
                  <FormDescription>
                    {isDisabled && (
                      <span className="mx-10 text-lg text-red-500">
                        Bio must be at least 10 characters.
                      </span>
                    )}
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            </div>
          )}
        />
        <Button
          type="button"
          className="mx-10 h-[50px] w-[300px] rounded-3xl bg-white text-xl text-black hover:bg-blue-600 hover:text-white"
          size="lg"
          onClick={() => handleClick(bio)}
          disabled={isDisabled}
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

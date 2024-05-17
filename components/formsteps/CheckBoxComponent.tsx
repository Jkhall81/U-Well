"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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
    defaultValues: {
      items: [""],
    },
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
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>{question}</FormDescription>
              </div>
              {answers.map((answer, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={index}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(answer)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, answer])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== answer,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">Hello</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

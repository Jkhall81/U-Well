"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

interface LastStepProps {
  updateFormData: (data: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string) => void;
}

const formSchema = z.object({
  firstName: z.string().min(4),
  lastName: z.string().min(4),
  phoneNumber: z.string().min(10).max(15),
  email: z.string().email(),
});

const labelStyles = "text-white text-lg font-semibold";
const inputStyles = "w-[400px] lg:w-[600px] text-lg font-semibold rounded-xl";

export const LastStep = ({
  updateFormData,
  currentStep,
  setCurrentStep,
  setStep,
}: LastStepProps) => {
  const [isVisibile, setIsVisible] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]})-${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    form.setValue("phoneNumber", formattedValue);
  };

  const handleClick = () => {
    console.log("handle Click on last step!");
    console.log("form values", form.getValues());
    console.log("form state", form.formState);
    updateFormData(form.getValues());
    setCurrentStep(currentStep + 1);
  };
  return (
    <section
      className={`flex flex-col items-center gap-4 ${isVisibile ? "" : "hidden"}`}
    >
      <h1 className="prose mx-auto text-3xl font-bold text-white">
        Complete Your Registration
      </h1>
      {/* First Name */}
      <Form {...form}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  className={`${inputStyles}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Last Name</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Phone Number</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="806-123-3324"
                  {...field}
                  onChange={handlePhoneNumberChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Email</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="JohnDoe@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          onClick={handleClick}
          className="mt-6 w-[400px] rounded-xl bg-white py-6 text-lg font-semibold text-black hover:bg-blue-600 hover:text-white lg:w-[600px]"
        >
          Submit
        </Button>
      </Form>
    </section>
  );
};

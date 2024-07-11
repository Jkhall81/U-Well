"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { formatPhoneNumber } from "@/lib/helperFunctions/registration/functions";
import { formatDateOfBirth } from "@/lib/helperFunctions/registration/functions";
import { providerRegistrationFormSchema } from "@/schemas/formSchemas";
import { providerSignup } from "@/lib/auth/providerSignup";

interface LastStepProps {
  updateFormData: (data: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  setStep: (step: number, option: string) => void;
}

const labelStyles = "text-white text-lg font-semibold";
const inputStyles = "w-[400px] lg:w-[600px] text-lg font-semibold rounded-xl";

export const ProviderAccountCreation = ({
  updateFormData,
  currentStep,
  setCurrentStep,
  setStep,
}: LastStepProps) => {
  const form = useForm<z.infer<typeof providerRegistrationFormSchema>>({
    resolver: zodResolver(providerRegistrationFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      providerCode: "null",
      phoneNumber: "",
      email: "",
      passwordOne: "",
      passwordTwo: "",
      acceptInsurance: false,
      carryMalpracticeInsurance: false,
    },
  });

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    form.setValue("phoneNumber", formattedValue, { shouldValidate: true });
  };

  const handleDateOfBirthChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    const formattedValue = formatDateOfBirth(value);
    form.setValue("dateOfBirth", formattedValue, { shouldValidate: true });
  };

  const handleClick = (
    data: z.infer<typeof providerRegistrationFormSchema>,
  ) => {
    console.log("first step successful");
    console.log("form values", data);
    updateFormData(data);
    setCurrentStep(currentStep + 1);
    providerSignup(data);
  };

  const onError = (errors: any) => {
    console.log("Form error");
    console.log(errors);
  };

  return (
    <section className={`flex flex-col items-center gap-4`}>
      <h1 className="prose mx-auto text-3xl font-bold text-white">
        Account Registration
      </h1>
      <Form {...form}>
        {/* ******** */}
        {/* First Name */}
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
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
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
        {/* ******** */}
        {/* Date Of Birth */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Date of Birth</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="01-01-1991"
                  {...field}
                  onChange={handleDateOfBirthChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
        {/* npi */}
        <FormField
          control={form.control}
          name="npi"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>NPI Number</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder=".........."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
        {/* taxId */}
        <FormField
          control={form.control}
          name="taxId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Tax ID</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder=".........."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
        {/* taxonomyCode */}
        <FormField
          control={form.control}
          name="taxonomyCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Taxonomy Code</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder=".........."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
        {/* Provider Code */}
        <FormField
          control={form.control}
          name="providerCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Provider Code</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
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
        {/* ******** */}
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
        {/* ******** */}
        {/* Password */}
        <FormField
          control={form.control}
          name="passwordOne"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Password</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="************"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ******** */}
        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="passwordTwo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="************"
                  {...field}
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          onClick={form.handleSubmit(handleClick, onError)}
          className="mt-6 w-[400px] rounded-xl bg-white py-6 text-lg font-semibold text-black hover:bg-blue-600 hover:text-white lg:w-[600px]"
        >
          Next
        </Button>
      </Form>
    </section>
  );
};

"use client";

import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/schemas/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

const ContactUsPage = () => {
  const yHeight = useFooterStore((state) => state.pageHeight);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      senderStatus: "",
      comments: "",
    },
  });
  const [position, setPosition] = useState("Member");

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const formLabelFontSize = "text-2xl";
  const inputStyles = "text-xl h-[50px]";
  return (
    <main className="relative min-h-screen w-full overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[100px] flex h-[800px] w-full flex-col ">
        {/* Left Header and Form Container*/}
        <div className="flex h-full w-full  flex-col items-center pt-[50px]">
          <h1 className="pl-5 text-9xl font-bold text-white">Contact us</h1>
          <p className="prose px-5 py-10 pt-10 text-3xl text-white">
            Whatever your needs, we can help. Please complete the form below and
            we will begin assisting you immediately.
          </p>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Form Fields Container */}
              <div className="flex w-full flex-col px-5 text-xl font-semibold">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={`w-[700px] ${inputStyles}`}
                          placeholder="John"
                          {...field}
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
                    <FormItem className="mb-3">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={`w-full ${inputStyles}`}
                          placeholder="Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={`w-full ${inputStyles}`}
                          placeholder="John.Doe@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={`w-full ${inputStyles}`}
                          placeholder="ACME inc."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sender Status */}
                <FormField
                  control={form.control}
                  name="senderStatus"
                  render={({ field }) => (
                    <FormItem className="mb-3">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        I am a:
                      </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input
                              placeholder="Select your status."
                              value={position}
                              className={`w-full text-gray-500 ${inputStyles}`}
                              readOnly
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup
                              value={position}
                              onValueChange={setPosition}
                            >
                              <DropdownMenuRadioItem value="Member">
                                Member
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Provider">
                                Provider
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Organization">
                                Organization
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="New Client">
                                New Client
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Comment */}
                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem className="mb-7">
                      <FormLabel className={`${formLabelFontSize} text-white`}>
                        Comments
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How may we help you?"
                          className="text-xl text-gray-500"
                          rows={7}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                size="lg"
                className="ml-5 h-[60px] w-[700px] text-2xl font-semibold hover:bg-sky-600 hover:text-white"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        {/* Image */}
        <div className="flex h-full">
          <div className="absolute right-[200px] top-[300px] h-[400px] w-[450px] animate-blob rounded-full bg-cyan-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-8 top-40 h-[340px] w-[340px] animate-blob rounded-full bg-sky-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute right-[350px] top-[390px] h-[550px] w-[550px] animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl filter" />
        </div>
        {/* Footer */}
        <div
          style={{ marginTop: `${yHeight}px` }}
          className={`absolute left-0 flex w-full items-center justify-between pb-2`}
        >
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;

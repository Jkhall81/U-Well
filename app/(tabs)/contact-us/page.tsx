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

const ContactUsPage = () => {
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

  return (
    <main className="relative min-h-screen w-full overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[100px] flex h-[800px] w-full ">
        {/* Left Header and Form Container*/}
        <div className="flex h-full w-[50%] flex-col pt-[50px]">
          <h1 className="pl-5 text-4xl font-bold text-white">Contact us</h1>
          <p className="prose-xl px-5 pt-5 text-white">
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
                      <FormLabel className="text-lg text-white">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
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
                      <FormLabel className="text-lg text-white">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
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
                      <FormLabel className="text-lg text-white">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
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
                      <FormLabel className="text-lg text-white">
                        Company Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
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
                      <FormLabel className="text-lg text-white">
                        I am a:
                      </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input
                              placeholder="Select your status."
                              value={position}
                              className="w-full text-gray-500"
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
                      <FormLabel className="text-lg text-white">
                        Comments
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How may we help you?"
                          className="text-gray-500"
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
                className="ml-5"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        {/* Image */}
        <div className="flex h-full min-w-[900px]">
          <div className="absolute right-[200px] top-[300px] h-[400px] w-[450px] animate-blob rounded-full bg-cyan-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-8 top-40 h-[340px] w-[340px] animate-blob rounded-full bg-sky-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute right-[350px] top-[390px] h-[550px] w-[550px] animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl filter" />
        </div>
      </div>

      {/* Footer */}
    </main>
  );
};

export default ContactUsPage;

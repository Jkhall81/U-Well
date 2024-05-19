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
import Link from "next/link";
import Image from "next/image";

export const ContactUsUseClient = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    Object.assign(data, { senderStatus: position });
    setIsSubmitted(true);
    console.log(data);
  };

  const formLabelFontSize = "text-2xl";
  const inputStyles = "text-xl h-[50px]";
  return (
    <>
      {isSubmitted ? (
        <div className="mx-10 flex flex-col items-center space-y-4 text-white">
          <h2 className="heading-two mb-6 py-2 text-center text-5xl font-semibold">
            Thank you for reaching out!
          </h2>
          <div className="prose text-2xl text-white">
            <p>
              We appreciate you contacting us. Your message has been received
              and one of our representatives will get back with you shortly.
            </p>
            <p>
              In the meantime, you can explore our{" "}
              <Link className="text-sky-600" href="/faq">
                FAQ
              </Link>{" "}
              section or learn more about our services on our{" "}
              <Link className="text-sky-600" href="/about-us">
                About us
              </Link>{" "}
              page.
            </p>
            <p>
              Thank you for choosing U-Well Health. We look forward to assisting
              you.
            </p>
          </div>
          <Image
            src="/Hero.png"
            alt="image of mind being repaired"
            height={1550}
            width={1550}
          />
        </div>
      ) : (
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {/* Form Fields Container */}
              <div className="mx-auto flex w-[410px] flex-col px-5 text-xl font-semibold lg:w-full">
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
                          className={`lg:w-[700px] ${inputStyles}`}
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
                          placeholder="John.Doe@gmail.com"
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
                              className={`w-full text-gray-500 ${inputStyles}`}
                              {...field}
                              value={position}
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
                <Button
                  size="lg"
                  className="h-[60px] w-full rounded-3xl text-2xl font-semibold hover:bg-blue-600 hover:text-white lg:w-[700px]"
                  variant="outline"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
              <div className="h-[500px] w-full" />
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

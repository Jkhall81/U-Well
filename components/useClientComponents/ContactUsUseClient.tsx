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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const formLabelFontSize = "text-2xl";
  const inputStyles = "text-xl h-[50px]";
  return (
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
            <Button
              size="lg"
              className="h-[60px] w-full text-2xl font-semibold hover:bg-sky-600 hover:text-white lg:w-[700px]"
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
  );
};

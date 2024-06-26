"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Link from "next/link";
import { signup } from "@/lib/auth/signup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const labelStyles = "text-black text-2xl";
const inputStyles = "h-[50px] border border-black";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password1: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password2: z.string().min(2, {
    message: "Password must be longer than 2 characters.",
  }),
});

export const SignupForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const result = await signup(data);
      if (result && result.error) {
        console.error(result.error);
      } else {
        console.log("Signup successful", result);
        router.push("/home");
      }
    } catch (error) {
      console.error("an error occurred", error);
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col space-y-8 px-12 pt-10"
      >
        <div className="flex w-full space-x-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={`${labelStyles}`}>First Name *</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyles}`}
                    placeholder="John"
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={`${labelStyles}`}>Last Name *</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyles}`}
                    placeholder="Doe"
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className={`${labelStyles}`}>Email *</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="JohnDoe@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full space-x-4">
          <FormField
            control={form.control}
            name="password1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={`${labelStyles}`}>Password *</FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyles}`}
                    placeholder="**********"
                    type="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className={`${labelStyles}`}>
                  Confirm Password *
                </FormLabel>
                <FormControl>
                  <Input
                    className={`${inputStyles}`}
                    placeholder="**********"
                    type="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant="ghost"
          className="h-[60px] w-full rounded-3xl bg-blue-600 text-2xl text-white hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Sign in <FaArrowRightLong className="pl-4" size={40} />
        </Button>
        <p className="text-center text-xl">
          By signing up, I agree to U-Well&apos;s{" "}
          <Link href="/terms-and-conditions">
            <span className="text-blue-500">Terms & Conditions</span>
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy">
            <span className="text-blue-500">Privacy Policy</span>
          </Link>
        </p>
      </form>
      <div className="h-[70px]" />
      <div className="flex h-[100px] w-full items-center justify-center rounded-b-xl bg-blue-100">
        <p>
          Already have an account?{" "}
          <span className="text-blue-500">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
    </Form>
  );
};

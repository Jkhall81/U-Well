"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { login } from "@/lib/auth/login";
import { useRouter } from "next/navigation";

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

interface LoginData {
  email: string;
  password: string;
}

const labelStyles = "text-black text-2xl";
const inputStyles = "h-[50px] border border-black";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be longer than 2 characters.",
  }),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const handleSubmit = async (data: LoginData) => {
    try {
      const result = await login(data);
      router.refresh();
      console.log(result);
      if (result === "email not verified") {
        router.push("/email-not-verified");
      } else {
        router.refresh();
        setTimeout(() => {
          router.push("/home");
        }, 200);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-8 px-12 pt-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Email</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${labelStyles}`}>Password</FormLabel>
              <FormControl>
                <Input
                  className={`${inputStyles}`}
                  placeholder="Your password"
                  type="password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="ghost"
          className="h-[60px] w-full rounded-3xl bg-blue-600 text-2xl text-white hover:bg-blue-700 hover:text-white"
          type="submit"
        >
          Sign in <FaArrowRightLong className="pl-4" size={40} />
        </Button>
        <p className="text-center text-xl">Forgot your password?</p>
      </form>
      <div className="h-[280px]" />
      <div className="flex h-[100px] w-full items-center justify-center rounded-b-xl bg-blue-100">
        <p>
          Don&apos;t have an account?{" "}
          <span className="text-blue-500">
            <Link href="/signup">Create one</Link>
          </span>
        </p>
      </div>
    </Form>
  );
};

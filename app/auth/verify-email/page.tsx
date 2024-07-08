import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import prisma from "@/lib/auth/prisma";
import Link from "next/link";
import { MdMarkEmailRead } from "react-icons/md";
import { LuMailWarning } from "react-icons/lu";

interface VerifyEmailPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  let message = "Verifying email...";
  let verified = false;
  if (searchParams.token) {
    // Checks if a verification token is provided in the URL.
    // Attempts to find a user in the database with the provided email verification token.
    const user = await prisma.user.findUnique({
      where: {
        emailVerificationToken: searchParams.token as string,
      },
    });

    // Conditionally updates the message and verified status based on the user lookup.
    if (!user) {
      message = "User not found. Check your email for the verification link.";
    } else {
      // If the user is found, updates the user record to mark the email as verified.
      await prisma.user.update({
        where: {
          emailVerificationToken: searchParams.token as string,
        },
        data: {
          emailVerified: true,
          emailVerifiedAt: new Date(),
        },
      });

      message = `Email verified! ${user.email}`;
      verified = true; // Sets the verified status to true.
    }
  } else {
    // Updates the message if no verification token is found.
    message = "No email verification token found. Check your email.";
  }

  return (
    <div className="relative z-[40] grid place-content-center py-40">
      <Card className="max-w-sm text-center">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full place-content-center py-4">
            {verified ? (
              <MdMarkEmailRead size={56} />
            ) : (
              <LuMailWarning size={56} />
            )}
          </div>
          <p
            className="text-lg text-muted-foreground"
            style={{ textWrap: "balance" }}
          >
            {message}
          </p>
        </CardContent>
        <CardFooter>
          {verified && (
            // Displays a sign-in link if the email is successfully verified.
            <Link
              href={"/auth/signin"}
              className="h-10 w-full rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary/90"
            >
              Sign in
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

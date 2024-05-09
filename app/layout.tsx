import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/MobileNav";
import { ScrollDetector } from "@/components/ScrollDetector";
import { BackgroundContent } from "@/components/BackgroundContent";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default:
      "U-Well: Mental Health Support for Organizations | Customized Telephone Solutions",
    template: "U-Well: %s",
  },
  description:
    "U-Well offers targeted Health support to organizations through personalized surveys and telehealth sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-full overflow-x-hidden bg-blue-500",
          open_sans.className,
        )}
      >
        <NavBar />
        <MobileNav />
        <main className="h-full w-full">
          <div className="fixed bottom-0 left-0 top-0 z-[15] h-full w-full bg-black/20 bg-gradient-to-r from-black" />
          <BackgroundContent />
          {children}
        </main>
        <ScrollDetector />
      </body>
    </html>
  );
}

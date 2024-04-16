import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "U-Well: Mental Health Support for Organizations | Customized Telephone Solutions",
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
      <body className={open_sans.className}>
        <NavBar />
        <main className="h-full min-h-screen w-full">{children}</main>

        {/* Footer  */}
        <div className="absolute bottom-0 z-30 flex h-[300px] w-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%] pt-[220px]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

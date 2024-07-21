import { NavBar } from "@/components/NavBar";
import "../../../globals.css";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/MobileNav";
import { ScrollDetector } from "@/components/ScrollDetector";
import { BackgroundContent } from "@/components/BackgroundContent";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/app/auth";
import Sidebar from "@/components/account/UserDashboard/Sidebar";

export default async function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <main className="border">
        <NavBar session={session} />
        <MobileNav />
        <BackgroundContent />
        <div className="fixed bottom-0 left-0 top-0 z-[15] w-full bg-black/20 bg-gradient-to-r from-black" />
        <div className="relative z-[40] mt-[140px] flex h-full w-full">
          <div className="min-h-full w-[20%]">
            <Sidebar />
          </div>
          <div className="min-h-screen w-[80%]">{children}</div>
        </div>
        <ScrollDetector />
      </main>
    </SessionProvider>
  );
}

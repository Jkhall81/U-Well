import { ContactUsUseClient } from "@/components/useClientComponents/ContactUsUseClient";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUsPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[100px] flex h-full w-full flex-col ">
        {/* Left Header and Form Container*/}
        <div className="flex h-[1700px] w-full flex-col items-center pt-[50px]">
          <h1 className="pl-5 text-7xl font-semibold text-white lg:text-9xl">
            Contact Us
          </h1>
          <p className="prose px-5 py-10 pt-10 text-center text-3xl text-white">
            Whatever your needs, we can help. Please complete the form below and
            we will begin assisting you immediately.
          </p>

          {/* Form */}
          <ContactUsUseClient />
        </div>
        {/* Image */}
        <div className="hidden h-full 4xl:flex">
          <div className="absolute right-[200px] top-[300px] h-[400px] w-[450px] animate-blob rounded-full bg-cyan-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-2000 absolute right-8 top-40 h-[340px] w-[340px] animate-blob rounded-full bg-sky-300 opacity-70 mix-blend-multiply blur-xl filter" />
          <div className="animation-delay-4000 absolute right-[350px] top-[390px] h-[550px] w-[550px] animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-xl filter" />
        </div>
        {/* Footer */}
        <div
          className={`absolute left-0 mt-[1900px] flex w-full items-center justify-between pb-2`}
        >
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;

import { ContactUsUseClient } from "@/components/useClientComponents/ContactUsUseClient";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { BackgroundContent } from "@/components/BackgroundContent";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactUsPage = () => {
  return (
    <main className="main-container">
      {/* Background Stuff */}
      <BackgroundContent />

      {/* Above Background Content */}
      <div className="content-container flex flex-col">
        {/* Left Header and Form Container*/}
        <div className="absolute flex w-full flex-col items-center pt-[50px] md:h-[1900px]">
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

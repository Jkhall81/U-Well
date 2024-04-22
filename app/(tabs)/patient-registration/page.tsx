"use client";

import { MultiStepForm } from "@/components/MultiStepForm";
import { Footer } from "@/components/Footer";
import { useFooterStore } from "@/store/store";

const PatientRegistrationPage = () => {
  const yHeight = useFooterStore((state) => state.pageHeight);
  return (
    <main className="relative min-h-screen w-full overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-[800px] w-full flex-col">
        <div className="flex w-full items-center justify-center px-5">
          <h1 className="prose-2xl px-10 pb-12 text-white">
            Please answer all questions as open and honest as possible. We use
            these to help match you to a provider that will mesh well with your
            needs and values.
          </h1>
        </div>
        {/* Form Container */}
        <div className="h-full w-full">
          <MultiStepForm />
        </div>
        <div
          style={{ marginTop: `${yHeight}px` }}
          className={`absolute left-0 flex w-full items-center justify-between pb-2`}
        >
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default PatientRegistrationPage;

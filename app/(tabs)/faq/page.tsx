import { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BackgroundContent } from "@/components/BackgroundContent";

export const metadata: Metadata = {
  title: "FAQ",
};

const FAQPage = () => {
  return (
    <main className="main-container">
      {/* Background Stuff */}
      <BackgroundContent />

      {/* Above Background Content */}
      <div className="content-container flex flex-col items-center 4xl:px-[350px]">
        <div className="mb-12 py-16">
          <h1 className="heading-one text-center text-7xl font-semibold text-white lg:text-9xl">
            Frequently Asked Questions
          </h1>
        </div>
        <FAQAccordion />
      </div>
    </main>
  );
};

export default FAQPage;

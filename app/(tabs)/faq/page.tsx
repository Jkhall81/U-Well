import { FAQAccordion } from "@/components/FAQAccordion";

const FAQPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-y-auto bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-[800px] w-full flex-col items-center">
        <div className="mb-12 py-16">
          <h1 className="text-6xl font-semibold text-white">
            Frequently asked questions
          </h1>
        </div>
        <FAQAccordion />
      </div>
    </main>
  );
};

export default FAQPage;

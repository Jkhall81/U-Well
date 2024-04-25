import { UseClientComponent } from "@/components/useClientComponents/UseClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUsPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-full w-full">
        {/* Left Heading and Paragraph Text */}
        <div className="flex h-[1700px] w-full flex-col items-center pt-16">
          <h1 className="text-9xl font-semibold text-white">
            Why Choose U-Well?
          </h1>
          <div className="flex h-[50%] w-full flex-row">
            <div className="flex h-full w-[50%] flex-col items-center">
              <h1 className="pt-14 text-7xl text-white">Affordability</h1>
              <p className="prose mt-14 px-16 text-3xl text-white">
                Our goal is to make mental healthcare accessible and affordable
                to everyone. We understand that access to affordable mental
                healthcare is crucial for maintaining good health and
                well-being. By providing affordable mental healthcare, we can
                help ensure that everyone has access to the care they need to
                stay healthy.
              </p>
            </div>
            <div className="h-full w-[50%]"></div>
          </div>
          <div className="flex h-[50%] w-full">
            <div className="h-full w-[50%]"></div>
            <div className="flex h-full w-[50%] flex-col items-center">
              <h1 className="pt-14 text-7xl text-white">Provider Matching</h1>
              <p></p>
            </div>
          </div>
        </div>
        <UseClientComponent />
      </div>
    </main>
  );
};

export default AboutUsPage;

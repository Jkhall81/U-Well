import { Footer } from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-[800px] w-full">
        {/* Left Heading and Paragraph Text */}
        <div className="flex h-full w-[50%] flex-col">
          <div className="flex h-[45%] w-full flex-col justify-center pl-[40px]"></div>
          <div className="flex h-[55%] w-full items-center justify-center pl-[45px]"></div>
        </div>
        {/* Image */}
        <div className="flex h-full w-[50%]">
          <div className="flex h-full w-[50%] flex-col pt-[220px]"></div>
          <div className="h-full w-[50%] pl-[10px] pt-[180px]"></div>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 flex h-[300px] w-full">
        <div className="w-[50%]"></div>
        <div className="w-[50%] pt-[50px]">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default AboutUsPage;

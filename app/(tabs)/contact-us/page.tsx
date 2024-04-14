import { Footer } from "@/components/Footer";

const ContactUsPage = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-[800px] w-full border border-red-600">
        {/* Left Header and Form Container*/}
        <div className="flex h-full w-[50%] flex-col"></div>
        {/* Image */}
        <div className="flex h-full w-[50%]">
          <div className="flex h-full w-[50%] flex-col pt-[220px]"></div>
          <div className="h-full w-[50%] pl-[10px] pt-[180px]"></div>
        </div>
      </div>

      {/* Footer */}
    </main>
  );
};

export default ContactUsPage;

import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const HomePage = () => {
  return (
    <main className="relative flex h-full max-h-screen w-full flex-col items-center justify-between">
      <Image
        src="/bg.jpg"
        fill
        quality={100}
        alt="background image"
        className="object-cover object-left"
      />

      {/* OverLay */}
      <div className="absolute left-0 top-0 h-screen w-full bg-sky-500/30 bg-gradient-to-r from-sky-500/70 to-blue-800/70" />

      {/* Header and Bullet Point Container */}
      <div className="z-40 mt-[230px] flex flex-col">
        <h1 className="text-balance text-6xl font-bold tracking-wide text-white drop-shadow-2xl">
          U-Well MOBILE APP
        </h1>
        <p className="z-40 mt-6 flex list-disc items-center justify-center text-center text-xl font-semibold text-white">
          <span className="bullet mr-2 text-3xl">&#8226;</span>
          Empowering Workers&#39; Mental Health
        </p>
      </div>

      {/* Image and Paragraph Text Container */}
      <div className="z-40 mt-[-40px] flex">
        <div className="absolute left-10 mt-[200px] flex flex-col">
          <p className="text-xl text-white">
            Your Organization&#39;s Dedicated
          </p>
          <p className="mt-1 text-xl text-white">Mental Health Partner</p>
          <div className="mt-5 flex">
            <FaApple className="mr-6" size={35} color="white" />
            <DiAndroid size={35} color="white" />
          </div>
          <div className="mt-4 w-[340px]">
            <p className="text-white">
              At U-Well, we offer customized mental health solutions for your
              organization, designed to fit your specific needs. Take control of
              your mental well-eing with personalized surveys, telehealth
              sessions, and collaboration opportunities for organizations.
              Experience tailored care with U-Well. Because every worker
              deserves to be well.
            </p>
          </div>
        </div>

        {/* Images Container */}
        <div className="flex w-[750px]">
          <div className="absolute h-[600px] w-[300px]">
            <Image
              className="ml-[55px] mt-[30px]"
              src="/icon1.png"
              alt="icon1"
              height={220}
              width={220}
            />
            <Image
              className="ml-[120px] mt-[-70px]"
              src="/icon2.png"
              alt="icon2"
              height={130}
              width={130}
            />
            <Image
              className="ml-[153px] mt-[150px]"
              src="/icon5.png"
              alt="icon5"
              height={130}
              width={130}
            />
          </div>
          <Image
            className="ml-[150px]"
            src="/landing_page_image.png"
            alt="mobile phone image"
            height={739}
            width={474}
          />
          <div className="absolute h-[600px] w-[700px]">
            <Image
              className="ml-[490px] mt-[90px]"
              src="/icon3.png"
              alt="icon3"
              height={160}
              width={160}
            />
            <Image
              className="ml-[490px] mt-[80px]"
              src="/icon4.png"
              alt="icon4"
              height={160}
              width={160}
            />
          </div>
        </div>
      </div>
      <div className="aboslute z-30 mt-[-190px] h-[500px] w-full bg-white"></div>
    </main>
  );
};

export default HomePage;

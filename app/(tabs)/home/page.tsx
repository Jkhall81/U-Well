import Image from "next/image";
import { raleway } from "@/lib/fonts";

const HomePage = () => {
  return (
    <main className="relative h-full min-h-screen w-full overflow-y-scroll bg-blue-500">
      {/* Background Stuff */}
      <div className="absolute z-30 ml-[-190px] mt-[-190px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-700 to-cyan-400" />
      <div className="absolute z-20 ml-[-490px] mt-[-490px] h-[1420px] w-[1420px] rounded-full bg-gradient-to-bl from-blue-800 to-cyan-400" />
      <div className="absolute ml-[-490px] mt-[-490px] h-[1920px] w-[1920px] rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />

      {/* Above Background Content */}
      <div className="absolute z-40 mt-[150px] flex h-[800px] w-full">
        {/* Left Heading and Paragraph Text */}
        <div className="flex h-full w-[50%] flex-col">
          <div className="flex h-[45%] w-full flex-col justify-center pl-[40px]">
            <h1 className={`text-9xl font-semibold text-white 3xl:pl-[200px]`}>
              U-Well
            </h1>
            <h1 className="text-9xl font-semibold text-white 3xl:pl-[200px]">
              Health
            </h1>
          </div>
          <div className="flex h-[55%] w-full items-center justify-center pl-[45px] 2xl:w-[900px] 3xl:pl-[250px]">
            <p
              className={`prose-2xl pr-4 font-semibold text-white ${raleway.className}`}
            >
              At U-Well, we understand that your mental well-being is a
              priority. That&#39;s why we offer personalized mental health
              solutions designed to fit your unique needs and those of your
              family. Our customized surveys, telehealth sessions, and
              collaboration opportunities for organizations empower you to take
              control of your mental health journey. Because we believe that
              everyone deserves tailored care and the opportunity to be well.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex h-full w-[50%]">
          <div className="absolute ml-[-350px] mt-[-50px] hidden 4xl:flex">
            <Image
              src="/landing_page_image.png"
              alt="cell phone"
              height={600}
              width={600}
              className=""
            />
          </div>
          {/* Left Image Block */}

          <div className="flex h-full w-[50%] flex-col pr-6 pt-[220px] 2xl:pl-[90px] 3xl:pl-[180px] 4xl:pl-[300px]">
            <Image
              src="/smiling_people/smiling_woman_1.png"
              alt="smiling woman"
              height={250}
              width={250}
              className="ml-[50px] rounded-2xl rounded-tl-[120px]"
            />
            <div className="mt-8 flex w-full">
              <Image
                src="/smiling_people/smiling_woman_2.png"
                alt="smiling woman"
                height={100}
                width={130}
                className="ml-[10px] rounded-2xl rounded-bl-[60px]"
              />
              <Image
                src="/smiling_people/smiling_man_2.png"
                alt="smiling man"
                height={130}
                width={130}
                className="ml-[31px] rounded-2xl rounded-br-[60px]"
              />
            </div>
          </div>

          {/* Right Image Block */}
          <div className="h-full w-[50%] pl-[10px] pt-[180px]">
            <Image
              src="/smiling_people/smiling_man_1.png"
              alt="smiling man"
              height={100}
              width={100}
              className="rounded-2xl rounded-tl-[50px]"
            />
            <Image
              src="/smiling_people/smiling_woman_3.png"
              alt="smiling man"
              height={130}
              width={130}
              className="mt-6 rounded-2xl rounded-tr-[50px]"
            />
            <Image
              src="/smiling_people/smiling_woman_4.png"
              alt="smiling woman"
              height={160}
              width={160}
              className="mt-6 rounded-2xl rounded-tr-[70px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

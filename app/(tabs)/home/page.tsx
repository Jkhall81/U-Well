"use client";

import Image from "next/image";
import { raleway } from "@/lib/fonts";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { splitStringUsingRegex } from "@/lib/utils";

// Text reveal animation constants
const text = `At U-Well, we understand that your mental well-being is a
priority. That's why we offer personalized mental health
solutions designed to fit your unique needs and those of your
family. Our customized surveys, telehealth sessions, and
collaboration opportunities for organizations empower you to take
control of your mental health journey. Because we believe that
everyone deserves tailored care and the opportunity to be well.`;

const textChars = splitStringUsingRegex(text);

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const HomePage = () => {
  return (
    <main className="main-container">
      <Image
        src={"/shape2.png"}
        alt="abstract shape"
        height={650}
        width={650}
        className="absolute z-[40] mt-[150px] xl:ml-[150px]"
      />
      <Image
        src="/shape.png"
        alt="abstract shape"
        height={950}
        width={950}
        className="absolute z-[40] ml-[900px] mt-[450px] hidden 3xl:flex"
      />
      <div className="content-container lg:flex">
        {/* Left Heading and Paragraph Text */}

        <div className="flex h-full flex-col lg:w-[50%]">
          <div className="flex h-[45%] w-full flex-col justify-center pl-[40px]">
            <h1
              className={`heading-one text-7xl font-semibold text-white lg:text-8xl 3xl:pl-[200px]`}
            >
              U-Well
            </h1>
            <h1 className="heading-one text-7xl font-semibold text-white lg:text-8xl 3xl:pl-[200px]">
              Health
            </h1>
          </div>
          <div className="flex h-[45%] w-full items-start pl-[45px] 2xl:w-[49vw] 3xl:pl-[250px]">
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.01 }}
              className={`prose-2xl mt-[-50px] pr-4 font-semibold text-white ${raleway.className}`}
            >
              {textChars.map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.04 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>

        {/* Image */}
        <div className="flex 3xl:h-full">
          {/* Left Image Block */}
          <div className="ml-0 hidden min-h-[1000px] flex-row xl:flex xl:min-w-[900px]">
            <div className="flex h-full flex-col pl-20 pr-6 pt-[220px] xl:w-[50%] xl:pl-[9vh]">
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Image
                  src="/smiling_people/smiling_woman_1.png"
                  alt="smiling woman"
                  height={250}
                  width={250}
                  className="ml-[50px] rounded-2xl rounded-tl-[120px]"
                />
              </motion.div>

              <div className="mt-8 flex">
                <motion.div
                  variants={fadeIn("right", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <Image
                    src="/smiling_people/smiling_woman_2.png"
                    alt="smiling woman"
                    height={100}
                    width={130}
                    className="ml-[10px] rounded-2xl rounded-bl-[60px]"
                  />
                </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                >
                  <Image
                    src="/smiling_people/smiling_man_2.png"
                    alt="smiling man"
                    height={130}
                    width={130}
                    className="ml-[31px] rounded-2xl rounded-br-[60px]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Image Block */}
            <div className="hidden h-full w-[50%] pl-[10px] pt-[180px] xl:flex xl:flex-col">
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/smiling_people/smiling_man_1.png"
                  alt="smiling man"
                  height={100}
                  width={100}
                  className="rounded-2xl rounded-tl-[50px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/smiling_people/smiling_woman_3.png"
                  alt="smiling man"
                  height={130}
                  width={130}
                  className="mt-6 rounded-2xl rounded-tr-[50px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  src="/smiling_people/smiling_woman_4.png"
                  alt="smiling woman"
                  height={160}
                  width={160}
                  className="mt-6 rounded-2xl rounded-tr-[70px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute mt-[300px] w-full lg:mt-[800px] lg:pt-[500px]">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

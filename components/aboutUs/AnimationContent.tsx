"use client";

import Image from "next/image";
import { cn, fadeIn, splitStringUsingRegex } from "@/lib/utils";
import { easeInOut, motion } from "framer-motion";
import LiComponent from "@/components/aboutUs/LiComponent";
import { aboutUsDataOne, aboutUsDataTwo } from "@/lib/data";
import { raleway } from "@/lib/fonts";

const paragraphText = [
  `U-Well Health is a cutting-edge mental health app that brings
    patients and providers together by using matching via AI.
    Whether you are looking for therapy, counseling, coaching, or
    medication management, U-Well Health can help you find the
    right provider for your needs and preferences. You can access
    quality mental health care from the comfort of your home,
    office, or anywhere you have an internet connection.`,

  `Our mission is to make mental health care affordable and
    accessible for everyone. We believe that everyone deserves
    to have a healthy and happy mind, and that mental health
    care should be easy, convenient, and effective. We are
    committed to creating a platform that connects patients and
    providers in a way that benefits both parties and improves
    the overall quality of mental health care.`,

  `Our founders are a team of passionate and experienced
    professionals who have deep roots in the medical industry
    and the mental health industry. They have witnessed the
    challenges and gaps in the current mental health system, and
    they have decided to create a solution that ddresses them.
    They have combined their experitise in technology, business,
    psychology, psychiatry, and social work to create U-Well
    Health, the app that revolutionizes mental health care.`,

  `You can access mental health care with an alias if you can use
    the cash pay option. This will allow complete anonymity and
    privacy for your sessions. You can choose any name and avatar
    you want, and your provider will not have access to your real
    identity or contact information. Incognito mode is perfect for
    people who want to try out mental health care without worrying
    about stigma, discrimination, or exposure.`,
];

const textChars = paragraphText.map((item) => {
  return splitStringUsingRegex(item);
});

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const delay = 3.2;

export const AnimationContent = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="min-h-screen w-full">
        <div className="mt-12 flex flex-col items-center text-white">
          <h1 className="heading-one text-8xl font-bold lg:text-9xl">
            About Us
          </h1>
          <p className="mb-10 mt-16 px-10 text-3xl lg:text-4xl">
            U-Well Health: The app that connects you to the best mental health
            care.
          </p>
        </div>
        <div className="flex w-full flex-col xl:flex-row">
          <div className="mt-[50px] flex w-full flex-col items-center text-white xl:ml-[50px] xl:mt-[250px] xl:w-[50%]">
            <h2 className="heading-two pb-20 text-6xl font-semibold">
              What is U-Well Health?
            </h2>
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.01 }}
              viewport={{ once: true }}
              className={cn(
                "prose px-10 text-4xl text-white xl:px-14",
                raleway.className,
              )}
            >
              {textChars[0].map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.6 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("left", delay)}
            initial="hidden"
            whileInView="show"
            transition={easeInOut}
            viewport={{ once: true }}
            className="mt-20 flex w-full justify-center py-10 xl:block xl:w-[50%]"
          >
            <div className="relative h-[850px] w-[850px]">
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-cyan-300">
                <Image
                  src="/aboutUs1.png"
                  alt="smiling woman"
                  height={850}
                  width={850}
                  priority
                  className="mx-auto rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}

      <section className="h-auto w-full">
        <div>
          <div>
            <LiComponent
              title={aboutUsDataOne.title}
              text={aboutUsDataOne.text}
              listItems={aboutUsDataOne.listItems}
            />
          </div>
          <div className="pt-20">
            <LiComponent
              title={aboutUsDataTwo.title}
              text={aboutUsDataTwo.text}
              listItems={aboutUsDataTwo.listItems}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="h-auto w-full">
        <div className="mt-20 flex h-full flex-col xl:flex-row">
          <motion.div
            variants={fadeIn("right", delay)}
            initial="hidden"
            whileInView="show"
            transition={easeInOut}
            viewport={{ once: true }}
            className="flex w-full justify-center xl:w-[50%]"
          >
            <div className="relative mt-20 h-[850px] w-[850px]">
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-cyan-300">
                <Image
                  src="/aboutUs2.png"
                  alt="person with outstretched arms"
                  width={850}
                  height={850}
                  priority
                  className="rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
          <div className="flex w-full flex-col xl:w-[50%]">
            <div className="flex flex-col items-center text-white">
              <h2 className="heading-two mb-20 mt-14 text-5xl font-semibold xl:text-6xl">
                What is our mission?
              </h2>
              <motion.p
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.01 }}
                viewport={{ once: true }}
                className={cn(
                  "prose px-10 pb-20 text-4xl text-white",
                  raleway.className,
                )}
              >
                {textChars[1].map((char, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 0.6 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
            <div className="flex flex-col items-center text-white">
              <h2 className="heading-two mb-20 text-5xl font-semibold xl:text-6xl">
                Who are our founders?
              </h2>
              <motion.p
                initial="hidden"
                whileInView="reveal"
                transition={{ staggerChildren: 0.01 }}
                viewport={{ once: true }}
                className={cn(
                  "prose px-10 text-4xl text-white",
                  raleway.className,
                )}
              >
                {textChars[2].map((char, index) => (
                  <motion.span
                    key={index}
                    transition={{ duration: 0.6 }}
                    variants={charVariants}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}

      <section className="w-full xl:h-[1600px]">
        <div className="mt-20 flex h-auto w-full flex-col xl:mt-40 xl:flex-row ">
          <div className="flex w-full flex-col items-center text-white xl:ml-[50px] xl:mt-[200px] xl:w-[50%]">
            <h2 className="heading-two mx-auto mb-20 py-2 text-5xl font-semibold xl:text-6xl">
              Incognito Mode
            </h2>
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.01 }}
              viewport={{ once: true }}
              className={cn(
                "prose px-14 text-4xl text-white",
                raleway.className,
              )}
            >
              {textChars[3].map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.6 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", delay)}
            initial="hidden"
            whileInView="show"
            transition={easeInOut}
            viewport={{ once: true }}
            className="mt-10 flex w-full justify-center xl:mt-0 xl:w-[50%]"
          >
            <div className="relative h-[850px] w-[850px]">
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-cyan-300">
                <Image
                  src="/aboutUs3.png"
                  alt="woman stretching"
                  height={850}
                  width={850}
                  priority
                  className="rounded-3xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

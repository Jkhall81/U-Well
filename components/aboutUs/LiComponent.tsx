"use client";

import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  text: string;
  listItems: string[];
}

const LiComponent = ({ title, text, listItems }: Props) => {
  return (
    <div className="mt-20 flex w-full flex-col items-center text-white">
      <motion.h2
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="heading-two pb-20 text-center text-4xl font-semibold xl:text-6xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="prose mx-10 mb-10 text-3xl text-white xl:text-4xl"
      >
        {text}
      </motion.p>
      <ul className="list-disc">
        {listItems.map((item, index) => {
          return (
            <motion.li
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              className="prose mx-10 py-4 text-2xl text-white xl:text-3xl"
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
export default LiComponent;

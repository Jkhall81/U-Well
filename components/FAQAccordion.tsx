"use client";

import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { Footer } from "@/components/Footer";
import { FAQData } from "@/lib/data";
import { useNavStore } from "@/store/store";

export const FAQAccordion = () => {
  const [accordionStates, setAccordionStates] = useState(
    Array(FAQData.length).fill(false),
  );
  // const setStateTrue = useNavStore((state) => state.setNavSolidTrue);
  // const setStateFalse = useNavStore((state) => state.setNavSolidFalse);

  const toggleAccordion = (index: number) => {
    const newAccordionStates = [...accordionStates];
    newAccordionStates[index] = !newAccordionStates[index];
    setAccordionStates(newAccordionStates);
  };

  // useEffect(() => {
  //   const solidNav = accordionStates.some((state) => state);
  //   if (solidNav) {
  //     setStateTrue();
  //   } else {
  //     setStateFalse();
  //   }
  // }, [accordionStates, setStateTrue, setStateFalse]);

  return (
    <section className="text-white lg:px-14">
      {FAQData.map((item, index) => {
        return (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full px-4 lg:px-[90px]"
          >
            <AccordionItem value={`item-${index + 1}`}>
              <Separator />
              <AccordionTrigger
                onClick={() => toggleAccordion(index)}
                className="py-8 text-left text-3xl font-bold text-neutral-300"
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="">
                {item.answer.map((paragraph, index) => {
                  return (
                    <p
                      className="mt-5 pb-4 text-3xl font-medium leading-tight"
                      key={index}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
      <div className="h-[500px]"></div>
      <Footer />
    </section>
  );
};

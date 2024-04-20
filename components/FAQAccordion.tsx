import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQData } from "@/lib/data";

export const FAQAccordion = () => {
  return (
    <section className="px-14 text-white">
      {FAQData.map((item, index) => {
        return (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-2xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </section>
  );
};

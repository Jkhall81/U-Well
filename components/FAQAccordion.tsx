import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import { FAQData } from "@/lib/data";

export const FAQAccordion = () => {
  return (
    <section className="px-14 text-white">
      {FAQData.map((item, index) => {
        return (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <Separator />
              <AccordionTrigger className="py-8 text-left text-4xl font-bold">
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
      <div className="h-[200px]"></div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

export function FAQ() {
  return (
    <Section className="pattern-jali">
      <SectionHeading
        kicker="FAQ"
        title={
          <>
            Questions from the <span className="text-gradient-gold">Sheri</span>
          </>
        }
      />

      <div className="reveal mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="border-b border-primary/20"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-loose text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

import { Check } from "lucide-react";
import { whyPoints } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

export function WhySection() {
  return (
    <Section className="pattern-jali">
      <SectionHeading
        kicker="The Difference"
        title={
          <>
            Why <span className="text-gradient-gold">Sankadi Sheri?</span>
          </>
        }
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyPoints.map((point, i) => (
          <li
            key={point}
            className="reveal flex items-start gap-3 rounded-sm border border-primary/20 bg-background/40 p-5 transition-colors duration-500 hover:border-primary/50"
            style={{ transitionDelay: `${(i % 4) * 70}ms` }}
          >
            <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span className="text-sm leading-relaxed text-foreground/85">{point}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

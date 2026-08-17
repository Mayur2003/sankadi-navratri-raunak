import { highlights } from "@/data/event";
import { Section } from "./ui-bits";

export function Highlights() {
  return (
    <Section className="border-y border-primary/20 bg-card/50">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal text-center"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <p className="font-display text-5xl font-semibold text-gradient-gold sm:text-6xl">
              {stat.value}
            </p>
            <p className="mt-3 text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <p className="reveal mt-10 text-center text-xs text-muted-foreground/70">
        Indicative figures for this edition — easily editable in the event configuration.
      </p>
    </Section>
  );
}

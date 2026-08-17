import { Check } from "lucide-react";
import { passes } from "@/data/event";
import { cn } from "@/lib/utils";
import { CTA, Section, SectionHeading } from "./ui-bits";

export function Tickets() {
  return (
    <Section id="passes" className="bg-card/40 pattern-jali">
      <SectionHeading
        kicker="Passes"
        title={
          <>
            Choose Your <span className="text-gradient-gold">Pass</span>
          </>
        }
        subtitle="Indicative pricing shown below. Final pass rates will be announced with the schedule."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {passes.map((pass, i) => (
          <article
            key={pass.name}
            className={cn(
              "reveal surface-carved group relative flex flex-col rounded-sm p-8 transition-all duration-500 hover:-translate-y-2",
              pass.featured
                ? "border-primary/70 shadow-[var(--shadow-glow)] lg:-mt-4 lg:mb-4"
                : "hover:border-primary/50",
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Ticket notches */}
            <span
              className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-background"
              aria-hidden
            />
            <span
              className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-background"
              aria-hidden
            />

            {pass.featured ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-primary-foreground uppercase">
                Most Loved
              </span>
            ) : null}

            <p className="text-[0.65rem] tracking-[0.3em] text-accent uppercase">Sankadi Sheri</p>
            <h3 className="mt-3 font-display text-3xl">{pass.name}</h3>
            <p className="mt-5 font-display text-5xl text-gradient-gold">{pass.price}</p>
            <p className="mt-2 text-xs text-muted-foreground">{pass.note}</p>

            <div className="my-7 border-t border-dashed border-primary/30" aria-hidden />

            <ul className="flex-1 space-y-3">
              {pass.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {perk}
                </li>
              ))}
            </ul>

            <CTA
              href="#contact"
              tone={pass.featured ? "gold" : "outline"}
              className="mt-8 w-full"
            >
              {pass.cta}
            </CTA>
          </article>
        ))}
      </div>
    </Section>
  );
}

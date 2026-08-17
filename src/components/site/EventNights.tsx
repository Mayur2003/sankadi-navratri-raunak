import { CalendarDays, Mic2, Sparkles } from "lucide-react";
import { eventNights } from "@/data/event";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./ui-bits";

const passTone: Record<string, string> = {
  Available: "border-leaf/50 text-leaf",
  "Filling Fast": "border-primary/60 text-primary",
  "Sold Out": "border-destructive/60 text-destructive",
};

export function EventNights() {
  return (
    <Section id="events">
      <SectionHeading
        kicker="Nine Nights"
        title={
          <>
            9 Nights. One Celebration.{" "}
            <span className="text-gradient-gold">Endless Memories.</span>
          </>
        }
        subtitle="Every night of the Sheri carries its own theme, sound and story. Dates and artists are being finalised."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {eventNights.map((night, i) => (
          <article
            key={night.night}
            className="reveal surface-carved group relative overflow-hidden rounded-sm p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <span className="pattern-toran absolute inset-x-0 top-0 h-0.5 opacity-60" aria-hidden />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[0.62rem] tracking-[0.3em] text-accent uppercase">
                  {night.night}
                </p>
                <h3 className="mt-2 font-display text-2xl text-primary">{night.theme}</h3>
              </div>
              <span
                className={cn(
                  "rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.14em] uppercase",
                  passTone[night.passes],
                )}
              >
                {night.passes}
              </span>
            </div>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <CalendarDays className="size-4 shrink-0 text-primary/70" aria-hidden />
                <dt className="sr-only">Date</dt>
                <dd>
                  {night.date} · {night.day}
                </dd>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mic2 className="size-4 shrink-0 text-primary/70" aria-hidden />
                <dt className="sr-only">Artist</dt>
                <dd>{night.artist}</dd>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Sparkles className="size-4 shrink-0 text-primary/70" aria-hidden />
                <dt className="sr-only">Special attraction</dt>
                <dd>{night.attraction}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

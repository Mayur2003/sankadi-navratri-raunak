import { musicExperiences } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

function AudioWave() {
  return (
    <div
      className="flex h-14 items-end justify-center gap-1.5"
      aria-hidden
      role="presentation"
      title="Decorative sound wave"
    >
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="w-1 origin-bottom rounded-full bg-gradient-to-t from-accent to-primary"
          style={{
            height: `${18 + ((i * 37) % 40)}px`,
            animation: `wave-bar ${900 + (i % 7) * 160}ms ease-in-out ${i * 60}ms infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function MusicExperience() {
  return (
    <Section className="bg-card/40 pattern-jali">
      <SectionHeading
        kicker="Sound"
        title={
          <>
            Rhythm of <span className="text-gradient-gold">Sankadi Sheri</span>
          </>
        }
        subtitle="From the first taali to the last dhol beat — the Sheri never stops singing."
      />

      <div className="reveal mt-12">
        <AudioWave />
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {musicExperiences.map((item, i) => (
          <article
            key={item.title}
            className="reveal group relative overflow-hidden rounded-sm border border-primary/20 bg-background/40 p-7 transition-all duration-500 hover:border-primary/60 hover:bg-background/70"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <span
              className="absolute -right-10 -bottom-10 size-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-primary/20"
              aria-hidden
            />
            <h3 className="font-display text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

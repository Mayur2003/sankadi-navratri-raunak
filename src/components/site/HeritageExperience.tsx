import { Landmark, Flower2, Music4, Users } from "lucide-react";
import { heritageFeatures } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

const icons = [Landmark, Flower2, Music4, Users] as const;

export function HeritageExperience() {
  return (
    <Section id="experience" className="bg-card/40">
      <SectionHeading
        kicker="Heritage"
        title={
          <>
            Experience <span className="text-gradient-gold">Ahmedabad's Heritage</span>
          </>
        }
        subtitle="Four chapters of the old city, retold through nine nights of celebration."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {heritageFeatures.map((feature, i) => {
          const Icon = icons[i % icons.length];
          return (
            <article
              key={feature.no}
              className="reveal group surface-carved relative overflow-hidden rounded-sm p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span
                className="pointer-events-none absolute -top-6 -right-3 font-display text-7xl text-primary/10 transition-colors duration-500 group-hover:text-primary/20"
                aria-hidden
              >
                {feature.no}
              </span>
              <span className="flex size-12 items-center justify-center rounded-sm border border-primary/40 text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="mt-6 text-[0.65rem] tracking-[0.3em] text-accent uppercase">
                {feature.no}
              </p>
              <h3 className="mt-2 font-display text-2xl">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

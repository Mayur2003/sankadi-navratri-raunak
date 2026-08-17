import fafdaImage from "@/assets/food-fafda.jpg";
import streetImage from "@/assets/food-street.jpg";
import { foodItems } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

const images = [fafdaImage, streetImage];

export function Food() {
  return (
    <Section>
      <SectionHeading
        kicker="Food Street"
        title={
          <>
            Swad of <span className="text-gradient-gold">Ahmedabad</span>
          </>
        }
        subtitle="A pol is never complete without its food street. Ours runs all nine nights."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {images.map((image, i) => (
          <div key={i} className="reveal group relative overflow-hidden rounded-sm">
            <img
              src={image}
              alt={i === 0 ? "Plate of fafda with jalebi and chutney" : "Gujarati street food stall spread at night"}
              width={1100}
              height={900}
              loading="lazy"
              className="aspect-3/2 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
            />
            <span
              className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 to-transparent"
              aria-hidden
            />
            <p className="absolute bottom-5 left-6 font-display text-2xl text-primary">
              {i === 0 ? "Fafda Jalebi" : "Night Food Street"}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item, i) => (
          <article
            key={item.name}
            className="reveal rounded-sm border border-primary/20 bg-background/40 p-6 transition-colors duration-500 hover:border-primary/50"
            style={{ transitionDelay: `${(i % 3) * 70}ms` }}
          >
            <h3 className="font-display text-xl text-primary">{item.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

import womenImage from "@/assets/dress-women.jpg";
import menImage from "@/assets/dress-men.jpg";
import { dressCode } from "@/data/event";
import { CTA, Section, SectionHeading } from "./ui-bits";

const looks = [
  {
    label: "For Women",
    image: womenImage,
    alt: "Woman in a traditional Gujarati chaniya choli with bandhani dupatta and silver jewellery",
    items: dressCode.women,
  },
  {
    label: "For Men",
    image: menImage,
    alt: "Man in traditional Gujarati kediyu, chorno and embroidered jacket holding dandiya sticks",
    items: dressCode.men,
  },
];

export function DressCode() {
  return (
    <Section>
      <SectionHeading
        kicker="Dress Code"
        title={
          <>
            Dress Like <span className="text-gradient-gold">Gujarat</span>
          </>
        }
        subtitle="Mirror work, bandhani and mojdi — come dressed like the pol itself."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {looks.map((look) => (
          <article key={look.label} className="reveal group relative overflow-hidden rounded-sm">
            <img
              src={look.image}
              alt={look.alt}
              width={912}
              height={1200}
              loading="lazy"
              className="aspect-4/5 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/35 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="kicker">{look.label}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {look.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-primary/40 bg-background/50 px-3.5 py-1.5 text-xs text-foreground/90 backdrop-blur-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="reveal mt-12 text-center">
        <CTA href="#contact">Get Your Garba Look Ready</CTA>
      </div>
    </Section>
  );
}

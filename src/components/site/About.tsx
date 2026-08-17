import aboutImage from "@/assets/about-pol-house.jpg";
import { Section } from "./ui-bits";

const highlightWords = ["Tradition", "Music", "Community", "Celebration"];

export function About() {
  return (
    <Section id="about" className="pattern-jali">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="reveal relative">
          <div className="absolute -inset-3 rounded-sm border border-primary/25" aria-hidden />
          <img
            src={aboutImage}
            alt="Carved wooden door of a traditional Ahmedabad pol house with a marigold toran"
            width={1200}
            height={1408}
            loading="lazy"
            className="relative aspect-4/5 w-full rounded-sm object-cover shadow-[var(--shadow-warm)]"
          />
        </div>

        <div className="reveal">
          <p className="kicker">About the Sheri</p>
          <h2 className="mt-3 text-3xl leading-tight font-medium sm:text-4xl md:text-5xl">
            Welcome to <span className="text-gradient-gold">Sankadi Sheri</span>
          </h2>
          <div className="mt-5 h-px w-28 bg-gradient-to-r from-primary to-transparent" />
          <p className="mt-6 text-sm leading-loose text-muted-foreground sm:text-base">
            Sankadi Sheri brings the soul of Ahmedabad's historic pols to the heart of Navratri.
            Inspired by the narrow lanes, beautifully carved wooden homes, colourful torans and
            timeless community spirit of Ahmedabad, Sankadi Sheri is where heritage meets the rhythm
            of Garba.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            {highlightWords.map((word, i) => (
              <li key={word} className="flex items-center gap-4">
                <span className="font-display text-lg tracking-wide text-primary sm:text-xl">
                  {word}
                </span>
                {i < highlightWords.length - 1 ? (
                  <span className="text-accent" aria-hidden>
                    •
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

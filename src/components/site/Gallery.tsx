import { useState } from "react";
import { X } from "lucide-react";
import polImage from "@/assets/gallery-pol.jpg";
import garbaImage from "@/assets/gallery-garba.jpg";
import dandiyaImage from "@/assets/gallery-dandiya.jpg";
import decorImage from "@/assets/gallery-decor.jpg";
import heroImage from "@/assets/hero-pol-night.jpg";
import houseImage from "@/assets/about-pol-house.jpg";
import womenImage from "@/assets/dress-women.jpg";
import menImage from "@/assets/dress-men.jpg";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "./ui-bits";

type Shot = { src: string; alt: string; category: string };

/** Replace these with real event photography when available. */
const shots: Shot[] = [
  { src: polImage, alt: "Narrow heritage pol lane in old Ahmedabad", category: "Pol Heritage" },
  { src: garbaImage, alt: "Garba circle spinning at night", category: "Garba" },
  { src: decorImage, alt: "Marigold toran, brass diyas and a garba pot", category: "Decor" },
  { src: dandiyaImage, alt: "Colourful dandiya sticks held by dancers", category: "Dandiya" },
  { src: heroImage, alt: "Ahmedabad pol street lit up for Navratri", category: "Ahmedabad" },
  { src: womenImage, alt: "Woman in chaniya choli at a Navratri night", category: "People" },
  { src: houseImage, alt: "Carved wooden pol house facade", category: "Pol Heritage" },
  { src: menImage, alt: "Man in kediyu and chorno with dandiya sticks", category: "People" },
];

const categories = ["All", "Pol Heritage", "Garba", "People", "Decor", "Dandiya", "Ahmedabad"];

export function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Shot | null>(null);

  const visible = active === "All" ? shots : shots.filter((s) => s.category === active);

  return (
    <Section id="gallery" className="bg-card/40">
      <SectionHeading
        kicker="Gallery"
        title={
          <>
            Glimpses of the <span className="text-gradient-gold">Sheri</span>
          </>
        }
        subtitle="Heritage, rhythm and light — a look at the world we are building."
      />

      <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "min-h-10 rounded-full border px-4 text-[0.68rem] font-medium tracking-[0.16em] uppercase transition-colors",
              active === cat
                ? "border-primary bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {visible.map((shot) => (
          <button
            key={shot.src + shot.category}
            type="button"
            onClick={() => setLightbox(shot)}
            className="reveal group relative block w-full overflow-hidden rounded-sm break-inside-avoid focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-108"
            />
            <span
              className="absolute inset-0 bg-gradient-to-t from-maroon-deep/85 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <span className="absolute bottom-4 left-4 translate-y-3 text-[0.65rem] tracking-[0.24em] text-primary uppercase opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {shot.category}
            </span>
          </button>
        ))}
      </div>

      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-maroon-deep/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute top-5 right-5 inline-flex size-11 items-center justify-center rounded-full border border-primary/50 text-primary"
          >
            <X className="size-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-sm object-contain shadow-[var(--shadow-warm)]"
          />
        </div>
      ) : null}
    </Section>
  );
}

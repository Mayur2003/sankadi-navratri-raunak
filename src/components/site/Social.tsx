import { Instagram } from "lucide-react";
import garbaImage from "@/assets/gallery-garba.jpg";
import decorImage from "@/assets/gallery-decor.jpg";
import polImage from "@/assets/gallery-pol.jpg";
import dandiyaImage from "@/assets/gallery-dandiya.jpg";
import { eventInfo } from "@/data/event";
import { CTA, Section, SectionHeading } from "./ui-bits";

const posts = [
  { src: garbaImage, alt: "Garba circle at night", caption: "Raas ni raat" },
  { src: decorImage, alt: "Toran and diya decor", caption: "Toran taiyar" },
  { src: polImage, alt: "Heritage pol lane", caption: "Pol ni gali" },
  { src: dandiyaImage, alt: "Dandiya sticks", caption: "Dandiya up" },
];

export function Social() {
  return (
    <Section className="bg-card/40">
      <SectionHeading
        kicker={eventInfo.contact.instagramHandle}
        title={
          <>
            Follow the <span className="text-gradient-gold">Sheri</span>
          </>
        }
        subtitle="Behind-the-scenes, artist reveals and pass drops — first on Instagram."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {posts.map((post, i) => (
          <a
            key={post.caption}
            href={eventInfo.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative block overflow-hidden rounded-sm"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <img
              src={post.src}
              alt={post.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-108"
            />
            <span
              className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-deep/90 to-transparent p-4 text-xs tracking-[0.18em] text-primary uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            >
              {post.caption}
            </span>
          </a>
        ))}
      </div>

      <div className="reveal mt-10 text-center">
        <CTA href={eventInfo.contact.instagram} target="_blank" rel="noreferrer">
          <Instagram className="size-4" aria-hidden />
          Follow Us on Instagram
        </CTA>
      </div>
    </Section>
  );
}

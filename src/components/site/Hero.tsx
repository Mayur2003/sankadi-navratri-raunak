import { useEffect, useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-pol-night.jpg";
import { eventInfo } from "@/data/event";
import { CTA, Diya, Toran } from "./ui-bits";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY * 0.25));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Old Ahmedabad pol street lit with diyas and torans during Navratri garba"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 size-full scale-110 object-cover"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.12)` }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_10%,color-mix(in_oklab,var(--maroon-deep)_75%,transparent)_70%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[image:var(--gradient-night)]" aria-hidden />

      <Toran className="absolute inset-x-0 top-20 opacity-70" />

      <Diya className="absolute bottom-32 left-[8%] animate-float-diya" />
      <Diya className="absolute bottom-48 right-[10%] animate-float-diya" delay={900} />

      <div className="relative mx-auto w-full max-w-4xl px-5 pt-28 pb-24 text-center sm:px-8">
        <p className="kicker reveal is-visible">Navratri {eventInfo.year} · Ahmedabad</p>
        <h1 className="mt-5 font-display text-5xl leading-[0.95] font-semibold tracking-[0.04em] text-gradient-gold sm:text-7xl md:text-8xl">
          SANKADI SHERI
        </h1>
        <p className="mt-5 font-deco text-base text-primary/90 sm:text-xl">{eventInfo.tagline}</p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/80 sm:text-base">
          {eventInfo.intro}
        </p>

        <address className="mx-auto mt-8 flex max-w-md items-start justify-center gap-2 rounded-sm border border-primary/25 bg-background/35 px-5 py-4 text-left text-xs leading-relaxed text-foreground/85 not-italic backdrop-blur-sm sm:text-sm">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <span>
            <strong className="font-semibold text-primary">{eventInfo.venue.name}</strong>
            <br />
            {eventInfo.venue.line1}
            <br />
            {eventInfo.venue.line2}, {eventInfo.venue.city}
          </span>
        </address>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CTA href="#passes" className="w-full sm:w-auto">
            Book Your Pass
          </CTA>
          <CTA href="#about" tone="outline" className="w-full sm:w-auto">
            Explore Event
          </CTA>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-primary/80 transition-colors hover:text-primary"
      >
        <span className="flex h-9 w-5.5 justify-center rounded-full border border-primary/60 pt-1.5">
          <span className="block size-1 rounded-full bg-primary animate-scroll-dot" />
        </span>
        <ChevronDown className="size-4" aria-hidden />
      </a>
    </section>
  );
}

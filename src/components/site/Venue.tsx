import { MapPin, Navigation } from "lucide-react";
import { eventInfo } from "@/data/event";
import { CTA, Section, SectionHeading } from "./ui-bits";

const { venue } = eventInfo;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.mapsQuery)}`;
const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(venue.mapsQuery)}&output=embed`;

export function Venue() {
  return (
    <Section id="venue">
      <SectionHeading
        kicker="Venue"
        title={
          <>
            Meet Us at <span className="text-gradient-gold">Sankadi Sheri</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_1.25fr]">
        <div className="reveal surface-carved relative rounded-sm p-8">
          <span className="pattern-toran absolute inset-x-0 top-0 h-1 opacity-70" aria-hidden />
          <span className="absolute inset-4 rounded-sm border border-primary/20" aria-hidden />
          <div className="relative">
            <MapPin className="size-6 text-primary" aria-hidden />
            <h3 className="mt-5 font-display text-3xl text-primary">{venue.name}</h3>
            <address className="mt-4 text-sm leading-loose text-muted-foreground not-italic">
              {venue.line1}
              <br />
              {venue.line2}
              <br />
              {venue.city}
              <br />
              {venue.country}
            </address>
            <CTA href={directionsUrl} target="_blank" rel="noreferrer" className="mt-8">
              <Navigation className="size-4" aria-hidden />
              Get Directions
            </CTA>
          </div>
        </div>

        <div className="reveal overflow-hidden rounded-sm border border-primary/25">
          <iframe
            title={`Map showing ${venue.name}, Ahmedabad`}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full lg:h-full"
          />
        </div>
      </div>
    </Section>
  );
}

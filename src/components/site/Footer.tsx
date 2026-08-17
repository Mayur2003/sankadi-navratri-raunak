import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { eventInfo, navLinks } from "@/data/event";
import { Toran } from "./ui-bits";

const socials = [
  { icon: Instagram, label: "Instagram", href: eventInfo.contact.instagram },
  { icon: Facebook, label: "Facebook", href: eventInfo.contact.facebook },
  { icon: Youtube, label: "YouTube", href: eventInfo.contact.youtube },
  { icon: MessageCircle, label: "WhatsApp", href: eventInfo.contact.whatsappLink },
];

export function Footer() {
  return (
    <footer className="relative border-t border-primary/25 bg-card/60 pattern-jali">
      <Toran className="absolute inset-x-0 -top-0.5 opacity-60" />
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[0.18em] text-gradient-gold">
              SANKADI SHERI
            </p>
            <p className="mt-3 font-deco text-sm text-primary/85">{eventInfo.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A Navratri celebration inspired by the pols, torans and community spirit of old
              Ahmedabad.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="kicker">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker">Reach Us</p>
            <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
              {eventInfo.venue.name}
              <br />
              {eventInfo.venue.line1}
              <br />
              {eventInfo.venue.line2}
              <br />
              {eventInfo.venue.city}
            </address>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-11 items-center justify-center rounded-sm border border-primary/35 text-primary transition-colors hover:bg-primary/10"
                >
                  <social.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary/15 pt-6 text-center text-xs text-muted-foreground">
          © {eventInfo.year} Sankadi Sheri. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

import { useState, type FormEvent } from "react";
import { Phone, Mail, Instagram, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { eventInfo } from "@/data/event";
import { Section, SectionHeading } from "./ui-bits";

const { contact, venue } = eventInfo;

const channels = [
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappLink },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Instagram, label: "Instagram", value: contact.instagramHandle, href: contact.instagram },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    // Placeholder submit — connect to your booking inbox or CRM later.
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Message received! Our team will get back to you soon.");
    }, 600);
  }

  const fieldClass =
    "min-h-12 w-full rounded-sm border border-input bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none";

  return (
    <Section id="contact">
      <SectionHeading
        kicker="Contact"
        title={
          <>
            Have Questions? <span className="text-gradient-gold">Let's Connect</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="reveal space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-sm border border-primary/20 bg-background/40 p-5 transition-colors hover:border-primary/60"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-primary/40 text-primary">
                <channel.icon className="size-4" aria-hidden />
              </span>
              <span>
                <span className="block text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
                  {channel.label}
                </span>
                <span className="mt-1 block text-sm text-foreground/90">{channel.value}</span>
              </span>
            </a>
          ))}

          <div className="flex items-start gap-4 rounded-sm border border-primary/20 bg-background/40 p-5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-primary/40 text-primary">
              <MapPin className="size-4" aria-hidden />
            </span>
            <address className="text-sm leading-relaxed text-foreground/90 not-italic">
              <span className="block text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
                Venue
              </span>
              {venue.name}, {venue.line1}, {venue.line2}, {venue.city}
            </address>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="reveal surface-carved rounded-sm p-7 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs tracking-[0.18em] uppercase">
                Name
              </label>
              <input id="name" name="name" required autoComplete="name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="mobile" className="mb-2 block text-xs tracking-[0.18em] uppercase">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                autoComplete="tel"
                className={fieldClass}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="mb-2 block text-xs tracking-[0.18em] uppercase">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-2 block text-xs tracking-[0.18em] uppercase">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`${fieldClass} py-3 leading-relaxed`}
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-gradient-to-r from-primary to-accent px-7 text-[0.78rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-all hover:brightness-110 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

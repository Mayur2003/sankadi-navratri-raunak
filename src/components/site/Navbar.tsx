import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/event";
import { cn } from "@/lib/utils";
import { CTA } from "./ui-bits";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-primary/25 bg-background/92 backdrop-blur-md shadow-[var(--shadow-warm)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-[0.18em] text-gradient-gold sm:text-2xl">
            SANKADI SHERI
          </span>
          <span className="mt-1 text-[0.55rem] tracking-[0.3em] text-muted-foreground uppercase">
            Navratri · Ahmedabad
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-xs font-medium tracking-[0.16em] text-foreground/80 uppercase transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <CTA href="#passes" className="hidden px-5 text-[0.7rem] sm:inline-flex">
            Book Pass
          </CTA>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-primary/40 text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-primary/20 bg-background/98 px-5 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 font-display text-lg text-foreground/90 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <CTA href="#passes" onClick={() => setOpen(false)} className="mt-6 w-full">
            Book Pass
          </CTA>
        </div>
      ) : null}
    </header>
  );
}

import { cn } from "@/lib/utils";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

/** Decorative gold toran strip used to top-and-tail sections. */
export function Toran({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none flex justify-center gap-3", className)} aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="block h-6 w-2 rounded-b-full bg-gradient-to-b from-primary/70 to-accent/10"
          style={{ height: `${12 + (i % 4) * 7}px` }}
        />
      ))}
    </div>
  );
}

export function Diya({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <span className={cn("relative inline-block", className)} aria-hidden>
      <span
        className="absolute -top-3 left-1/2 h-4 w-2 -translate-x-1/2 rounded-full bg-primary blur-[2px] animate-flicker"
        style={{ animationDelay: `${delay}ms` }}
      />
      <span className="block h-3 w-7 rounded-b-full bg-gradient-to-b from-accent to-brown" />
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight font-medium text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 h-px w-28 bg-gradient-to-r from-transparent via-primary to-transparent",
          align === "center" ? "mx-auto" : "",
        )}
      />
      {subtitle ? (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}

type CTAProps = ComponentPropsWithoutRef<"a"> & {
  tone?: "gold" | "outline" | "ember";
};

export function CTA({ tone = "gold", className, children, ...props }: CTAProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-[0.78rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        tone === "gold" &&
          "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)] hover:brightness-110 active:scale-[0.98]",
        tone === "ember" && "bg-accent text-accent-foreground hover:brightness-110",
        tone === "outline" &&
          "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

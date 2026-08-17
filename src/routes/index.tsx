import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { HeritageExperience } from "@/components/site/HeritageExperience";
import { EventNights } from "@/components/site/EventNights";
import { MusicExperience } from "@/components/site/MusicExperience";
import { DressCode } from "@/components/site/DressCode";
import { Gallery } from "@/components/site/Gallery";
import { Venue } from "@/components/site/Venue";
import { Tickets } from "@/components/site/Tickets";
import { Highlights } from "@/components/site/Highlights";
import { WhySection } from "@/components/site/WhySection";
import { Food } from "@/components/site/Food";
import { Social } from "@/components/site/Social";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Sankadi Sheri — Navratri Garba in Ahmedabad";
const description =
  "Sankadi Sheri: a heritage pol-inspired Navratri garba celebration at Alphonso Party Plot, Near Science City Circle, Ahmedabad. Nine nights of garba, dandiya, food and tradition.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HeritageExperience />
        <EventNights />
        <MusicExperience />
        <DressCode />
        <Gallery />
        <Highlights />
        <Venue />
        <Tickets />
        <WhySection />
        <Food />
        <Social />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { VehicleGrid } from "@/components/sections/VehicleGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StorytellingBand } from "@/components/sections/StorytellingBand";
import { StandorteKarte } from "@/components/sections/StandorteKarte";
import { TestimonialsBand } from "@/components/sections/TestimonialsBand";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata(
  "Autohaus Feldmeier in Kallmünz",
  "Neu- und Gebrauchtwagen, Werkstatt, HU/AU, Autogas, Finanzierung – zwei Standorte in Kallmünz und Hohenfels."
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <VehicleGrid />
      <ServicesGrid />
      <StorytellingBand />
      <StandorteKarte />
      <TestimonialsBand />
      <CTABand />
      <FAQ />
    </div>
  );
}

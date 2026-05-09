import { TestimonialsBand } from "@/components/sections/TestimonialsBand";
import { Star } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Bewertungen", "Erfahrungen unserer Kunden mit dem Autohaus Feldmeier.");

export default function BewertungenPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-white border-b border-border overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-black" />
            <span className="text-overline text-mute">Bewertungen</span>
            <div className="h-px w-8 bg-black" />
          </div>
          <div className="text-[112px] md:text-[140px] font-bold leading-none mb-3 tracking-tight">5,0</div>
          <div className="flex gap-1.5 text-primary mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-body-lg md:text-subtitle text-mute max-w-xl">
            100&nbsp;% Weiterempfehlung auf AutoScout24 — Stand Mai 2026.
          </p>
        </div>
      </section>
      <TestimonialsBand />
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

export function CTABand() {
  return (
    <section className="bg-primary text-black py-20 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <Briefcase size={20} strokeWidth={1.75} />
          <span className="text-overline">Karriere</span>
        </div>
        <h2 className="text-display-md md:text-display-lg mb-5 max-w-3xl">
          Werde Teil unseres Teams.
        </h2>
        <p className="text-body-lg mb-9 max-w-xl text-black/75">
          Wir suchen Verstärkung für Verkauf und Werkstatt — in einem familiären Betrieb mit kurzen Wegen und langer Tradition.
        </p>
        <Button
          asChild
          className="group bg-white text-black hover:bg-neutral-100 rounded-xs h-12 md:h-14 px-8 text-button-md font-bold transition-all hover:-translate-y-0.5 shadow-md shadow-black/10"
        >
          <Link href="/karriere" className="inline-flex items-center gap-2">
            Offene Stellen ansehen
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

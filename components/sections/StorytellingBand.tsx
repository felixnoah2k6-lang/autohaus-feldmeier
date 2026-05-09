import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function StorytellingBand() {
  const stats = [
    { value: "40+", label: "Jahre Erfahrung" },
    { value: "2", label: "Generationen" },
    { value: "1.000+", label: "Zufriedene Kunden" },
  ];

  return (
    <section className="bg-black text-white w-full flex flex-col md:flex-row min-h-[520px]">
      <div className="w-full md:w-1/2 relative h-[320px] md:h-auto overflow-hidden">
        <Image
          src="/images/werkstatt/diagnose.jpg"
          alt="Diagnose und Reparatur in der Meisterwerkstatt"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          quality={88}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden md:block" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-20 py-16 md:py-20">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-overline text-primary">Unsere Geschichte</span>
          </div>
          <h2 className="text-display-md md:text-display-lg mb-6 leading-[1.05]">
            Familie. Werkstatt.<br />
            <span className="text-primary">Vertrauen.</span>
          </h2>
          <p className="text-body-lg mb-8 text-white/75 max-w-md">
            Das Autohaus Feldmeier ist ein familiengeführter Betrieb in Kallmünz, gegründet 1984.
            Als Renault- und Dacia-Vertragspartner verkaufen wir Neu- und Gebrauchtwagen — in unserer
            markenoffenen Meisterwerkstatt reparieren wir Fahrzeuge aller Hersteller.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10 max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/20 pl-4">
                <div className="text-display-md text-primary leading-none mb-1">{s.value}</div>
                <div className="text-caption text-white/65 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <div>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black h-12 px-7 rounded-xs font-bold transition-all group"
            >
              <Link href="/ueber-uns" className="inline-flex items-center gap-2">
                Mehr über uns
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

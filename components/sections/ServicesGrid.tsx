import { ArrowRight, Wrench, Car, ShieldCheck, Fuel, Hammer, Euro } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export function ServicesGrid() {
  const tiles = [
    { title: "Werkstatt & Service", desc: "Reparaturen nach Herstellervorgaben für alle Marken.", icon: Wrench, href: "/service", color: "bg-primary text-black" },
    { title: "Neu- & Gebrauchtwagen", desc: "Renault & Dacia Vertragspartner.", icon: Car, href: "/fahrzeuge", color: "bg-black text-white" },
    { title: "HU / AU", desc: "TÜV und DEKRA direkt im Haus.", icon: ShieldCheck, href: "/service/hu-au", color: "bg-white text-black border border-border" },
    { title: "Autogas / LPG", desc: "Umrüstung und Wartung von Gasanlagen.", icon: Fuel, href: "/service/autogas-lpg", color: "bg-white text-black border border-border" },
    { title: "Karosserie & Autoglas", desc: "Unfallinstandsetzung und Smart-Repair.", icon: Hammer, href: "/service/karosserie-autoglas", color: "bg-white text-black border border-border" },
    { title: "Finanzierung & Leasing", desc: "Maßgeschneiderte Konditionen.", icon: Euro, href: "/finanzierung-leasing", color: "bg-black text-white" }
  ];

  return (
    <section className="bg-surface-soft py-20 md:py-28 px-4 md:px-6 border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-black" />
              <span className="text-overline text-mute">Unsere Leistungen</span>
              <div className="h-px w-8 bg-black" />
            </div>
            <h2 className="text-display-md md:text-display-lg max-w-2xl">
              Alles rund ums Auto. Aus einer Hand.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border bg-white">
          {tiles.map((tile, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link
                href={tile.href}
                className={`aspect-square sm:aspect-[4/3] lg:aspect-square p-7 md:p-8 flex flex-col ${tile.color} group relative transition-all hover:-translate-y-1 z-10 hover:shadow-xl hover:z-20`}
              >
                <tile.icon size={32} strokeWidth={1.5} className="mb-6" />
                <h3 className="text-heading-lg mb-3">{tile.title}</h3>
                <p className="text-body-md opacity-80 leading-snug">{tile.desc}</p>
                <ArrowRight className="mt-auto self-end transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

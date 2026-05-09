import { vehicles } from "@/lib/vehicles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function VehicleGrid() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-black" />
                <span className="text-overline text-mute">Sofort verfügbar</span>
              </div>
              <h2 className="text-display-md md:text-display-lg max-w-2xl">
                Aktuelle Fahrzeug-Highlights.
              </h2>
              <p className="text-body-lg text-mute mt-4 max-w-xl">
                Eine Auswahl unserer sofort verfügbaren Neu- und Gebrauchtwagen in Kallmünz.
              </p>
            </div>
            <Link
              href="/fahrzeuge"
              className="hidden md:inline-flex items-center gap-2 text-button-md font-bold hover:gap-3 transition-all underline underline-offset-4"
            >
              Alle Fahrzeuge ansehen
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {vehicles.map((vehicle, i) => (
            <FadeIn key={vehicle.slug} delay={i * 0.08}>
              <Link
                href={`/fahrzeuge/${vehicle.slug}`}
                className="group flex flex-col h-full border border-border bg-white hover:border-black transition-all hover:shadow-xl rounded-xs overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {vehicle.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-black px-3 py-1 text-overline rounded-xs">
                      {vehicle.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <h3 className="text-heading-sm mb-1.5">
                    {vehicle.brand} {vehicle.model}
                  </h3>
                  <p className="text-body-sm text-mute mb-5">
                    {vehicle.condition} · {vehicle.fuel} · {vehicle.transmission}
                  </p>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
                    <span className="text-heading-md font-bold">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                        maximumFractionDigits: 0,
                      }).format(vehicle.price)}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-mute group-hover:text-black group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Button asChild variant="outline" className="w-full h-12 rounded-xs border-black text-black">
            <Link href="/fahrzeuge">Alle Fahrzeuge ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

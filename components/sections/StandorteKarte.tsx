import { locations } from "@/lib/locations";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

export function StandorteKarte() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-6 border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-black" />
            <span className="text-overline text-mute">Unsere Standorte</span>
            <div className="h-px w-8 bg-black" />
          </div>
          <h2 className="text-display-md md:text-display-lg max-w-2xl">
            Zwei Standorte in der Oberpfalz.
          </h2>
          <p className="text-body-lg text-mute mt-4 max-w-xl">
            Besuchen Sie uns in Kallmünz oder Hohenfels — wir freuen uns auf Sie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="group relative bg-surface-soft border border-border hover:border-black transition-all hover:shadow-xl overflow-hidden flex flex-col"
            >
              <Link
                href={`/standorte/${loc.id}`}
                className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Details zu ${loc.name} ansehen`}
              >
                <span className="sr-only">Details ansehen</span>
              </Link>

              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`Außenansicht ${loc.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  quality={88}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 bg-primary text-black text-overline px-3 py-1.5">
                  {loc.id === "kallmuenz" ? "Hauptsitz" : "Niederlassung"}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-5 flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-heading-lg">{loc.name}</h3>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-mute group-hover:text-black group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                <div className="space-y-3 text-body-md">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-1 shrink-0 text-mute" />
                    <div>
                      <p>{loc.address}</p>
                      <p>{loc.zip} {loc.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-1 shrink-0 text-mute" />
                    <a
                      href={`tel:${loc.phone.replace(/[\s/]/g, "")}`}
                      className="relative z-20 hover:underline underline-offset-4"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-1 shrink-0 text-mute" />
                    <p className="text-mute">{loc.hours.allgemein}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60 mt-auto">
                  <a
                    href={loc.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 inline-flex items-center justify-center border border-black text-black hover:bg-black hover:text-white h-11 px-5 rounded-xs text-button-md transition-colors"
                  >
                    Route planen
                  </a>
                  <span className="text-button-md text-black underline-offset-4 group-hover:underline px-2">
                    Standort-Details →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

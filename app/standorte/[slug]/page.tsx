import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getMetadata } from "@/lib/seo";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const loc = locations.find(l => l.id === params.slug);
  if (!loc) return { title: "Nicht gefunden" };
  return getMetadata(`Standort ${loc.name}`, `Öffnungszeiten und Anfahrt für das Autohaus Feldmeier in ${loc.city}.`);
}

export default async function StandortDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const loc = locations.find(l => l.id === params.slug);
  if (!loc) notFound();

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image src={loc.image} alt={loc.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center px-4 md:px-6">
          <div className="container mx-auto">
            <h1 className="text-display-xl text-white">{loc.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-display-md mb-8">Kontakt & Zeiten</h2>
            
            <div className="mb-8">
              <h3 className="text-heading-md mb-2">Adresse</h3>
              <p className="text-body-lg text-mute">{loc.address}<br />{loc.zip} {loc.city}</p>
              <div className="mt-4 flex flex-col gap-2 text-body-md text-mute">
                <p><strong>Tel:</strong> {loc.phone}</p>
                <p><strong>Fax:</strong> {loc.fax}</p>
                <p><strong>E-Mail:</strong> {loc.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md mb-4">Öffnungszeiten</h3>
              <div className="space-y-6">
                {loc.hours.verkauf && (
                  <div>
                    <h4 className="font-bold border-b border-border pb-1 mb-2">Verkauf</h4>
                    <ul className="text-body-sm text-mute space-y-1">
                      {loc.hours.verkauf.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </div>
                )}
                {loc.hours.werkstatt && (
                  <div>
                    <h4 className="font-bold border-b border-border pb-1 mb-2">Werkstatt</h4>
                    <ul className="text-body-sm text-mute space-y-1">
                      {loc.hours.werkstatt.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative aspect-[4/3] bg-neutral-100 mb-6 border border-border">
              <Image src={loc.mapImage} alt={`Karte ${loc.city}`} fill className="object-cover" />
            </div>
            <Button asChild variant="dark" className="rounded-xs h-14 text-button-md font-bold w-full">
              <a href={loc.googleMapsLink} target="_blank" rel="noopener noreferrer">Route planen</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.id }));
}

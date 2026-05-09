import { vehicles } from "@/lib/vehicles";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMetadata } from "@/lib/seo";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const vehicle = vehicles.find(v => v.slug === params.slug);
  if (!vehicle) return { title: "Nicht gefunden" };
  return getMetadata(`${vehicle.brand} ${vehicle.model} - ${vehicle.condition}`, `Fahrzeug ansehen beim Autohaus Feldmeier.`);
}

export default async function VehicleDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const vehicle = vehicles.find(v => v.slug === params.slug);
  if (!vehicle) notFound();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-2/3">
        <div className="relative aspect-[16/10] bg-neutral-100 mb-6">
          <Image src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} fill className="object-cover" />
        </div>
        {/* Placeholder for Gallery thumbnails */}
      </div>
      
      <div className="w-full lg:w-1/3 flex flex-col">
        <h1 className="text-display-lg mb-2">{vehicle.brand} {vehicle.model}</h1>
        <p className="text-subtitle text-mute mb-8">{vehicle.condition} · {vehicle.location}</p>
        
        <div className="text-display-md font-bold mb-1">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(vehicle.price)}</div>
        {vehicle.priceIncludesVAT && <div className="text-caption text-mute mb-8">inkl. MwSt.</div>}

        <div className="flex flex-col gap-4 mb-12">
          <Button className="w-full bg-primary text-black hover:bg-primary-deep h-14 rounded-xs text-button-md font-bold">Jetzt anfragen</Button>
          <Button variant="outline" className="w-full border-black text-black hover:bg-neutral-50 h-14 rounded-xs text-button-md font-bold">Probefahrt vereinbaren</Button>
          <Link href="/finanzierung-leasing" className="text-center text-body-sm font-bold underline underline-offset-4 mt-2">Finanzierung berechnen</Link>
        </div>

        <h3 className="text-heading-sm mb-4 border-b border-border pb-2">Fahrzeugdaten</h3>
        <table className="w-full text-body-sm">
          <tbody>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Marke</td><td className="py-3 font-semibold text-right">{vehicle.brand}</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Modell</td><td className="py-3 font-semibold text-right">{vehicle.model}</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Zustand</td><td className="py-3 font-semibold text-right">{vehicle.condition}</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Kilometerstand</td><td className="py-3 font-semibold text-right">{vehicle.mileage.toLocaleString()} km</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Erstzulassung</td><td className="py-3 font-semibold text-right">{vehicle.firstRegistration || '-'}</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Leistung</td><td className="py-3 font-semibold text-right">{vehicle.power.kw} kW ({vehicle.power.ps} PS)</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Kraftstoff</td><td className="py-3 font-semibold text-right">{vehicle.fuel}</td></tr>
            <tr className="border-b border-hairline"><td className="py-3 text-mute">Getriebe</td><td className="py-3 font-semibold text-right">{vehicle.transmission}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

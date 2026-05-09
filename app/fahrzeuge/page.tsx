import { vehicles } from "@/lib/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Fahrzeuge in Kallmünz", "Aktuelle Neu- und Gebrauchtwagen mit Preis, Daten und schneller Anfrage beim Autohaus Feldmeier.");

export default function FahrzeugePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        eyebrow="Aktueller Bestand"
        title="Fahrzeuge"
        subtitle="Renault & Dacia · Neu- und Gebrauchtwagen, sofort verfügbar in Kallmünz."
      />

      {/* Subnav / Filter (simplified) */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-border py-4 px-4 md:px-6">
        <div className="container mx-auto flex gap-2 overflow-x-auto snap-x hide-scrollbar">
          {['Alle', 'Neuwagen', 'Gebrauchtwagen', 'Elektro', 'Benzin', 'Diesel'].map(f => (
            <button key={f} className="snap-start shrink-0 bg-white text-black border border-black rounded-pill px-4 h-9 text-[13px] font-semibold hover:bg-black hover:text-white transition">
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="py-20 px-4 md:px-6 bg-surface-soft">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map(v => <VehicleCard key={v.slug} vehicle={v} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

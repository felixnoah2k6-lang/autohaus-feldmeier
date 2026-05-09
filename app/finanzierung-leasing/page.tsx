import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { Euro } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Finanzierung und Leasing", "Fahrzeugfinanzierung und Leasing mit persönlicher Beratung für Neu- und Gebrauchtwagen.");

export default function FinanzierungPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Euro}
        eyebrow="Finanzieren mit Plan"
        title="Finanzierung & Leasing."
        subtitle="Maßgeschneiderte Konditionen für Ihr Wunschfahrzeug — fair, transparent und persönlich beraten."
      />
      
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-display-md mb-8">Einfach. Sicher. Transparent.</h2>
          <p className="text-body-lg text-mute mb-12 max-w-2xl mx-auto">Wir beraten Sie gerne zu den optimalen Finanzierungs- oder Leasingangeboten unserer Partnerbanken.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="border border-border p-8 bg-surface-soft">
              <h3 className="text-heading-lg mb-4">Finanzierung</h3>
              <ul className="list-disc list-inside text-body-md text-mute space-y-2 mb-8">
                <li>Feste monatliche Raten</li>
                <li>Laufzeiten von 12 bis 96 Monaten</li>
                <li>Auch ohne Anzahlung möglich</li>
                <li>Fahrzeug gehört am Ende Ihnen</li>
              </ul>
            </div>
            <div className="border border-border p-8 bg-surface-soft">
              <h3 className="text-heading-lg mb-4">Leasing</h3>
              <ul className="list-disc list-inside text-body-md text-mute space-y-2 mb-8">
                <li>Niedrige monatliche Raten</li>
                <li>Fahrzeugwechsel nach Ende der Laufzeit</li>
                <li>Kein Restwertrisiko (Kilometerleasing)</li>
                <li>Ideal auch für Gewerbekunden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

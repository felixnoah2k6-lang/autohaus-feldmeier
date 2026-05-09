import { getMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { ShieldCheck, Clock, Phone } from "lucide-react";

export const metadata = getMetadata(
  "HU / AU im Haus – TÜV & DEKRA",
  "Hauptuntersuchung und Abgasuntersuchung direkt bei Autohaus Feldmeier in Kallmünz – dienstags bis freitags mit TÜV oder DEKRA."
);

const termine = [
  { tag: "Dienstag", uhrzeit: "13:00 Uhr" },
  { tag: "Mittwoch", uhrzeit: "10:00 Uhr" },
  { tag: "Donnerstag", uhrzeit: "10:00 Uhr" },
  { tag: "Freitag", uhrzeit: "09:00 Uhr" },
];

export default function HuAuPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={ShieldCheck}
        eyebrow="Service-Leistung"
        title="HU / AU im Haus."
        subtitle="TÜV und DEKRA kommen direkt zu uns — vier Mal pro Woche. Für alle Marken und Hersteller."
      />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-display-md mb-6">So funktioniert es</h2>
              <p className="text-body-lg text-mute mb-4">
                Als Familienunternehmen sind wir seit 1984 Ihr Ansprechpartner in Kallmünz und Hohenfels. Jede Woche kommen vier Mal Mitarbeiter des TÜV oder der DEKRA direkt in unsere Werkstatt, um für die Fahrzeuge unserer Kunden die Hauptuntersuchung (HU) sowie die Abgasuntersuchung (AU) durchzuführen.
              </p>
              <p className="text-body-lg text-mute">
                Finden die Prüfingenieure Mängel an Ihrem Fahrzeug, können wir diese direkt für Sie beheben – kurze Wege, kein Stress.
              </p>
            </div>

            <div>
              <h2 className="text-display-md mb-6 flex items-center gap-3">
                <Clock size={28} className="text-primary" />
                Prüftermine
              </h2>
              <div className="space-y-3">
                {termine.map((t) => (
                  <div key={t.tag} className="flex justify-between items-center border border-border p-4 bg-surface-soft">
                    <span className="text-heading-sm font-bold">{t.tag}</span>
                    <span className="text-body-md text-mute">{t.uhrzeit}</span>
                  </div>
                ))}
              </div>
              <p className="text-body-sm text-mute mt-4">
                Melden Sie Ihr Fahrzeug bei uns an – egal welchen Herstellers.
              </p>
            </div>
          </div>

          <div className="bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-heading-lg mb-2">Termin vereinbaren</h3>
              <p className="text-body-md flex items-center gap-2">
                <Phone size={16} /> Kallmünz: 09473 / 268
              </p>
            </div>
            <Button asChild variant="dark" className="h-12 px-8 font-bold rounded-xs shrink-0">
              <Link href="/kontakt">Online-Anfrage</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

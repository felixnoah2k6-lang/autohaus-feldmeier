import { getMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Fuel, CheckCircle } from "lucide-react";

export const metadata = getMetadata(
  "Autogas / LPG – Umrüstung & Wartung",
  "Autogas LPG Umrüstung, Wartung und Fehlerdiagnose beim Autohaus Feldmeier in Kallmünz. Geschultes Team, TÜV-Abnahme inklusive."
);

const leistungen = [
  "Einbau von Gasanlagen (LPG/Autogas)",
  "Instandsetzung von Gasanlagen mit Fehlerdiagnose",
  "Wartung von Gasanlagen aller Art",
  "TÜV-Abnahme (GAP)",
  "Sicht- und Montageprüfung aller Komponenten",
  "Prüfung der Gasrohrleitungen und Kühlmittelleitungen auf Dichtheit",
  "Kundendienst für bestehende Gasanlagen",
];

export default function AutogasPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Fuel}
        eyebrow="Service-Leistung"
        title="Autogas / LPG."
        subtitle="Umrüstung, Wartung und Fehlerdiagnose — mit geschultem Team und TÜV-Abnahme direkt im Haus."
      />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-display-md mb-6">Was ist Autogas (LPG)?</h2>
              <p className="text-body-lg text-mute mb-4">
                Autogas bzw. LPG besteht aus Propan und Butan und ist ein Flüssiggas, das als kostengünstige Alternative zum herkömmlichen Kraftstoff eingesetzt wird. Die Umrüstung ist in den meisten Fällen einfach und erfordert nur einen Eingriff in einer spezialisierten Werkstatt.
              </p>
              <p className="text-body-lg text-mute mb-4">
                Der eingebaute Flüssiggastank ersetzt dabei nicht den vorhandenen Benzintank – Sie können jederzeit zwischen LPG und Benzin wählen (bivalenter Antrieb).
              </p>
              <p className="text-body-lg text-mute">
                Die Preise für Autokraftstoff steigen seit Jahren. Mit Autogas können Sie erheblich sparen – bei gleichbleibender Fahrleistung.
              </p>
            </div>

            <div>
              <h2 className="text-display-md mb-6">Unsere Leistungen</h2>
              <ul className="space-y-3">
                {leistungen.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-surface-soft border border-border p-8 md:p-12 mb-8">
            <h3 className="text-heading-lg mb-4">Gasanlagen-Kundendienst</h3>
            <p className="text-body-lg text-mute">
              Unsere qualifizierten Mitarbeiter wurden speziell auf den Umbau und die Wartung von Autogasanlagen geschult. Informieren Sie sich gerne unverbindlich beim Autohaus Feldmeier in Kallmünz.
            </p>
          </div>

          <div className="bg-primary p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-heading-lg mb-2">Jetzt beraten lassen</h3>
              <p className="text-body-md">Kallmünz: 09473 / 268</p>
            </div>
            <Button asChild variant="dark" className="h-12 px-8 font-bold rounded-xs shrink-0">
              <Link href="/kontakt">Anfrage stellen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

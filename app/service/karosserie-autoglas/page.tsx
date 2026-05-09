import { getMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Hammer, Shield, ClipboardCheck } from "lucide-react";

export const metadata = getMetadata("Karosserie & Autoglas", "Unfallinstandsetzung, Glasschäden und Versicherungsabwicklung beim Autohaus Feldmeier.");

export default function KarosseriePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Hammer}
        eyebrow="Service-Leistung"
        title="Karosserie & Autoglas."
        subtitle="Professionelle Unfallinstandsetzung und Glasservice für alle Fahrzeugmarken."
      />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-display-md mb-6">Unfallinstandsetzung</h2>
              <p className="text-body-lg text-mute mb-4">
                Ein Unfall ist ein anstrengendes Ereignis. Vertrauen Sie sich uns vollkommen an. Wir kümmern uns um den Gutachter, wickeln den Schaden mit der Versicherung ab und bringen Ihr Fahrzeug – falls möglich – wieder sicher auf die Straße.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <Shield size={24} className="text-primary shrink-0" />
                  <div>
                    <h3 className="text-heading-sm font-bold">Vollständige Abwicklung</h3>
                    <p className="text-body-sm text-mute">Wir übernehmen die Kommunikation mit Versicherungen und Gutachtern.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardCheck size={24} className="text-primary shrink-0" />
                  <div>
                    <h3 className="text-heading-sm font-bold">Originalteile</h3>
                    <p className="text-body-sm text-mute">Wir verwenden hochwertige Ersatzteile für maximale Sicherheit.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-soft p-8 border border-border">
              <h2 className="text-heading-lg mb-6">Autoglas-Service</h2>
              <p className="text-body-md text-mute mb-6">
                Ob Steinschlag oder Riss in der Scheibe: Wir prüfen, ob eine Reparatur möglich ist oder ob die Scheibe getauscht werden muss.
              </p>
              <ul className="space-y-2 text-body-sm text-mute mb-8">
                <li>• Steinschlagreparatur</li>
                <li>• Scheibenaustausch in Erstausrüsterqualität</li>
                <li>• Abrechnung direkt mit Ihrer Teilkasko</li>
              </ul>
              <Button asChild variant="dark" className="w-full font-bold h-12 rounded-xs">
                <Link href="/kontakt">Schaden melden</Link>
              </Button>
            </div>
          </div>

          <div className="bg-primary p-8 md:p-12 text-center">
            <h2 className="text-heading-lg mb-4 text-black">Haben Sie einen Glasschaden oder Unfall?</h2>
            <p className="text-body-lg mb-8 text-black opacity-80">Rufen Sie uns direkt an oder senden Sie uns eine Nachricht.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="dark" className="h-12 px-8 font-bold rounded-xs">
                <Link href="tel:+499473268">Kallmünz: 09473 / 268</Link>
              </Button>
              <Button asChild variant="dark" className="h-12 px-8 font-bold rounded-xs">
                <Link href="tel:+499472907293">Hohenfels: 09472 / 907293</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

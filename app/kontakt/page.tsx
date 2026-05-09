import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { getMetadata } from "@/lib/seo";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = getMetadata("Kontakt", "Öffnungszeiten, Telefonnummern, Standorte, Karten, Rückruf und Anfrageformulare für Verkauf und Service.");

export default function KontaktPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Mail}
        eyebrow="Sprechen Sie uns an"
        title="Kontakt."
        subtitle="Wir sind für Sie da — online, telefonisch oder vor Ort an einem unserer beiden Standorte."
      />

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-display-md mb-8">Schreiben Sie uns</h2>
            {/* Placeholder Form */}
            <form className="space-y-4">
              <select className="w-full h-12 px-4 border border-border rounded-xs bg-white">
                <option>Anliegen wählen...</option>
                <option>Verkauf</option>
                <option>Service</option>
                <option>Sonstiges</option>
              </select>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full h-12 px-4 border border-border rounded-xs" required />
                <input type="email" placeholder="E-Mail" className="w-full h-12 px-4 border border-border rounded-xs" required />
              </div>
              <input type="tel" placeholder="Telefonnummer" className="w-full h-12 px-4 border border-border rounded-xs" required />
              <textarea placeholder="Ihre Nachricht" className="w-full p-4 border border-border rounded-xs min-h-[150px]"></textarea>
              <div className="flex items-center gap-2 text-body-sm text-mute">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">Ich stimme der Datenschutzerklärung zu.</label>
              </div>
              <Button type="submit" className="bg-primary text-black hover:bg-primary-deep rounded-xs h-12 px-8 font-bold w-full md:w-auto">Senden</Button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="bg-surface-soft p-8 border border-border">
              <h3 className="text-heading-lg mb-4">Hauptsitz Kallmünz</h3>
              <div className="text-body-md text-mute space-y-4">
                <p className="flex items-center gap-2"><MapPin size={18} /> Dinauer Straße 4, 93183 Kallmünz</p>
                <p className="flex items-center gap-2"><Phone size={18} /> 09473 / 268</p>
                <p className="flex items-center gap-2"><Mail size={18} /> info@autohaus-feldmeier.de</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-black mb-1">Öffnungszeiten:</p>
                  <p>Montag – Freitag: 07:30 – 18:00 Uhr</p>
                  <p>Samstag: 08:00 – 12:30 Uhr</p>
                  <p className="text-xs mt-1 italic">(oder nach Vereinbarung)</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-soft p-8 border border-border">
              <h3 className="text-heading-lg mb-4">Niederlassung Hohenfels</h3>
              <div className="text-body-md text-mute space-y-4">
                <p className="flex items-center gap-2"><MapPin size={18} /> Parsberger Straße 31, 92366 Hohenfels</p>
                <p className="flex items-center gap-2"><Phone size={18} /> 09472 / 907293</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-black mb-1">Öffnungszeiten:</p>
                  <p>Montag – Freitag: 08:00 – 17:00 Uhr</p>
                  <p className="text-xs mt-1 italic">(oder nach Vereinbarung)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

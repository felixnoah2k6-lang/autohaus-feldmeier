import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Über uns", "Familiengeführtes Autohaus Feldmeier in Kallmünz seit 1984.");

export default function UeberUnsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Heart}
        eyebrow="Über uns"
        title="Familie. Werkstatt. Vertrauen."
        subtitle="Seit 1984 in Kallmünz — seit 2 Generationen für unsere Kunden da."
      />

      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <FadeIn className="w-full lg:w-1/2">
            <div className="relative aspect-square bg-neutral-100 overflow-hidden">
              <Image
                src="/images/werkstatt/serviceannahme.jpg"
                alt="Serviceannahme"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-black" />
              <span className="text-overline text-mute">Unsere Geschichte</span>
            </div>
            <h2 className="text-display-md md:text-display-lg mb-6">Vom Lehrling zum Familienbetrieb.</h2>
            <div className="text-body-lg text-mute space-y-4">
              <p>Das Autohaus Feldmeier ist ein familiengeführter Betrieb in Kallmünz, gegründet 1984 von Wolfgang Feldmeier sen. Heute leiten Wolfgang Feldmeier sen. und Wolfgang Feldmeier jun. das Unternehmen gemeinsam – mit zwei Standorten in Kallmünz und Hohenfels und einem Team aus Verkäufern, Meistern, Gesellen und Auszubildenden.</p>
              <p>Als Renault- und Dacia-Vertragspartner verkaufen wir Neu- und Gebrauchtwagen, in unserer markenoffenen Werkstatt reparieren wir Fahrzeuge aller Hersteller.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-surface-soft px-4 md:px-6">
        <div className="container mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-black" />
                <span className="text-overline text-mute">Was uns auszeichnet</span>
                <div className="h-px w-8 bg-black" />
              </div>
              <h2 className="text-display-md">Unsere Werte.</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Persönlich", text: "Wir kennen unsere Kunden und deren Fahrzeuge." },
              { title: "Markenoffen", text: "Reparatur und Service für alle Fabrikate." },
              { title: "Technisch fundiert", text: "Stetige Weiterbildung und moderne Diagnose." },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="flex flex-col items-center">
                  <div className="h-px w-10 bg-primary mb-4" />
                  <h3 className="text-heading-lg mb-2">{v.title}</h3>
                  <p className="text-mute">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
          <div className="mt-20 bg-white p-8 md:p-12 border border-border text-left">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-2/3">
                <h3 className="text-display-sm mb-4">Service für ältere Modelle: Motrio</h3>
                <p className="text-body-md text-mute mb-4">
                  Nie war es günstiger, ältere Fahrzeuge sicher und fahrtüchtig zu halten. Mit der <strong>Motrio Produktpalette</strong> bieten wir Ihnen eine zeitwertgerechte und qualitativ hochwertige Alternative für die Reparatur und Wartung von Fahrzeugen, die bereits einige Jahre auf den Straßen unterwegs sind.
                </p>
                <p className="text-body-md text-mute font-bold">
                  Qualität muss nicht teuer sein – sprechen Sie uns auf unsere Motrio-Angebote an.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-neutral-100 rounded-full flex items-center justify-center border-4 border-primary hover:scale-105 transition-transform duration-300">
                  <span className="text-display-md font-bold text-primary-deep">MOTRIO</span>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

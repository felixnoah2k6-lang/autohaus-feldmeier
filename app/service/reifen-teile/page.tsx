import { getMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import Link from "next/link";
import { Disc } from "lucide-react";

export const metadata = getMetadata(
  "Reifen & Teile",
  "Reifenservice, Einlagerung und Originalteile beim Autohaus Feldmeier in Kallmünz."
);

export default function ReifenTeilePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Disc}
        eyebrow="Service-Leistung"
        title="Reifen & Teile."
        subtitle="Reifenservice, Einlagerung und Originalteile für alle Marken — schnell, sauber und fair kalkuliert."
      />
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-body-lg text-mute mb-8">
            Wir wechseln, wuchten und lagern Ihre Reifen — ob Sommer-, Winter- oder
            Ganzjahresbereifung. Originalteile bestellen wir auf Wunsch direkt
            vom Hersteller. Sprechen Sie uns einfach an.
          </p>
          <Button asChild className="bg-primary text-black hover:bg-primary-deep h-12 px-8 font-bold rounded-xs">
            <Link href="/kontakt">Termin vereinbaren</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import { getMetadata } from "@/lib/seo";
import { FileText } from "lucide-react";

export const metadata = getMetadata("Allgemeine Geschäftsbedingungen", "AGB der Autohaus Feldmeier GmbH.");

export default function AGBPage() {
  const agbs = [
    { title: "KFZ-Reparaturbedingungen", desc: "Gültig für alle Werkstattleistungen und Reparaturen." },
    { title: "Neuwagenverkaufsbedingungen", desc: "Gültig für den Kauf von Neufahrzeugen der Marken Renault und Dacia." },
    { title: "Gebrauchtwagenverkaufsbedingungen", desc: "Gültig für den Kauf von gebrauchten Fahrzeugen." },
    { title: "Teileverkaufsbedingungen", desc: "Gültig für den Verkauf von Ersatzteilen und Zubehör." }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-display-md mb-8">Allgemeine Geschäftsbedingungen</h1>
      <p className="text-body-lg text-mute mb-12">
        Hier finden Sie unsere Geschäftsbedingungen für die verschiedenen Geschäftsbereiche. Diese liegen auch in unseren Geschäftsräumen in Kallmünz und Hohenfels zur Einsicht aus.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agbs.map((agb, i) => (
          <div key={i} className="border border-border p-8 bg-surface-soft hover:border-primary transition-colors flex flex-col">
            <FileText size={32} className="text-primary mb-4" />
            <h3 className="text-heading-md mb-2 font-bold">{agb.title}</h3>
            <p className="text-body-sm text-mute flex-grow">{agb.desc}</p>
            <p className="text-xs mt-6 text-primary-deep font-bold uppercase tracking-wider">PDF im Autohaus erhältlich</p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 bg-black text-white">
        <h2 className="text-heading-lg mb-4">Haben Sie Fragen?</h2>
        <p className="text-body-md opacity-80 mb-0">
          Gerne erläutern wir Ihnen unsere Bedingungen auch im persönlichen Gespräch vor Ort.
        </p>
      </div>
    </div>
  );
}

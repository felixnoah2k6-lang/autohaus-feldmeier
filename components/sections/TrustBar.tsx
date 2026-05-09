import { Calendar, MapPin, Wrench, ShieldCheck } from "lucide-react";

export function TrustBar() {
  const items = [
    { icon: Calendar, headline: "1984", label: "Gegründet", text: "Familienbetrieb in 2. Generation" },
    { icon: MapPin, headline: "2", label: "Standorte", text: "Kallmünz & Hohenfels" },
    { icon: Wrench, headline: "Alle", label: "Marken", text: "Markenoffene Meisterwerkstatt" },
    { icon: ShieldCheck, headline: "HU/AU", label: "im Haus", text: "TÜV & DEKRA Prüfstelle" },
  ];

  return (
    <section className="bg-white py-14 md:py-16 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center md:border-r md:border-border md:last:border-r-0 md:px-4"
            >
              <item.icon size={28} className="mb-4 text-mute" strokeWidth={1.5} />
              <div className="text-display-md leading-none mb-1">{item.headline}</div>
              <div className="text-overline text-mute mb-3">{item.label}</div>
              <div className="text-body-sm text-mute max-w-[180px]">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

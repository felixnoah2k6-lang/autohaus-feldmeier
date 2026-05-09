import { StandorteKarte } from "@/components/sections/StandorteKarte";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapPin } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Standorte", "Unsere Autohäuser in Kallmünz und Hohenfels.");

export default function StandortePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={MapPin}
        eyebrow="Unsere Standorte"
        title="Zwei Standorte. Ein Team."
        subtitle="Vor Ort in der Region für Sie da — in Kallmünz und Hohenfels."
        align="center"
      />
      <StandorteKarte />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VehicleCard({ vehicle }: { vehicle: any }) {
  return (
    <Link href={`/fahrzeuge/${vehicle.slug}`} className="group block bg-white border border-border transition-transform hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full bg-neutral-100">
        <Image src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} fill className="object-cover" />
        {vehicle.badge && (
          <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-pill text-caption font-bold">
            {vehicle.badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-heading-md mb-1">{vehicle.brand} {vehicle.model}</h3>
        <p className="text-body-sm text-mute mb-4">{vehicle.condition} · {vehicle.fuel} · {vehicle.transmission}</p>
        <hr className="border-border mb-4" />
        <div className="flex justify-between items-center">
          <div>
            <div className="text-heading-md font-bold">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(vehicle.price)}</div>
            {vehicle.priceIncludesVAT && <div className="text-caption text-mute">inkl. MwSt.</div>}
          </div>
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

import { team } from "@/lib/team";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/fade-in";
import { Users } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Unser Team", "Lernen Sie das Team vom Autohaus Feldmeier in Kallmünz kennen.");

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Users}
        eyebrow="Die Menschen hinter Feldmeier"
        title="Unser Team."
        subtitle="Meister, Verkäufer und Auszubildende — gemeinsam für Sie da."
      />

      <section className="py-20 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={(i % 4) * 0.08}>
                <div className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden bg-neutral-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-heading-md group-hover:translate-x-0.5 transition-transform">
                    {member.name}
                  </h3>
                  <p className="text-body-sm text-mute">{member.role}</p>
                  {member.years && (
                    <p className="text-caption text-primary-deep font-bold mt-1">
                      Seit {member.years} Jahren dabei
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

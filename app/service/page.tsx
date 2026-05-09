import { services } from "@/lib/services";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/fade-in";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Werkstatt in Kallmünz und Hohenfels", "Reparaturen aller Marken, Inspektion, HU/AU, Unfallinstandsetzung, Reifenservice und persönliche Beratung.");

export default function ServicePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Wrench}
        eyebrow="Werkstatt & Service"
        title="Alles rund ums Auto."
        subtitle="Reparaturen aller Marken, HU/AU im Haus und Inspektion nach Herstellervorgabe — in unserer Meisterwerkstatt."
      />

      <section className="py-20 px-4 md:px-6 bg-surface-soft">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.08}>
                <Link
                  href={s.href}
                  className="relative h-full bg-white p-8 border border-border hover:border-black flex flex-col group transition-all hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                  <h3 className="text-heading-md mb-3 group-hover:translate-x-0.5 transition-transform">
                    {s.title}
                  </h3>
                  <p className="text-body-sm text-mute mb-6 flex-grow">{s.description}</p>
                  <div className="flex items-center text-body-sm font-bold mt-auto group-hover:text-primary-deep">
                    Mehr erfahren
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

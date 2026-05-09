import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeIn } from "@/components/ui/fade-in";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Karriere", "Werden Sie Teil unseres Teams im Autohaus Feldmeier.");

const jobs = [
  {
    title: "Automobilverkäufer/in",
    location: "Kallmünz",
    type: "Vollzeit",
    description: "Beratung und Verkauf von Neu- und Gebrauchtwagen unserer Marken Renault und Dacia.",
  },
  {
    title: "Kfz-Mechatroniker/in",
    location: "Kallmünz",
    type: "Vollzeit",
    description: "Wartung, Diagnose und Reparatur von Fahrzeugen aller Marken in unserer Meisterwerkstatt.",
  },
  {
    title: "Auszubildende/r Kfz-Mechatronik",
    location: "Kallmünz",
    type: "Ausbildung ab 2026",
    description: "Starten Sie Ihre Karriere mit einer fundierten Ausbildung in einem familiären Betrieb.",
  },
];

const benefits = [
  { title: "Familiärer Betrieb", text: "Kurze Wege, persönliche Atmosphäre, langjähriges Team." },
  { title: "Faire Bezahlung", text: "Tarifgerecht, mit Urlaubs- und Weihnachtsgeld." },
  { title: "Weiterbildung", text: "Regelmäßige Schulungen bei Renault, Dacia und Motrio." },
];

export default function KarrierePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Briefcase}
        eyebrow="Karriere"
        title="Werde Teil unseres Teams."
        subtitle="Wir suchen Verstärkung für Verkauf und Werkstatt — in einem familiären Betrieb mit kurzen Wegen und langer Tradition."
        align="center"
      />

      {/* Benefits */}
      <section className="py-16 md:py-20 px-4 md:px-6 border-b border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="flex flex-col gap-3">
                  <div className="h-px w-10 bg-primary mb-2" />
                  <h3 className="text-heading-md">{b.title}</h3>
                  <p className="text-body-md text-mute leading-relaxed">{b.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-surface-soft">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-black" />
                <span className="text-overline text-mute">Aktuelle Stellen</span>
                <div className="h-px w-8 bg-black" />
              </div>
              <h2 className="text-display-md md:text-display-lg">Offene Stellen.</h2>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <FadeIn key={job.title} delay={i * 0.08}>
                <a
                  href="#bewerbung"
                  className="group relative block bg-white border border-border hover:border-black transition-all p-6 md:p-8 hover:shadow-lg overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 text-overline text-primary-deep">
                        <Briefcase size={12} strokeWidth={2.5} />
                        <span>Stellenangebot</span>
                      </div>
                      <h3 className="text-heading-lg mb-2 group-hover:translate-x-1 transition-transform">
                        {job.title}
                      </h3>
                      <p className="text-body-md text-mute mb-4 max-w-xl">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-mute">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} className="text-mute" />
                          {job.location}
                        </span>
                        <span className="h-3 w-px bg-border hidden sm:block" />
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className="text-mute" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 inline-flex items-center gap-2 text-button-md font-bold pt-3 md:pt-0 md:pl-6">
                      Jetzt bewerben
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <p className="text-body-md text-mute text-center mt-10">
              Keine passende Stelle dabei?{" "}
              <a href="#bewerbung" className="font-bold text-black hover:text-primary-deep underline-offset-4 underline">
                Initiativbewerbung senden
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Application form */}
      <section id="bewerbung" className="py-20 md:py-24 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-black" />
                <span className="text-overline text-mute">Bewerbung</span>
                <div className="h-px w-8 bg-black" />
              </div>
              <h2 className="text-display-md">Kurzbewerbung.</h2>
              <p className="text-body-md text-mute mt-3 max-w-xl">
                Hinterlassen Sie uns Ihre Daten — wir melden uns umgehend bei Ihnen.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="space-y-4 bg-surface-soft border border-border p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 border border-border rounded-xs bg-white focus:outline-none focus:border-black transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full h-12 px-4 border border-border rounded-xs bg-white focus:outline-none focus:border-black transition-colors"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Telefonnummer"
                className="w-full h-12 px-4 border border-border rounded-xs bg-white focus:outline-none focus:border-black transition-colors"
                required
              />
              <textarea
                placeholder="Kurze Nachricht an uns"
                className="w-full p-4 border border-border rounded-xs min-h-[120px] bg-white focus:outline-none focus:border-black transition-colors"
              ></textarea>
              <Button
                type="submit"
                className="bg-primary text-black hover:bg-primary-deep rounded-xs h-12 px-8 font-bold w-full md:w-auto transition-all hover:-translate-y-0.5"
              >
                Bewerbung absenden
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import { testimonials } from "@/content/testimonials";
import { Quote, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export function TestimonialsBand() {
  return (
    <section className="bg-surface-soft py-20 md:py-28 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-black" />
              <span className="text-overline text-mute">Kundenstimmen</span>
              <div className="h-px w-8 bg-black" />
            </div>
            <h2 className="text-display-md md:text-display-lg max-w-2xl">
              Was unsere Kunden sagen.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative h-full bg-white border border-border p-8 flex flex-col hover:shadow-lg transition-shadow">
                <Quote
                  size={36}
                  className="text-primary mb-5 -ml-1"
                  strokeWidth={1.5}
                />
                <div className="flex gap-0.5 mb-5 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-body-lg mb-6 flex-grow leading-relaxed">
                  {t.text}
                </p>
                <div className="text-body-sm pt-5 border-t border-border">
                  <p className="font-bold text-black">{t.author}</p>
                  <p className="text-mute">{t.source}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

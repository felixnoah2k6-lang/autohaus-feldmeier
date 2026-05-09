import { faqs } from "@/content/faq";
import { FadeIn } from "@/components/ui/fade-in";
import { Plus } from "lucide-react";

export function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-black" />
              <span className="text-overline text-mute">FAQ</span>
              <div className="h-px w-8 bg-black" />
            </div>
            <h2 className="text-display-md md:text-display-lg">Häufige Fragen.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-border bg-surface-soft rounded-xs px-6 py-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-black transition-colors open:border-black"
              >
                <summary className="flex items-center justify-between gap-4 text-heading-sm font-bold outline-none list-none">
                  <span>{faq.question}</span>
                  <Plus
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="text-body-md text-mute mt-4 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

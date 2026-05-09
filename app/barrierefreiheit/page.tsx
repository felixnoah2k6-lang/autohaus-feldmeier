import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Barrierefreiheit", "Erklärung zur Barrierefreiheit der Autohaus Feldmeier GmbH.");

export default function BarrierefreiheitPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-display-md mb-8">Erklärung zur Barrierefreiheit</h1>
      
      <div className="prose prose-neutral max-w-none text-body-md text-mute space-y-6">
        <p>
          Die Autohaus Feldmeier GmbH bemüht sich, ihren Webauftritt in Einklang mit den einschlägigen Vorschriften zur Barrierefreiheit zugänglich zu machen. Wir orientieren uns dabei an den Richtlinien der Web Content Accessibility Guidelines (WCAG).
        </p>
        
        <h2 className="text-heading-sm font-bold text-black mt-8 mb-4">Stand der Vereinbarkeit</h2>
        <p>
          Diese Website ist weitgehend barrierefrei. Wir arbeiten kontinuierlich daran, die Nutzererfahrung für alle Besucher zu verbessern und die entsprechenden Standards für Barrierefreiheit anzuwenden.
        </p>

        <h2 className="text-heading-sm font-bold text-black mt-8 mb-4">Feedback und Kontakt</h2>
        <p>
          Sollten Ihnen Mängel in Bezug auf die barrierefreie Gestaltung unserer Website auffallen, können Sie uns gerne kontaktieren:
        </p>
        <p className="text-black">
          Autohaus Feldmeier GmbH<br />
          E-Mail: <a href="mailto:info@autohaus-feldmeier.de" className="underline hover:text-primary">info@autohaus-feldmeier.de</a><br />
          Telefon: 09473 / 268
        </p>
      </div>
    </div>
  );
}

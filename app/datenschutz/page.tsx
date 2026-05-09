import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Datenschutzerklärung", "Datenschutzerklärung der Autohaus Feldmeier GmbH.");

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-display-md mb-12">Datenschutzerklärung</h1>

      <div className="prose prose-neutral max-w-none space-y-8 text-body-md text-mute">
        <section>
          <h2 className="text-heading-md font-bold text-black mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-bold text-black mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-heading-md font-bold text-black mb-4">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p className="font-bold text-black">DomainFactory</p>
          <p>
            Anbieter ist die DomainFactory GmbH, c/o WeWork, Neuturmstraße 5, 80331 München. Wenn Sie unsere Website besuchen, erfasst DomainFactory verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>
        </section>

        <section>
          <h2 className="text-heading-md font-bold text-black mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-bold text-black mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="text-black">
            Wolfgang Feldmeier jun.<br />
            Dinauer Straße 4<br />
            93183 Kallmünz
          </p>
          <p>
            Telefon: 09473 / 268<br />
            E-Mail: info@autohaus-feldmeier.de
          </p>
        </section>

        <section>
          <h2 className="text-heading-md font-bold text-black mb-4">4. Datenerfassung auf dieser Website</h2>
          <h3 className="font-bold text-black mb-2">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>
          <h3 className="font-bold text-black mb-2 mt-4">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-heading-md font-bold text-black mb-4">5. Soziale Medien</h2>
          <h3 className="font-bold text-black mb-2">Facebook</h3>
          <p>
            Auf dieser Website sind Profile des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
          </p>
        </section>
        
        <p className="text-xs italic mt-12">
          Hinweis: Diese Datenschutzerklärung wurde auf Basis der Informationen der Bestandswebsite erstellt. Für eine rechtssichere Fassung empfehlen wir die Prüfung durch einen Fachanwalt.
        </p>
      </div>
    </div>
  );
}

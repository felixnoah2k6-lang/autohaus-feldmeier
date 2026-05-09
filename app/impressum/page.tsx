import { getMetadata } from "@/lib/seo";

export const metadata = getMetadata("Impressum", "Impressum der Autohaus Feldmeier GmbH in Kallmünz.");

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-display-md mb-12">Impressum</h1>

      <div className="space-y-10 text-body-md">
        <section>
          <h2 className="text-heading-md mb-4 font-bold">Angaben gemäß § 5 TMG</h2>
          <p>Autohaus Feldmeier GmbH</p>
          <p>Dinauer Straße 4</p>
          <p>93183 Kallmünz</p>
          <p className="mt-3">Handelsregister: HRB 8444</p>
          <p>Registergericht: Amtsgericht Regensburg</p>
          <p className="mt-3">Vertreten durch: Geschäftsführer Wolfgang Feldmeier sen. und Wolfgang Feldmeier jun.</p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Kontakt</h2>
          <p>Telefon: 09473 / 268</p>
          <p>Telefax: 09473 / 8728</p>
          <p>E-Mail: <a href="mailto:info@autohaus-feldmeier.de" className="underline hover:text-primary-deep">info@autohaus-feldmeier.de</a></p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE219284010</p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Redaktionell verantwortlich</h2>
          <p>Wolfgang Feldmeier jun.</p>
          <p>Dinauer Straße 4</p>
          <p>93183 Kallmünz</p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</h2>
          <p>Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:</p>
          <p className="mt-2">E-Mail: <a href="mailto:info@autohaus-feldmeier.de" className="underline hover:text-primary-deep">info@autohaus-feldmeier.de</a></p>
          <p>Telefon: +49 9473 268</p>
          <p className="mt-2">Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>
        </section>

        <section>
          <h2 className="text-heading-md mb-4 font-bold">Urheberrechte</h2>
          <p>Die auf dieser Internetseite eingesetzten Fotografien stammen entweder von der Autohaus Feldmeier GmbH oder von den jeweiligen Quellen. Sollten Sie sich in Ihren Urheberrechten verletzt fühlen, wenden Sie sich bitte direkt an uns.</p>
        </section>
      </div>
    </div>
  );
}

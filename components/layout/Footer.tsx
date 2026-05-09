import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 pb-10 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-14">
          <div className="lg:col-span-1">
            <h3 className="text-heading-sm mb-4 font-bold">Autohaus Feldmeier</h3>
            <p className="text-body-sm text-white/65 mb-5 leading-relaxed">
              Familiengeführtes Autohaus in Kallmünz seit 1984. Renault &amp; Dacia Vertragspartner und markenoffene Meisterwerkstatt.
            </p>
            <div className="space-y-2.5 text-body-sm text-white/75">
              <a href="tel:09473268" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary shrink-0" /> 09473 / 268
              </a>
              <a href="mailto:info@autohaus-feldmeier.de" className="flex items-center gap-2.5 hover:text-primary transition-colors break-all">
                <Mail size={14} className="text-primary shrink-0" /> info@autohaus-feldmeier.de
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-heading-sm mb-4 font-bold flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Kallmünz
            </h3>
            <address className="not-italic text-body-sm text-white/65 mb-3 leading-relaxed">
              Dinauer Straße 4<br />
              93183 Kallmünz
            </address>
            <div className="text-body-sm text-white/65 flex items-start gap-2">
              <Clock size={14} className="text-primary mt-1 shrink-0" />
              <span>Mo–Fr 07:30–18:00<br />Sa 08:00–12:30</span>
            </div>
          </div>

          <div>
            <h3 className="text-heading-sm mb-4 font-bold flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Hohenfels
            </h3>
            <address className="not-italic text-body-sm text-white/65 mb-3 leading-relaxed">
              Parsberger Straße 31<br />
              92366 Hohenfels
            </address>
            <div className="text-body-sm text-white/65 flex items-start gap-2">
              <Clock size={14} className="text-primary mt-1 shrink-0" />
              <span>Mo–Fr 08:00–17:00</span>
            </div>
          </div>

          <div>
            <h3 className="text-heading-sm mb-4 font-bold">Schnellzugriff</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-body-sm text-white/65">
              <li><Link href="/fahrzeuge" className="hover:text-primary transition-colors">Fahrzeuge</Link></li>
              <li><Link href="/service" className="hover:text-primary transition-colors">Service</Link></li>
              <li><Link href="/service/hu-au" className="hover:text-primary transition-colors">HU / AU</Link></li>
              <li><Link href="/finanzierung-leasing" className="hover:text-primary transition-colors">Finanzierung</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/karriere" className="hover:text-primary transition-colors">Karriere</Link></li>
              <li><Link href="/bewertungen" className="hover:text-primary transition-colors">Bewertungen</Link></li>
              <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-caption text-white/45">
          <p>&copy; {new Date().getFullYear()} Autohaus Feldmeier GmbH. Alle Rechte vorbehalten.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
            <li><Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
            <li><Link href="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
            <li><Link href="/barrierefreiheit" className="hover:text-primary transition-colors">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

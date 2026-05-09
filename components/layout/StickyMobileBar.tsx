import { Phone, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

export function StickyMobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-black border-t-[1px] border-primary z-50 flex items-center">
      <a href="tel:09473268" className="flex-1 flex justify-center items-center h-full text-white hover:bg-neutral-900 border-r border-white/20">
        <Phone size={20} />
        <span className="sr-only">Anrufen</span>
      </a>
      <a href="https://www.google.com/maps/dir/?api=1&destination=Dinauer+Stra%C3%9Fe+4,+93183+Kallm%C3%BCnz" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center h-full text-white hover:bg-neutral-900 border-r border-white/20">
        <MapPin size={20} />
        <span className="sr-only">Route</span>
      </a>
      <Link href="/kontakt" className="flex-1 flex justify-center items-center h-full text-white hover:bg-neutral-900">
        <Mail size={20} />
        <span className="sr-only">Anfrage</span>
      </Link>
    </div>
  );
}

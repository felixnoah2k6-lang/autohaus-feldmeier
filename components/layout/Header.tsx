import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background transition-shadow h-[80px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center">
          <Image src="/images/logo.png" alt="Autohaus Feldmeier" width={200} height={50} className="object-contain max-h-[50px] w-auto h-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/fahrzeuge" className="text-body-md hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Fahrzeuge</Link>
          <Link href="/service" className="text-body-md hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Service</Link>
          <Link href="/standorte" className="text-body-md hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Standorte</Link>
          <Link href="/ueber-uns" className="text-body-md hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Über uns</Link>
          <Link href="/kontakt" className="text-body-md hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Kontakt</Link>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:09473268" className="flex items-center gap-2 text-body-sm hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Phone size={16} /> 09473 / 268
          </a>
          <Button asChild className="rounded-xs">
            <Link href="/kontakt">Termin</Link>
          </Button>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="h-10 w-10" />}>
              <Menu size={24} />
              <span className="sr-only">Menü öffnen</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/fahrzeuge" className="text-heading-md">Fahrzeuge</Link>
                <Link href="/service" className="text-heading-md">Service</Link>
                <Link href="/standorte" className="text-heading-md">Standorte</Link>
                <Link href="/ueber-uns" className="text-heading-md">Über uns</Link>
                <Link href="/kontakt" className="text-heading-md">Kontakt</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

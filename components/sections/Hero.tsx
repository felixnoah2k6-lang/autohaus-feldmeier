"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[78svh] md:h-[calc(100vh-80px)] min-h-[560px] max-h-[860px] overflow-hidden bg-black">
      <Image
        src="/images/hero/aussenansicht-kallmuenz-v3.jpg"
        alt="Autohaus Feldmeier in Kallmünz – Außenansicht mit Burgruine im Hintergrund"
        fill
        sizes="100vw"
        quality={92}
        className="object-cover object-[60%_60%] md:object-[center_55%] scale-[1.03]"
        priority
      />

      {/* Cinematic gradients: stronger at bottom for text legibility, subtle left-side wash on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

      <motion.div
        className="relative z-10 h-full flex flex-col justify-end px-4 md:px-12 lg:px-20 pb-14 md:pb-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="h-px w-10 bg-primary" />
          <span className="text-overline text-primary">Renault & Dacia Vertragspartner</span>
        </motion.div>

        <h1 className="text-display-xl md:text-[64px] lg:text-[72px] mb-5 max-w-3xl text-white leading-[0.95] tracking-tight">
          Ihr Autohaus<br />
          <span className="text-primary">seit 1984.</span>
        </h1>

        <p className="text-subtitle mb-9 md:mb-10 text-white/85 max-w-xl">
          Neu- &amp; Gebrauchtwagen, Werkstatt für alle Marken, HU/AU, Autogas — an zwei Standorten in Kallmünz und Hohenfels.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <Button
            asChild
            className="group bg-primary text-black hover:bg-primary-deep h-12 sm:h-14 px-7 rounded-xs font-bold text-button-md transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <Link href="/fahrzeuge" className="inline-flex items-center gap-2">
              Fahrzeuge entdecken
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white text-black border-white hover:bg-neutral-100 hover:border-neutral-100 h-12 sm:h-14 px-7 rounded-xs font-bold text-button-md transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <Link href="/kontakt">Service-Termin anfragen</Link>
          </Button>
        </div>

        <div className="mt-10 hidden md:flex flex-wrap items-center gap-x-8 gap-y-3 text-white/75 text-body-sm">
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-primary" /> Kallmünz · Hohenfels
          </div>
          <div className="h-3 w-px bg-white/25" />
          <div>40+ Jahre Erfahrung</div>
          <div className="h-3 w-px bg-white/25" />
          <div className="flex items-center gap-2">
            <Star size={14} className="text-primary fill-primary" /> Familienbetrieb in 2. Generation
          </div>
        </div>
      </motion.div>
    </section>
  );
}

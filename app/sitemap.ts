import { MetadataRoute } from 'next';
import { vehicles } from '@/lib/vehicles';
import { locations } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.autohaus-feldmeier.de';

  const staticPages = [
    '',
    '/fahrzeuge',
    '/service',
    '/service/hu-au',
    '/service/autogas-lpg',
    '/service/karosserie-autoglas',
    '/service/reifen-teile',
    '/finanzierung-leasing',
    '/standorte',
    '/ueber-uns',
    '/team',
    '/bewertungen',
    '/karriere',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/agb',
    '/barrierefreiheit'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const vehiclePages = vehicles.map((v) => ({
    url: `${baseUrl}/fahrzeuge/${v.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const locationPages = locations.map((l) => ({
    url: `${baseUrl}/standorte/${l.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...vehiclePages, ...locationPages];
}

import { Metadata } from 'next';

export function getMetadata(title: string, description: string): Metadata {
  return {
    metadataBase: new URL('https://www.autohaus-feldmeier.de'),
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['/images/og/og-default.jpg'],
    },
  };
}

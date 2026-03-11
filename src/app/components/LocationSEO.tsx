import { useEffect, ReactNode } from 'react';
import { useParams, Navigate } from 'react-router';
import { getLocationBySlug, LocationData } from '../../data/locations';

/** Maps a page key to its base path and title fragment. */
const pageMeta: Record<string, { path: string; titlePrefix: string }> = {
  home: { path: '', titlePrefix: 'Laundromat' },
  services: { path: '/services', titlePrefix: 'Laundry Services' },
  pricing: { path: '/pricing', titlePrefix: 'Laundry Pricing' },
  about: { path: '/about', titlePrefix: 'About Our Laundromat' },
  contact: { path: '/contact', titlePrefix: 'Contact Us' },
  testimonials: { path: '/testimonials', titlePrefix: 'Laundromat Reviews' },
};

interface Props {
  page: keyof typeof pageMeta;
  children: ReactNode;
}

export function LocationSEO({ page, children }: Props) {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? getLocationBySlug(locationSlug) : undefined;

  useEffect(() => {
    if (!location) return;

    const meta = pageMeta[page];
    const canonicalUrl = page === 'home'
      ? `https://maytaglaundromat.com/laundromat-in/${location.slug}`
      : `https://maytaglaundromat.com/${page}-in/${location.slug}`;

    // Title
    const prevTitle = document.title;
    document.title = `${meta.titlePrefix} Near ${location.name} NC | Maytag Coin Laundry`;

    // Canonical
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);

    // Meta description
    const desc = document.createElement('meta');
    desc.name = 'description';
    desc.content = location.metaDescription;
    document.head.appendChild(desc);

    // JSON-LD
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'location-seo-schema';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'DryCleaningOrLaundry',
      name: 'Maytag Coin Laundry of Raleigh',
      url: canonicalUrl,
      telephone: '+1-984-205-9506',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '15 Jones Franklin Rd',
        addressLocality: 'Raleigh',
        addressRegion: 'NC',
        postalCode: '27606',
        addressCountry: 'US',
      },
      areaServed: { '@type': 'City', name: location.name },
      description: location.metaDescription,
      openingHours: 'Mo-Su 05:00-23:00',
      priceRange: '$',
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      canonical.remove();
      desc.remove();
      schema.remove();
    };
  }, [location, page]);

  if (!location) return <Navigate to="/" replace />;

  return <>{children}</>;
}

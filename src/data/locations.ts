export interface LocationData {
  slug: string;
  name: string;
  distanceMiles: string;
  driveMinutes: string;
  metaDescription: string;
}

export const locations: LocationData[] = [
  { slug: 'raleigh', name: 'Raleigh', distanceMiles: '0', driveMinutes: '5-10', metaDescription: "Raleigh's premier laundromat at 15 Jones Franklin Rd. Self-service wash & dry, wash-and-fold, and commercial laundry. Open daily 5AM-11PM. Since 1995." },
  { slug: 'cary', name: 'Cary', distanceMiles: '5', driveMinutes: '10-12', metaDescription: 'Cary NC residents: Maytag Coin Laundry is just 10 minutes away. Large-capacity washers, wash-and-fold service, and affordable prices. Open daily.' },
  { slug: 'apex', name: 'Apex', distanceMiles: '10', driveMinutes: '15-18', metaDescription: 'Apex NC laundry service at Maytag Coin Laundry. 15 minutes from downtown Apex. Large-capacity washers, wash-and-fold, bulk laundry. Open 5AM-11PM.' },
  { slug: 'east-raleigh', name: 'East Raleigh', distanceMiles: '5', driveMinutes: '10-12', metaDescription: 'East Raleigh laundromat: Maytag Coin Laundry on Jones Franklin Rd. Self-service wash & dry, wash-and-fold, coin & card payment. Open 5AM-11PM.' },
  { slug: 'west-raleigh', name: 'West Raleigh', distanceMiles: '2', driveMinutes: '5-7', metaDescription: 'West Raleigh laundromat: Maytag Coin Laundry, just minutes away on Jones Franklin Rd. Modern equipment, wash-and-fold service. Open daily 5AM-11PM.' },
  { slug: 'garner', name: 'Garner', distanceMiles: '8', driveMinutes: '12-15', metaDescription: 'Garner NC laundromat: Maytag Coin Laundry is 12 minutes away. Modern equipment, wash-and-fold service, coin & card payment. Serving Garner since 1995.' },
  { slug: 'north-raleigh', name: 'North Raleigh', distanceMiles: '10', driveMinutes: '15-18', metaDescription: 'North Raleigh laundromat: Maytag Coin Laundry on Jones Franklin Rd. Large-capacity washers, wash-and-fold, open 5AM-11PM. 15 min from North Hills.' },
  { slug: 'downtown-raleigh', name: 'Downtown Raleigh', distanceMiles: '4', driveMinutes: '8-10', metaDescription: 'Downtown Raleigh laundromat: Maytag Coin Laundry, 8 min from downtown. Perfect for apartment dwellers. Self-service & wash-and-fold. Open 5AM-11PM.' },
  { slug: 'nc-state', name: 'NC State Area', distanceMiles: '2', driveMinutes: '5', metaDescription: 'NC State students: Maytag Coin Laundry is 5 min from campus. Large washers, free WiFi, wash-and-fold service. Skip the dorm laundry lines.' },
  { slug: 'midtown-raleigh', name: 'Midtown Raleigh', distanceMiles: '6', driveMinutes: '10-12', metaDescription: 'Midtown Raleigh laundromat: Maytag Coin Laundry, 10 min via I-440. Self-service, wash-and-fold, oversized loads. Open daily 5AM-11PM.' },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

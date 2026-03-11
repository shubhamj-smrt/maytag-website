/**
 * Generates sitemap.xml from the core pages + all location variants.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://maytaglaundromat.com';
const TODAY = new Date().toISOString().split('T')[0];

const corePages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.7', changefreq: 'monthly' },
];

const locationSlugs = [
  'raleigh', 'cary', 'apex', 'east-raleigh', 'west-raleigh', 'garner',
  'north-raleigh', 'downtown-raleigh', 'nc-state', 'midtown-raleigh',
];

const pageKeys = ['laundromat', 'services', 'pricing', 'about', 'contact', 'testimonials'];

function url(path, priority, changefreq) {
  return `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [];

// Core pages
for (const page of corePages) {
  urls.push(url(page.path, page.priority, page.changefreq));
}

// Location pages
for (const slug of locationSlugs) {
  for (const page of pageKeys) {
    const path = page === 'laundromat'
      ? `/laundromat-in/${slug}`
      : `/${page}-in/${slug}`;
    const priority = page === 'laundromat' ? '0.8' : '0.6';
    urls.push(url(path, priority, 'monthly'));
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf-8');

console.log(`Sitemap generated: ${urls.length} URLs → ${outPath}`);

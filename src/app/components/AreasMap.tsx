import { useEffect, useRef } from 'react';

interface Area {
  name: string;
  lat: number;
  lng: number;
}

const serviceAreas: Area[] = [
  { name: 'Raleigh', lat: 35.7796, lng: -78.6382 },
  { name: 'Cary', lat: 35.7915, lng: -78.7811 },
  { name: 'Apex', lat: 35.7321, lng: -78.8503 },
  { name: 'East Raleigh', lat: 35.8015, lng: -78.5720 },
  { name: 'West Raleigh', lat: 35.7874, lng: -78.7110 },
  { name: 'Garner', lat: 35.7107, lng: -78.6138 },
];

// Centre the map on the laundromat itself
const LAUNDROMAT: Area = { name: 'Maytag Coin Laundry', lat: 35.7856, lng: -78.7209 };

export function AreasMap({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: import('leaflet').Map;

    (async () => {
      const L = (await import('leaflet')).default;

      // Fix Leaflet's broken default icon URLs when bundled with Vite
      delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      // Teal pin for service areas
      const tealIcon = L.divIcon({
        className: '',
        html: `<span style="
          display:block;width:14px;height:14px;
          background:#00bfb3;border:2.5px solid #fff;
          border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.35);
        "></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      // Dark pin for the laundromat itself
      const laundromatIcon = L.divIcon({
        className: '',
        html: `<span style="
          display:block;width:16px;height:16px;
          background:#111;border:2.5px solid #fff;
          border-radius:50%;box-shadow:0 1px 6px rgba(0,0,0,0.45);
        "></span>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      map = L.map(containerRef.current!, {
        center: [LAUNDROMAT.lat, LAUNDROMAT.lng],
        zoom: 11,
        zoomControl: false,
        scrollWheelZoom: true,
        attributionControl: false,
        closePopupOnClick: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map);

      const popupOptions = { closeButton: false, className: 'text-center font-medium', minWidth: 0, maxWidth: 300 };

      // Laundromat pin
      L.marker([LAUNDROMAT.lat, LAUNDROMAT.lng], { icon: laundromatIcon })
        .addTo(map)
        .bindPopup('<div style="text-align:center;white-space:nowrap"><strong>Maytag Coin Laundry</strong><br/>15 Jones Franklin Rd, Raleigh, NC</div>', popupOptions);

      // Service area pins
      serviceAreas.forEach((area) => {
        L.marker([area.lat, area.lng], { icon: tealIcon })
          .addTo(map)
          .bindPopup(`<div style="text-align:center;white-space:nowrap">${area.name}</div>`, popupOptions);
      });

      mapRef.current = map;
    })();

    return () => {
      map?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <>
      {/* Leaflet CSS loaded inline so no extra import is needed in main.tsx */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      {/* `isolate` creates a new stacking context so Leaflet's internal z-indexes
          (panes: 400, popups: 1000) are scoped here and never leak above the nav */}
      <div className={`isolate ${className ?? ''}`}>
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </>
  );
}

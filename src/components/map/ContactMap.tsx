"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";

const LATITUDE = -20.4697;
const LONGITUDE = -54.6201;

export default function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [LATITUDE, LONGITUDE],
        zoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      });

      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      const icon = L.divIcon({
        html: `
          <div class="gs-pin">
            <div class="gs-pin__core"></div>
            <div class="gs-pin__ring"></div>
            <div class="gs-pin__ring gs-pin__ring--delay"></div>
          </div>
        `,
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([LATITUDE, LONGITUDE], {
        icon,
      }).addTo(map);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="border-brand-deep/20 animate-slide-in-right z-0 h-[100%] w-full overflow-hidden rounded-3xl border-2"
    />
  );
}

// app/components/BubbleBackground.tsx
"use client";

import { useEffect, useState } from "react";

interface Droplet {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: string;
}

export default function BubbleBackground() {
  const [droplets, setDroplets] = useState<Droplet[]>([]);

  useEffect(() => {
    // Gera 50 gotículas com propriedades dispersas e aleatórias
    const generated = Array.from({ length: 50 }).map((_, index) => {
      const sizeRandom = Math.random();
      let size = "w-2 h-2"; // Gotículas pequenas
      if (sizeRandom > 0.4) size = "w-4 h-4"; // Médias
      if (sizeRandom > 0.8) size = "w-6 h-6"; // Bolhas maiores

      return {
        id: index,
        left: `${Math.random() * 100}%`,
        size,
        delay: `${Math.random() * 6}s`,
        duration: `${6 + Math.random() * 6}s`,
        opacity: `${0.1 + Math.random() * 0.4}`,
      };
    });

    setDroplets(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {droplets.map((drop) => (
        <div
          key={drop.id}
          className={`animate-bubble-float absolute bottom-0 rounded-full border border-white/20 bg-blue-400/50 blur-[1px]`}
          style={{
            left: drop.left,
            width:
              drop.size.split(" ")[0] === "w-2"
                ? "8px"
                : drop.size.split(" ")[0] === "w-4"
                  ? "16px"
                  : "24px",
            height:
              drop.size.split(" ")[0] === "w-2"
                ? "8px"
                : drop.size.split(" ")[0] === "w-4"
                  ? "16px"
                  : "24px",
            animationDelay: drop.delay,
            animationDuration: drop.duration,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { World } from "@/components/ui/globe";

const tagline = "Turning Visions into Real Time Application.";

const globeArcs = [
  {
    order: 1,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#ff6700", // orange-red
  },
  {
    order: 2,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 35.6895,
    endLng: 139.6917,
    arcAlt: 0.22,
    color: "#ff6700", // orange-red
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.18,
    color: "#ff6700", // orange-red
  },
];

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent = tagline.slice(0, i + 1);
      i++;
      if (i === tagline.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f172a] text-white py-16 overflow-hidden">
      {/* White Spotlight from top left */}
      <Spotlight
        className="top-[-20%] left-[-20%] w-[120vw] h-[80vh] opacity-40"
        fill="#fff"
      />
      {/* Brighter, Larger Globe */}

      <div className="absolute z-0 left-[72%] top-[120%] -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] opacity-90 pointer-events-none">
        <World
          globeConfig={{
            pointSize: 3,
            globeColor: "rgba(101,78,55,0.8)", // darker grey surface
            showAtmosphere: true,
            atmosphereColor: "rgba(71,85,105,0.18)", // subtle grey
            atmosphereAltitude: 0.22,
            emissive: "#23272f", // dark grey emissive
            emissiveIntensity: 0.18,
            shininess: 1.2,
            polygonColor: "rgba(255,103,0,0.7)", // bright orange land
            ambientLight: "#fff",
            directionalLeftLight: "#fff",
            directionalTopLight: "#fff",
            pointLight: "#ff6700",
            autoRotate: true,
            autoRotateSpeed: 0.5,
          }}
          data={globeArcs}
        />
      </div>
      {/* Tagline */}
      <div className="relative z-10 mt-12 text-center">
        <p className="mb-8 text-slate-100 min-h-[2.5rem] text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
          <span
            ref={textRef}
            className="font-mono animate-pulse"
            aria-label={tagline}
          ></span>
        </p>
        <a
          href="#projects"
          className="inline-block bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
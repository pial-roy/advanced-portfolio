"use client";

import { World } from "@/components/ui/globe";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"; // <-- Import added

const tagline = "Transforming Visions into Real Time Application.";

const globeArcs = [
  {
    order: 1,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#ff6700",
  },
  {
    order: 2,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 35.6895,
    endLng: 139.6917,
    arcAlt: 0.22,
    color: "#ff6700",
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.18,
    color: "#ff6700",
  },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f172a] text-white py-16 overflow-hidden">
      {/* Animated Beams Background */}
      <BackgroundBeams className="z-0" />
      {/* Globe */}
{/* Globe */}
<div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] 
                max-w-[1400px] max-h-[1400px] pointer-events-none">
  <World
    globeConfig={{
      pointSize: 3,
      globeColor: "rgba(40,40,48,0.55)",
      showAtmosphere: true,
      atmosphereColor: "rgba(71,85,105,0.12)",
      atmosphereAltitude: 0.22,
      emissive: "#23272f",
      emissiveIntensity: 0.18,
      shininess: 1.2,
      polygonColor: "rgba(255,103,0,0.6)",
      ambientLight: "#fff",
      directionalLeftLight: "#fff",
      directionalTopLight: "#fff",
      pointLight: "#a0a0a0",
      autoRotate: true,
      autoRotateSpeed: 0.5,
    }}
    data={globeArcs}
  />
</div>

      {/* Tagline */}
      <div className="relative z-20 mt-12 text-center">
        <TextGenerateEffect
          words={tagline}
          className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg"
        />
        <p className="text-slate-300 text-base md:text-lg mb-6 mt-4">
          Hello I'm Pial, Software Developer based in India.
        </p>
        <a
          href="#about"
          className="inline-block bg-gradient-to-r from-orange-700 to-orange-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { AboutFeatures } from "./AboutFeatures";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
  const experienceData = [
    {
      title: "Early 2022",
      description:
        "Internship at Persistent Systems working on Python and Data Science projects.",
      icon: "💻",
    },
    {
      title: "2022 – 2025",
      description:
        "DevOps Engineer at Persistent Systems, focusing on cloud infrastructure, CI/CD pipelines, and automation.",
      icon: "☁️",
    },
    {
      title: "Future Goals",
      description:
        "Expanding into fullstack development, building scalable systems, and contributing to open-source projects.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20 bg-gray-900 overflow-hidden"
    >
      {/* Background beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Spotlight */}
      <Spotlight
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 opacity-50 z-5"
        fill="white"
      />

      {/* Profile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10 max-w-6xl w-full">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/pial.png"
            alt="Pial Roy"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-orange-500 shadow-xl mx-auto md:mx-0"
          />
        </div>

        {/* Intro */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-orange-500">
            Hi, I'm Pial Roy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm a{" "}
            <span className="font-semibold text-white">DevOps Engineer</span>{" "}
            exploring the world of{" "}
            <span className="font-semibold text-orange-400">
              fullstack development
            </span>
            . I build scalable systems, automate workflows, and always explore
            new technologies.
          </p>
          <p className="text-gray-300 text-lg md:text-xl">
            I prioritize <span className="font-semibold">client collaboration</span>, 
            constantly improve my skills, and enjoy working on impactful projects.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="w-full mt-20 relative z-10">
        <AboutFeatures />
      </div>
    </section>
  );
}

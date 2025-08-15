"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { CardStack } from "./ui/card-stack";
import { workTimeline } from "@/components/data/timeline";
import { BackgroundBeams } from "@/components/ui/background-beams";

const projects = [
  {
    title: "Auction Platform",
    href: "https://github.com/yourusername/auction-app",
    image: "/images/auction.png",
    description:
      "A real-time auction platform built with FastAPI & React. Includes bidding, countdown timers, and timezone-aware scheduling.",
  },
  {
    title: "Jira Analytics Dashboard",
    href: "https://github.com/yourusername/jira-analytics",
    image: "/images/jira.png",
    description:
      "Interactive dashboard to analyze Jira tickets with custom charts, filters, and export options. Built using Streamlit & Python.",
  },
  {
    title: "Portfolio Website",
    href: "https://yourwebsite.com",
    image: "/images/portfolio.png",
    description:
      "A modern developer portfolio with animations, 3D effects, and responsive design using Next.js & TailwindCSS.",
  },
];

export default function ProjectSection() {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background animation */}
      <BackgroundBeams className="absolute inset-0 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-slate-300">My Recent</span>
          <span className="text-orange-700"> Works</span>
        </h2>

        {/* Timeline CardStack */}
        <div className="flex justify-center mb-12">
          <CardStack items={workTimeline} offset={12} scaleFactor={0.07} />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <PinContainer
              key={idx}
              title={project.title}
              href={project.href}
              containerClassName="w-full"
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-40 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-sm text-gray-300">{project.description}</p>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

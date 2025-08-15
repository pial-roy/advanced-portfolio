"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "Cloud Automation Platform",
    description: "Automated cloud resource provisioning using Terraform and GitHub Actions.",
    image: "https://source.unsplash.com/400x300/?cloud,automation",
    link: "#"
  },
  {
    title: "CI/CD Pipeline",
    description: "Robust CI/CD pipeline for microservices with Docker and Kubernetes.",
    image: "https://source.unsplash.com/400x300/?cicd,devops",
    link: "#"
  },
  {
    title: "Monitoring Dashboard",
    description: "Real-time monitoring with Prometheus, Grafana, and custom alerting.",
    image: "https://source.unsplash.com/400x300/?monitoring,dashboard",
    link: "#"
  },
  {
    title: "Serverless API",
    description: "Scalable serverless API using AWS Lambda and API Gateway.",
    image: "https://source.unsplash.com/400x300/?serverless,api",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <BentoGrid>
          {projects.map((project, idx) => (
            <BentoGridItem
              key={idx}
              title={
                <a
                  href={project.link}
                  className="hover:underline text-indigo-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              }
              description={project.description}
              header={
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-32 object-cover mb-2"
                />
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
"use client";
import React, { useEffect } from "react";
import { animate, motion } from "motion/react";
import { Card, CardTitle, CardDescription, Container } from "./AboutCards";
import { SiPython, SiDocker, SiKubernetes, SiJavascript, SiJenkins } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

export const SkillsCardDemo: React.FC = () => {
  const skills: Skill[] = [
    { name: "Python", icon: <SiPython /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "GPT / AI", icon: <FaRobot /> },
  ];

  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

  useEffect(() => {
    const sequence = skills.map((_, i) => [
      `.circle-${i}`,
      { scale, transform },
      { duration: 0.8 },
    ]);
    animate(sequence, { repeat: Infinity, repeatDelay: 1 });
  }, [skills]);

  return (
    <Card>
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row shrink-0 justify-center items-center gap-4">
          {skills.map((skill, i) => (
            <Container key={skill.name} className={`circle-${i}`}>
              <div className="h-8 w-8">{skill.icon}</div>
            </Container>
          ))}
        </div>
      </div>
      <CardTitle>My DevOps & Dev Tools</CardTitle>
      <CardDescription>
        Tools I frequently use: Python, Jenkins, Docker, Kubernetes, JavaScript, and GPT-powered AI.
      </CardDescription>
    </Card>
  );
};

"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandInstagram,
  IconTerminal2,
  IconEaseInOut,
  IconCloud,
  IconHeart,
} from "@tabler/icons-react";

export function AboutFeatures() {
  const features = [
    {
      title: "DevOps & Fullstack",
      description: "Bridging development and operations with scalable systems and automation.",
      icon: <IconTerminal2 className="text-orange-500" />,
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new technologies, frameworks, and best practices.",
      icon: <IconEaseInOut className="text-orange-400" />,
    },
    {
      title: "Reliable & Collaborative",
      description: "Prioritizing client collaboration and delivering reliable solutions.",
      icon: <IconCloud className="text-slate-300" />,
    },
    {
      title: "Passion & Creativity",
      description: "I enjoy building projects that make an impact and challenge my skills.",
      icon: <IconHeart className="text-orange-500" />,
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally.",
      icon: <IconBrandLinkedin className="text-orange-500" />,
      href: "https://www.linkedin.com/in/pialroy/",
    },
    {
      title: "GitHub",
      description: "Check out my repositories and projects.",
      icon: <IconBrandGithub className="text-gray-300" />,
      href: "https://github.com/your-github-username",
    },
    {
      title: "Email",
      description: "Send me a message anytime.",
      icon: <IconMail className="text-red-500" />,
      href: "mailto:your-email@gmail.com",
    },
    {
      title: "Instagram",
      description: "Follow my personal journey.",
      icon: <IconBrandInstagram className="text-pink-500" />,
      href: "https://www.instagram.com/your-instagram/",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-w-7xl mx-auto gap-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  href,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  index: number;
}) => {
  const content = (
    <>
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group/feature flex flex-col lg:border-r py-10 relative">
      {content}
    </a>
  ) : (
    <div className={cn("flex flex-col lg:border-r py-10 relative group/feature")}>{content}</div>
  );
};

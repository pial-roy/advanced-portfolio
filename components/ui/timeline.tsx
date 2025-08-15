"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const CompactTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 mb-10 last:mb-0"
          >
            {/* Dot */}
            <div className="relative flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-orange-500 border-2 border-gray-900" />
            </div>

            {/* Text */}
            <div>
              <h4 className="text-orange-400 font-semibold text-lg">
                {item.title}
              </h4>
              <div className="text-gray-300 text-sm">{item.content}</div>
            </div>
          </div>
        ))}

        {/* Vertical Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[6px] top-2 w-[2px] bg-gray-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-[2px] bg-gradient-to-b from-orange-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

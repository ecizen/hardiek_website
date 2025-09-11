"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string | StaticImageData;
  link: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  techStack?: string[]; // 👉 tambahin prop untuk tech stack
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  src,
  link,
  progress,
  range,
  targetScale,
  techStack = [], // default array kosong
}) => {
  const container = useRef<HTMLDivElement | null>(null);

  // scale + translateY berdasarkan progress scroll
  const scale = useTransform(progress, range, [1, targetScale]);
  const translateY = useTransform(progress, range, [0, i * 40]);

  return (
    <div
      ref={container}
      className="min-h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          y: translateY,
          zIndex: 100 - i,
        }}
        className="relative w-full lg:max-w-5xl rounded-3xl border border-white/10 bg-[rgb(20,20,20)] p-6 shadow-md flex flex-col md:flex-row gap-6 h-[500px]"
      >
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-white leading-snug">
            {title}
          </h2>
          <p className="text-gray-400">{description}</p>
          <a
            href={link}
            target="_blank"
            className="inline-block px-4 py-2 rounded-2xl border border-white/15 text-white text-sm hover:bg-white/10 transition"
          >
            View case study
          </a>
        </div>

        {/* Image + Tech Stack */}
        <div className="flex-1 space-y-4">
          <div className="relative w-full lg:h-72 h-40 rounded-lg overflow-hidden">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/10 text-gray-200 text-sm border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

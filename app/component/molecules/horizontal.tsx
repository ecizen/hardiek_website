"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useLayoutEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { projects } from "@/app/data";

interface Project {
  title: string;
  description: string;
  src: StaticImageData | string;
  link: string;
  techStack: string[];
}

export default function ProjectShowcase() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [maxTranslate, setMaxTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    function updateDimensions() {
      if (scrollContainerRef.current) {
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        setMaxTranslate(totalWidth - viewportWidth);

        // hitung tinggi section = total width : viewport width * tinggi viewport
        const extraHeight = totalWidth / viewportWidth;
        setSectionHeight(window.innerHeight * extraHeight);
      }
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${maxTranslate}px`]
  );

  return (
    <section
      ref={targetRef}
      style={{ height: sectionHeight ? `${sectionHeight}px` : "100vh" }}
      className="relative bg-neutral-950"
    >
      <div className="sticky top-0 h-screen flex overflow-hidden">
        <motion.div ref={scrollContainerRef} style={{ x }} className="flex">
          {/* Title */}
          <div className="w-screen md:min-w-[40vw] flex flex-col items-center justify-center px-8 border-r border-neutral-800">
            <div className="mb-6 flex items-center space-x-2">
              <div className="size-2 bg-purple-600 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <label className="text-sm text-gray-400 font-semibold">
                  {"{03}"}
                </label>
                <div className="h-[2px] w-[12px] bg-gray-400" />
                <label className="text-sm text-gray-400 font-semibold">
                  Projects
                </label>
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              PROJECT <br /> SHOWCASE
            </h1>
          </div>

          {/* Project Cards */}
          {projects.map((p: Project, i: number) => (
            <div
              key={i}
              className="w-screen md:min-w-[60vw] flex flex-col justify-center px-6 md:px-20 border-r border-neutral-800"
            >
              <h3 className="text-xs tracking-widest text-neutral-400 mb-4">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}.
              </h3>

              <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="mt-6 text-xl md:text-4xl font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full border border-neutral-700 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-fit px-5 py-2 rounded-full border border-neutral-700 text-neutral-200 hover:bg-neutral-800 transition"
              >
                View case study
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

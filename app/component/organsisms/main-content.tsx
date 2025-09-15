"use client";
import Hero from "../organsisms/hero";
import CustomCursor from "../atoms/custom-scroll";
import { ScrollBasedVelocityDemo } from "../molecules/marque";
import About from "../organsisms/about";
import ProjectS from "../organsisms/project";
import ShortDescripiton from "../organsisms/short-decription";
import { AnimatedGradientTextDemo } from "../molecules/animated-gradint";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Timeline from "./timline";
import Skill from "./Skill";

interface MainContentProps {
  onViewAll: () => void;
}

export default function MainContent({ onViewAll }: MainContentProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Hero />
      <CustomCursor />
      <ScrollBasedVelocityDemo />
      <section id="about" className="about">
        <About />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section>
        <ShortDescripiton />
      </section>
      <section id="timeline">
        <Timeline />
      </section>
      <section id="projects">
        <ProjectS />
        <div className="py-8">
          <div className="flex justify-center mt-0">
            <Button
              onClick={onViewAll}
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

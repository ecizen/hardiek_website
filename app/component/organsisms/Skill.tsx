"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// ✅ Data array skill
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Frontend Development",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "REST API",
  "API Integration",
  "Git & GitHub",
  "PHP",
  "Laravel",
  "Angular",
];

const containerVariants:any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // animasi satu per satu
    },
  },
};

const itemVariants:any = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const Skill = () => {
  return (
    <section id="skill" className="lg:py-20 py-12 px-8 ">
      {/* Section Title */}
      <div className="mb-6 flex items-center space-x-2">
        <div className="size-2 bg-purple-600 rounded-full"></div>
        <div className="flex items-center space-x-1">
          <label className="text-sm text-gray-400 font-semibold">
            {"{03}"}
          </label>
          <div className="h-[2px] w-[12px] bg-gray-400" />
          <label className="text-sm text-gray-400 font-semibold">Skill</label>
        </div>
      </div>

      <h1 className="lg:text-5xl text-4xl font-semibold text-white leading-10">
        My Powers
      </h1>

      {/* Skill Badges with Animation */}
      <motion.div
        className="flex flex-wrap gap-3 mt-12 lg:max-w-[70%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Badge className="px-4 py-2.5 bg-gray-800 border border-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white transition">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skill;

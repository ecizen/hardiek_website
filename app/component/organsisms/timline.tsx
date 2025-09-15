"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const data = [
  {
    type: "Education",
    title: "Sekolah Dasar",
    period: "2012 – 2018",
    achievements: ["Top 5 Tenis Meja"],
    company: "SD Negeri",
  },
  {
    type: "Education",
    title: "Sekolah Menengah Pertama",
    period: "2018 – 2021",
    achievements: ["OSIS (Organisasi Siswa)"],
    company: "SMP Negeri",
  },
  {
    type: "Education",
    title: "Sekolah Menengah Kejuruan",
    period: "2021 – 2024",
    responsibilites: ["React Native", "Laravel", "Android Studio"],
    company: "SMK Negeri",
  },
  {
    type: "Intership",
    title: "Crafting Interfaces & Optimizing Apps",
    period: "Jan 2023 – Present",
    responsibilites: [
      "Creating UI with Angular & Bootstrap CSS",
      "Optimation Performance",
    ],
    company: "PT Diginet Media",
    certificate: true,
  },
  {
    type: "Intership",
    title: "Fullstack Development & API Integration",
    period: "Jun 2024 – Sep 2024",
    responsibilites: [
      "Creating UI with JavaScript & CSS",
      "API Integration & Optimization",
      "Performance Improvements",
    ],
    company: "PT Diginet Media",
    certificate: true,
  },
];

// 🔥 Animasi Variants
const containerVariants:any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants:any = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const Timeline = () => {
  return (
    <div className="w-full px-8 py-20 min-h-screen bg-neutral-950">
      {/* Header */}
      <motion.div
        className="mb-6 flex items-center space-x-2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="size-2 bg-purple-600 rounded-full"></div>
        <div className="flex items-center space-x-1">
          <label className="text-sm text-gray-400 font-semibold">
            {"{04}"}
          </label>
          <div className="h-[2px] w-[12px] bg-gray-400" />
          <label className="text-sm text-gray-400 font-semibold">Timeline</label>
        </div>
      </motion.div>

      <motion.h1
        className="lg:text-7xl md:text-6xl text-5xl text-white font-semibold"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        viewport={{ once: true }}
      >
        My Journey
      </motion.h1>

      {/* Timeline Content */}
      <motion.div
        className="mt-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="py-8 border-t border-neutral-900 items-start flex relative lg:flex-row flex-col space-y-8"
          >
            {/* Type Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border border-neutral-800 rounded-full inline-block text-white font-semibold"
            >
              {item.type}
            </motion.div>

            {/* Content */}
            <div className="flex lg:flex-row flex-col items-start lg:ml-30 lg:gap-12 gap-6">
              <div className="text-3xl font-semibold text-white tracking-widest">
                <span className="text-purple-600">/</span>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h1 className="lg:text-2xl md:text-2xl text-xl text-white">
                  {item.title}
                </h1>

                {/* Responsibilites / Achievements */}
                <div className="mt-4 ml-1 flex flex-col space-y-2">
                  {(item.responsibilites || item.achievements)?.map(
                    (point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <div className="size-2 rounded-full bg-purple-600"></div>
                        <p className="text-md text-neutral-500 font-medium">
                          {point}
                        </p>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Company */}
                {item.company && (
                  <div className="flex items-center mt-6 space-x-2">
                    <p className="text-md text-neutral-500 font-medium">
                      Company: {item.company}
                    </p>
                  </div>
                )}

                {/* Certificate Button */}
                {item.certificate && (
                  <motion.div
                    className="mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="text-sm bg-purple-600 text-white shadow-lg shadow-purple-600/30">
                      Certificate
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Period */}
            <motion.div
              className="text-md font-semibold text-neutral-400 absolute right-0"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {item.period}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;

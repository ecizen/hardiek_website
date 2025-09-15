"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./component/organsisms/navbar";
import NoiseBackground from "./component/organsisms/bg-aura";
import MainContent from "./component/organsisms/main-content";
import AllProjectsOverlay from "./component/organsisms/all-project";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // lebih dramatis
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 ">
      {/* Splash Screen */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="splash"
            className="fixed inset-0 flex flex-col items-center justify-center
                       bg-gradient-to-br from-neutral-950 via-purple-950 to-black z-50 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Lingkaran Energi */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1, rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-32 h-32 border-4 border-purple-600/40 rounded-full absolute"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0.9, 1], rotate: -360 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="w-20 h-20 border-4 border-purple-400 rounded-full absolute"
            />

            {/* Logo / Teks */}
            <motion.h1
              initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
              animate={{
                scale: [0.5, 1.2, 1],
                opacity: [0, 1, 1],
                filter: ["blur(20px)", "blur(5px)", "blur(0px)"],
              }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-5xl lg:text-7xl font-extrabold text-white tracking-widest relative"
            >
              Hardiek
              <motion.span
                animate={{
                  color: ["#9333ea", "#a855f7", "#9333ea"],
                  textShadow: [
                    "0 0 10px #9333ea",
                    "0 0 30px #a855f7",
                    "0 0 50px #9333ea",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="ml-2"
              >
                DEV
              </motion.span>
            </motion.h1>

            {/* Flash Light Animasi */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: ["-100%", "150%"], opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, delay: 1.5 }}
              className="absolute w-40 h-40 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            {!showAllProjects && (
              <MainContent onViewAll={() => setShowAllProjects(true)} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showAllProjects && (
              <AllProjectsOverlay onClose={() => setShowAllProjects(false)} />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

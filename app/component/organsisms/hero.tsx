"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // transformasi saat scroll
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <section className="fixed top-0 left-0 w-full py-40 flex items-center justify-center overflow-hidden bg-black z-0">
      {/* konten hero */}
      <motion.div
        style={{ scale, opacity, y }}
        className="relative z-10 text-center"
      >
        {/* badge */}
        <div className="mb-6 flex items-center space-x-3 justify-center">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
          
          <h3 className="text-gray-400 text-xl">FULL STACK DEVELOPER</h3>
        </div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="cursor-detect-white text-5xl sm:text-7xl md:text-9xl font-extrabold 
                     bg-gradient-to-b from-[#C0C0C0] via-[#C0C0C0] to-white 
                     bg-clip-text text-transparent leading-tight"
        >
          HI, I'M HARDIEK
        </motion.h1>
      </motion.div>
    </section>
  );
}

"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Ripple } from "@/components/magicui/ripple";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";
export default function Hero() {
  const { scrollY } = useScroll();

  // transformasi saat scroll
  const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <div className="lg:min-h-screen relative ">
      {" "}
      <section className=" top-0 left-0 w-full lg:py-40 py-20  flex flex-col items-center justify-center ">
        <motion.div
          style={{ scale, opacity, y }}
          className="relative  text-center"
        >
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-gray-300 text-md sm:text-xl md:text-2xl"
          >
            Passionate Full Stack Developer creating web & mobile experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-10 flex justify-center gap-6"
          >
            <button className="relative px-6 py-3  text-white rounded-full overflow-hidden group">
              <span className="relative z-10">Download CV</span>
              <BorderBeam duration={8} size={100} />
            </button>
          </motion.div>
      
        </motion.div>
      </section>
    </div>
  );
}

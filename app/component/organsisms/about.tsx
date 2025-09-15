"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScratchToRevealDemo } from "./reveal-face";

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="inline-block overflow-hidden"
    >
      {text}
    </motion.span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="lg:px-8 px-4 py-20">
      <div className="flex items-center space-x-2">
       <div className="size-2 bg-purple-600 rounded-full"></div>
        <div className="flex items-center space-x-1">
          <label className="text-sm text-gray-400 font-semibold">
            {"{04}"}
          </label>
          <div className="h-[2px] w-[12px] bg-gray-400" />
          <label className="text-sm text-gray-400 font-semibold">About</label>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-12">
        <div
          ref={ref}
          className="order-2 lg:order-1 px-4 py-12 mt-12 about"
          id="about"
        >
          {/* Section Label */}

          {/* Headline */}
          <h1 className="lg:text-4xl text-4xl text-white font-bold overflow-hidden">
            {inView && <RevealText text="I AM A FUTURE" />}
          </h1>
          <h1 className="lg:text-4xl text-4xl text-white font-bold overflow-hidden">
            {inView && <RevealText text="FULL STACK DEV." delay={0.3} />}
          </h1>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 font-semibold clip-menu text-white border border-purple-600 uppercase px-6 py-2"
          >
            View My Cv
          </motion.button>

          {/* Konten ABOUT */}
          <div className="w-full mt-16 flex flex-col space-y-16">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="text-2xl font-semibold text-white mb-6">
                ABOUT ME
              </div>
              <p className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify">
                I'm on the cutting edge of modern web and mobile development
                tools, enabling me to build robust, scalable, and creative
                applications from front-end to back-end. Though my methods may
                be unconventional, my dedication to clean, efficient, and
                maintainable code is unparalleled. I thrive on solving complex
                problems and believe that with the right approach, any technical
                challenge can be overcome.
              </p>
            </motion.div>

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <div className="text-2xl font-semibold text-white mb-6">
                CHALLENGES & APPROACH
              </div>
              <p className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify">
                I focus on full stack development principles, ensuring both the
                client-side and server-side of applications work seamlessly
                together. I employ responsive and dynamic front-end techniques
                while building scalable back-end architectures. I optimize
                performance, security, and maintainability to deliver fast,
                reliable, and user-friendly applications across all platforms.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bagian ScratchToReveal */}
        <div className="order-1 lg:order-2 flex items-start justify-start lg:items-center lg:justify-center">
          <ScratchToRevealDemo />
        </div>
      </div>
    </div>
  );
};

export default About;

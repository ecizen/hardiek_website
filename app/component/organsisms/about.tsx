"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScratchToRevealDemo } from "./reveal-face";

const Typewriter = ({
  text,
  speed = 40,
  className,
  trigger,
}: {
  text: string;
  speed?: number;
  className?: string;
  trigger: boolean;
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  return <span className={className}>{displayed}</span>;
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="lg:px-8 px-4 py-20 grid lg:grid-cols-2 grid-cols-1 gap-12">
      {/* Bagian Text */}
      <div
        ref={ref}
        className="order-2 lg:order-1 px-4 py-12 mt-12 about"
        id="about"
      >
        <h1 className="lg:text-4xl text-4xl text-white font-bold">
          <Typewriter text="I AM A FUTURE" speed={60} trigger={inView} />
        </h1>
        <h1 className="lg:text-4xl text-4xl text-white font-bold">
          <Typewriter text="FULL STACK DEV." speed={60} trigger={inView} />
        </h1>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12 font-semibold clip-menu text-white border border-white uppercase px-6 py-2"
        >
          View My Cv
        </motion.button>

        {/* Konten ABOUT ME */}
        <div className="w-full mt-16 flex flex-col space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="text-2xl font-semibold text-white mb-6">
              ABOUT ME
            </div>
            <Typewriter
              text="I'm on the cutting edge of modern web and mobile development tools, enabling me to build robust, scalable, and creative applications from front-end to back-end. Though my methods may be unconventional, my dedication to clean, efficient, and maintainable code is unparalleled. I thrive on solving complex problems and believe that with the right approach, any technical challenge can be overcome."
              speed={20}
              trigger={inView}
              className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 3, duration: 1 }}
          >
            <div className="text-2xl font-semibold text-white mb-6">
              CHALLENGES & APPROACH
            </div>
            <Typewriter
              text="I focus on full stack development principles, ensuring both the client-side and server-side of applications work seamlessly together. I employ responsive and dynamic front-end techniques while building scalable back-end architectures. I optimize performance, security, and maintainability to deliver fast, reliable, and user-friendly applications across all platforms."
              speed={20}
              trigger={inView}
              className="text-xl uppercase text-gray-400 font-semibold tracking-[3px] text-justify"
            />
          </motion.div>
        </div>
      </div>

      {/* Bagian ScratchToReveal */}
      <div className="order-1 lg:order-2 flex items-start justify-start lg:items-center lg:justify-center">
        <ScratchToRevealDemo />
      </div>
    </div>
  );
};

export default About;

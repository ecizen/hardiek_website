"use client";
import styles from "../../styles/page.module.css";
import { projects } from "../../data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "../molecules/card-stack";
import Link from "next/link";

export default function ProjectS() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className={styles.main}>
      {projects.slice(0, 4).map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.01;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i / projects.length, (i + 1) / projects.length]}
            targetScale={targetScale}
          />
        );
      })}
     
    </main>
  );
}

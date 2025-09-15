"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll(active: boolean = true) {
  useEffect(() => {
    if (!active) return;

    const lenis = new Lenis({
      duration: 0.8, // responsif, tidak terlalu berat
      easing: (t: number) => t, // linear biar ringan
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
   
    });

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [active]);
}

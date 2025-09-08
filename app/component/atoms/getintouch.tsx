"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LiquidButton() {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="lg:block hidden relative overflow-hidden px-6 py-2 rounded-full font-semibold
                   text-black bg-gradient-to-b from-[#C0C0C0] via-[#C0C0C0] to-white
                   border-2 border-transparent shadow-lg
                   before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom
                   before:transition-transform before:duration-500 before:ease-in-out
                   hover:before:scale-y-100 hover:border-white hover:text-white"
    >
      <span className="relative z-10">Get in Touch</span>
    </button>
  );
}

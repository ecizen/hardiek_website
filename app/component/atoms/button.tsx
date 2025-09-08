"use client";

import { motion } from "framer-motion";

export default function ContactButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="
        relative px-4 py-2.5 font-semibold text-white text-sm  uppercase rounded-md
        bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600
        shadow-md shadow-black/40
        overflow-hidden
        border border-white
        transition-all duration-500
        hover:from-pink-500 hover:via-purple-500 hover:to-orange-500
      "
    >
      Contact Me
    </motion.button>
  );
}

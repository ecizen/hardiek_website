"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from "../atoms/getintouch";

const Item = [
  { label: "About", href: "about" },
  { label: "Skill", href: "skill" },
  { label: "Project", href: "project" },
  { label: "Contact", href: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-50 relative">
      <nav className="w-full grid lg:grid-cols-3 grid-cols-2 lg:px-8 px-6 py-4 border-b border-b-neutral-900 bg-black">
        {/* Logo */}
        <div className="text-xl font-bold text-white uppercase flex items-center">
          <h1 className="text-left">Hardiek.T</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="lg:flex hidden items-center gap-6 uppercase font-semibold text-white place-content-center">
          {Item.map((item) => (
            <li key={item.label}>
              <a href={`#${item.href}`} className="hover:text-sky-400 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-end gap-4">
          <LiquidButton />
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden relative bg-white text-black text-md px-4 py-2 font-semibold clip-menu"
          >
            MENU
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay + Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Glass Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 
                         bg-white/10 backdrop-blur-xl border-l border-white/20
                         text-white z-50 shadow-2xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-8 text-white/80 hover:text-sky-400 transition"
              >
                ✕
              </button>

              {/* Menu Items */}
              <ul className="flex flex-col gap-6 text-lg font-semibold uppercase">
                {Item.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={`#${item.href}`}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-sky-400 transition"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

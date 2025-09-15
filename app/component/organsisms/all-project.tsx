"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AllProjectsOverlayProps {
  onClose: () => void;
}

export default function AllProjectsOverlay({ onClose }: AllProjectsOverlayProps) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 bg-black/90 z-40 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-8">All Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition"
            >
              <h3 className="text-lg font-semibold">Project {i + 1}</h3>
              <p className="text-sm mt-2">Short description of project {i + 1}.</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition"
          >
            Close
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

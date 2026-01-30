"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 `z-9999` flex items-center justify-center bg-[#020f26]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Pulsing ring */}
        <motion.div
          className="relative w-16 h-16 rounded-full border border-yellow-400"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-2 rounded-full border border-indigo-100"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          />
        </motion.div>

        {/* Brand Text */}
        <motion.p
          className="text-xs tracking-[0.4em] text-yellow-400/90 uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          EVERESTYATRA.COM
        </motion.p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Build Faster With AI
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Launch your next idea with Next.js, Server Actions and AI-driven development.
        </p>
      </motion.div>
    </section>
  );
}

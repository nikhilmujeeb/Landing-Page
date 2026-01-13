"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Next.js App Router",
    description: "Built on the latest Next.js architecture with blazing fast performance.",
  },
  {
    title: "Server Actions",
    description: "Secure backend logic without managing separate API servers.",
  },
  {
    title: "Airtable Backend",
    description: "Scalable cloud database for rapid product iteration.",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-950 py-32">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Why This Platform?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-zinc-900 rounded-2xl p-10 shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

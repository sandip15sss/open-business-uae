"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }> | React.ReactNode;
  delay?: number;
}

export default function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-transparent flex flex-col justify-start items-start p-6 space-y-6 group transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay }}
    >
      {/* Icon wrapper */}
      <div className="w-12 h-12 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold group-hover:border-champagne-gold/40 group-hover:scale-105 transition-all duration-300">
        {React.isValidElement(Icon) ? (
          Icon
        ) : Icon ? (
          // @ts-ignore
          <Icon className="w-5 h-5" strokeWidth={1.2} />
        ) : null}
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h3 className="font-serif text-xl font-bold text-charcoal tracking-tight group-hover:text-champagne-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

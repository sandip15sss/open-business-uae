"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  theme = "light",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-16`}>
      {badge && (
        <span className={`font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-champagne-gold uppercase ${isCenter ? "block mb-2" : "inline-block mb-3"}`}>
          {badge}
        </span>
      )}
      
      <motion.h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight uppercase ${
          isDark ? "text-white" : "text-charcoal"
        }`}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Luxury Gold separator line/dot */}
      <div className={`flex items-center ${isCenter ? "justify-center" : "justify-start"} gap-3 my-5`}>
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-champagne-gold" />
        <div className="w-1.5 h-1.5 rounded-full bg-champagne-gold" />
        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-champagne-gold" />
      </div>

      {subtitle && (
        <motion.p
          className={`font-sans text-base leading-relaxed ${
            isDark ? "text-white/70" : "text-slate-grey"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

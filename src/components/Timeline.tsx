"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16 space-y-16 py-8">
      {/* Vertical Line */}
      <div className="absolute left-[15px] sm:left-[31px] top-4 bottom-4 w-[1px] bg-neutral-200/50" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.15 }}
        >
          {/* Year Indicator/Marker */}
          <div className="absolute -left-[41px] sm:-left-[57px] top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-alabaster border border-champagne-gold flex items-center justify-center text-champagne-gold font-sans font-semibold text-[10px] sm:text-xs select-none z-10">
            {item.year}
          </div>

          {/* Timeline Content */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal leading-tight">
              {item.title}
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-slate-grey max-w-2xl leading-relaxed">
              {item.description}
            </p>

            {item.details && item.details.length > 0 && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 pt-4 border-t border-neutral-200/40 max-w-2xl">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-slate-grey">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

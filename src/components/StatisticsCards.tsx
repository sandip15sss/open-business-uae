"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatItem {
  icon?: LucideIcon;
  number: string;
  label: string;
}

interface StatisticsCardsProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
}

function AnimatedCounter({ value }: { value: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) return;

    const rawNum = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2] || "";
    const originalHasCommas = value.includes(",");

    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, rawNum, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        const rounded = Math.round(val);
        const formatted = originalHasCommas
          ? rounded.toLocaleString()
          : rounded.toString();
        node.textContent = formatted + suffix;
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={nodeRef}>0{value.replace(/[\d,]+/g, "")}</span>;
}

export default function StatisticsCards({ stats, columns = 4 }: StatisticsCardsProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${gridCols} gap-6 md:gap-0 divide-y-0 md:divide-x divide-neutral-200/50`}>
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            className="text-center flex flex-col items-center justify-center p-4 md:p-6 space-y-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.1 }}
          >
            {/* Icon wrapper */}
            {Icon && (
              <div className="w-10 h-10 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold mb-1">
                <Icon className="w-5 h-5" strokeWidth={1.2} />
              </div>
            )}

            {/* Number */}
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-champagne-gold tracking-tight select-none">
              <AnimatedCounter value={stat.number} />
            </span>

            {/* Label */}
            <span className="font-sans text-[10px] md:text-xs font-semibold text-slate-grey tracking-[0.2em] uppercase">
              {stat.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

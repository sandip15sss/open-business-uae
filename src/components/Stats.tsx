"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  {
    number: "1,000+",
    label: "Companies Formed",
  },
  {
    number: "15+",
    label: "Years of Experience",
  },
  {
    number: "50+",
    label: "Nationalities Served",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
];

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

export default function Stats() {
  return (
    <section className="pt-20 pb-10 md:py-24 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Horizontal Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-neutral-200/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center justify-center p-4 md:p-6 space-y-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.1 }}
            >
              {/* Number */}
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-champagne-gold tracking-tight select-none">
                <AnimatedCounter value={stat.number} />
              </span>

              {/* Label */}
              <span className="font-sans text-[10px] md:text-xs font-semibold text-slate-grey tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

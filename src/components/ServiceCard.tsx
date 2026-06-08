"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
  features: string[];
  benefits: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className="bg-transparent border border-neutral-200/40 p-8 flex flex-col justify-between group hover:border-[#C5A880]/50 transition-all duration-[0.8s] ease-editorial"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
    >
      <div className="space-y-6 text-left">
        {/* Header Section: Icon & Title */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold group-hover:border-champagne-gold/40 transition-all duration-300">
            <Icon className="w-5 h-5" strokeWidth={1.2} />
          </div>
          <h3 className="font-serif text-xl font-bold tracking-tight text-charcoal uppercase group-hover:text-champagne-gold transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
          {description}
        </p>

        {/* Benefits Quote */}
        <div className="border-l border-champagne-gold/50 pl-4 py-1.5 bg-transparent">
          <span className="font-sans text-[9px] tracking-widest text-champagne-gold font-bold uppercase block mb-0.5">Primary Benefit</span>
          <p className="font-sans text-xs text-slate-grey italic">“{benefits}”</p>
        </div>

        {/* Features List */}
        <div className="space-y-2.5 pt-2">
          <span className="font-sans text-[9px] tracking-widest text-charcoal/40 font-semibold uppercase block">Key Offerings</span>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-grey font-sans leading-relaxed">
                <Check className="w-3.5 h-3.5 text-champagne-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="pt-8">
        <Link
          href="/contact"
          className="w-full bg-charcoal hover:bg-champagne-gold text-alabaster hover:text-charcoal border border-charcoal/20 hover:border-champagne-gold text-center py-3.5 transition-all duration-500 font-sans font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 group"
        >
          Setup Business Now
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

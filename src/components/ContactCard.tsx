"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  title: string;
  value: string;
  subtext?: string;
  href?: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ContactCard({
  title,
  value,
  subtext,
  href,
  icon: Icon,
  delay = 0,
}: ContactCardProps) {
  const CardContent = (
    <>
      <div className="w-10 h-10 rounded-full border border-champagne-gold/20 bg-transparent text-champagne-gold flex items-center justify-center flex-shrink-0 group-hover:border-champagne-gold/40 transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={1.2} />
      </div>
      <div className="space-y-1">
        <span className="font-sans text-[9px] tracking-widest text-charcoal/40 font-bold uppercase block">
          {title}
        </span>
        <span className="font-serif text-lg font-normal text-charcoal block group-hover:text-champagne-gold transition-colors leading-snug">
          {value}
        </span>
        {subtext && (
          <span className="font-sans text-xs text-slate-grey block">
            {subtext}
          </span>
        )}
      </div>
    </>
  );

  const cardClasses =
    "bg-transparent border border-neutral-200/40 rounded-none p-5 flex items-start gap-4 hover:border-champagne-gold/40 transition-all duration-500 group text-left w-full shadow-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay }}
      className="w-full"
    >
      {href ? (
        <a href={href} className={cardClasses}>
          {CardContent}
        </a>
      ) : (
        <div className={cardClasses}>{CardContent}</div>
      )}
    </motion.div>
  );
}

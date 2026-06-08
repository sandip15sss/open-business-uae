"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbs: { name: string; href?: string }[];
}

export default function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-alabaster">
      {/* Radial decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(197,168,128,0.06),transparent_55%)] pointer-events-none" />
      
      {/* Soft gold glowing background behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.04),transparent_70%)] filter blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center gap-2 mb-6 font-sans text-xs sm:text-sm font-semibold tracking-wide text-charcoal/60 select-none">
          <Link href="/" className="hover:text-champagne-gold transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-champagne-gold" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-champagne-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-charcoal/80">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Title */}
        <motion.h1
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal mb-6 uppercase text-balance-custom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {title}
        </motion.h1>

        {/* Luxury gold separator line/dot */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-champagne-gold" />
          <div className="w-2.5 h-2.5 rounded-full bg-champagne-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-champagne-gold" />
        </div>

        {/* Description */}
        <motion.p
          className="font-sans text-base sm:text-lg text-slate-grey max-w-2xl mx-auto leading-relaxed text-balance-custom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {description}
        </motion.p>

      </div>
    </section>
  );
}

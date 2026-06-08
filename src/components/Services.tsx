"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-32 bg-alabaster text-charcoal relative overflow-hidden border-t border-neutral-200/50">
      {/* Background soft radial glow */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.04),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-6 mb-12 md:mb-24">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-champagne-gold uppercase whitespace-nowrap">
            Portfolio of Sectors
          </span>
          <div className="h-px bg-gradient-to-r from-champagne-gold/30 to-transparent w-full" />
        </div>

        {/* Services Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Large Company Formation Sector (takes 4 cols) */}
          <motion.div
            className="lg:col-span-4 bg-transparent border border-[#C5A880]/30 p-10 flex flex-col justify-between relative overflow-hidden min-h-[480px] group transition-all duration-[0.8s] ease-editorial"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-8 relative z-10 text-left">
              {/* Premium Gold Pillars Icon */}
              <svg className="w-16 h-16 text-champagne-gold" viewBox="0 0 100 100" fill="none">
                <path d="M15 80h70v2H15v-2z" fill="currentColor" />
                <path d="M22 80V40h6v40h-6zm18 0V40h6v40h-6zm18 0V40h6v40h-6zm18 0V40h6v40h-6z" fill="currentColor" opacity="0.6" />
                <path d="M12 40l38-24 38 24H12z" fill="currentColor" />
                <path d="M50 24v6" stroke="#111111" strokeWidth="1" />
              </svg>

              <div className="space-y-4">
                <h3 className="font-serif text-3xl font-normal text-charcoal tracking-tight uppercase">
                  Company Formation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  Establish a prestigious mainland or freezone entity structured specifically for international commercial operations and full ownership protection.
                </p>
              </div>
            </div>

            {/* Micro-interaction link */}
            <div className="relative z-10 pt-8 text-left">
              <Link href="/services" className="inline-flex items-center gap-1.5 font-sans text-xs tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                Explore Setup
                <span className="relative overflow-hidden block">
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Other Sectors (takes 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Card 1: Visa Services */}
            <motion.div
              className="bg-transparent border border-neutral-200/40 p-10 flex flex-col justify-between group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="space-y-6 text-left">
                <div className="flex-shrink-0">
                  {/* Gold Passport Icon */}
                  <svg className="w-12 h-12 text-champagne-gold" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1" />
                    <ellipse cx="30" cy="30" rx="10" ry="22" stroke="currentColor" strokeWidth="1" />
                    <line x1="8" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="1" />
                    <path d="M12 40c10-3 26-3 36 0M12 20c10 3 26 3 36 0" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold tracking-tight uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                    Visa Services
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                    Investor residency permits, corporate worker visas, and premium Golden Visa setups.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-left">
                <Link href="/services" className="inline-flex items-center gap-1 font-sans text-[10px] tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                  Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Bank Account Assistance */}
            <motion.div
              className="bg-transparent border border-neutral-200/40 p-10 flex flex-col justify-between group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="space-y-6 text-left">
                <div className="flex-shrink-0">
                  {/* Gold Credit Card Icon */}
                  <svg className="w-12 h-12 text-champagne-gold" viewBox="0 0 60 60" fill="none">
                    <rect x="8" y="14" width="44" height="32" rx="0" stroke="currentColor" strokeWidth="1" />
                    <line x1="8" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="32" width="10" height="6" rx="0" fill="currentColor" opacity="0.8" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold tracking-tight uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                    Banking Introductions
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                    Establish accounts with top-tier UAE private banking and digital institutions.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-left">
                <Link href="/services" className="inline-flex items-center gap-1 font-sans text-[10px] tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                  Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Card 3: VAT Registration */}
            <motion.div
              className="bg-transparent border border-neutral-200/40 p-10 flex flex-col justify-between group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div className="space-y-6 text-left">
                <div className="flex-shrink-0">
                  {/* Gold Percent Icon */}
                  <svg className="w-12 h-12 text-champagne-gold" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1" />
                    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
                    <circle cx="36" cy="36" r="3" stroke="currentColor" strokeWidth="1" />
                    <line x1="36" y1="24" x2="24" y2="36" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold tracking-tight uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                    VAT & Tax Compliance
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                    Corporate tax planning, FTA audits, and monthly bookkeeping compliance.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-left">
                <Link href="/services" className="inline-flex items-center gap-1 font-sans text-[10px] tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                  Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Business Advisory */}
            <motion.div
              className="bg-transparent border border-neutral-200/40 p-10 flex flex-col justify-between group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <div className="space-y-6 text-left">
                <div className="flex-shrink-0">
                  {/* Gold Advisory Icon */}
                  <svg className="w-12 h-12 text-champagne-gold" viewBox="0 0 60 60" fill="none">
                    <path d="M12 28l6-6 10 10 16-16 6 6-22 22L12 28z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-bold tracking-tight uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                    Business Advisory
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                    Strategic corporate structuring, feasibility modeling, and PRO liaison support.
                  </p>
                </div>
              </div>
              <div className="pt-6 text-left">
                <Link href="/services" className="inline-flex items-center gap-1 font-sans text-[10px] tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                  Detail <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 1.2,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-alabaster w-full">
      {/* Full-width skyline background asset */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_skyline_ribbon.png"
          alt="Dubai Skyline with Luxury Golden Ribbon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        {/* Soft, premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-alabaster via-alabaster/95 lg:via-alabaster/80 to-transparent pointer-events-none" />
      </div>

      {/* Upper content container wrapping H1, Paragraph, CTA Buttons */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-28 relative z-10 flex-grow flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl text-left my-4">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Concierge Editorial Heading */}
            <motion.h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-charcoal leading-[1.1] text-balance-custom"
              variants={itemVariants}
            >
              The Definitive
              <br />
              <span className="font-serif italic font-light text-champagne-gold tracking-normal">Pathway</span> to{" "}
              <span className="font-serif font-bold italic tracking-tight text-charcoal">Open a Business</span>
              <br />
              in Dubai.
            </motion.h1>

            {/* Muted description */}
            <motion.p
              className="text-xs sm:text-sm md:text-base text-slate-grey font-sans max-w-xl leading-relaxed text-balance-custom"
              variants={itemVariants}
            >
              For global leaders and fast-growing startups, we deliver frictionless company incorporation, trade licensing, residency solutions, and corporate bank onboarding.
            </motion.p>

            {/* Concierge CTAs with premium golden accent button styles */}
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
              variants={itemVariants}
            >
              <Link
                href="/services"
                className="bg-[#111111] hover:bg-neutral-800 text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm transition-colors duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                Explore Services
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/contact"
                className="border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal row of trust items positioned absolutely at bottom-6 fold */}
      <div className="absolute bottom-6 left-0 w-full md:px-16 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-3 gap-x-2 gap-y-1 md:flex md:flex-wrap md:items-center md:gap-x-8 md:gap-y-3 pt-3 md:pt-4 border-t border-neutral-200/50 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              "100% Client Ownership",
              "Concierge Legal Support",
              "Full Capital Repatriation",
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-2 text-charcoal/85 font-sans text-[9px] xs:text-[10px] md:text-xs tracking-wider uppercase font-semibold"
                variants={badgeVariants}
              >
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-champagne-gold/80 flex-shrink-0" strokeWidth={1.5} />
                <span className="leading-tight">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

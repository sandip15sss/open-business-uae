"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-alabaster px-6 py-24 text-center">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Editorial Subtitle */}
        <motion.span 
          className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.25em] block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2 }}
        >
          Error 404
        </motion.span>

        {/* Serif Heading */}
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl font-normal text-charcoal leading-tight uppercase"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.1 }}
        >
          Page <span className="font-serif italic font-light text-champagne-gold">Not Found.</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="font-sans text-sm sm:text-base text-slate-grey leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.2 }}
        >
          The luxury digital pathway you requested is currently unavailable. It may have been relocated or the address might be incorrect.
        </motion.p>

        {/* Call to action */}
        <motion.div 
          className="pt-4 flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#111111] text-white hover:bg-neutral-800 font-sans font-bold text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

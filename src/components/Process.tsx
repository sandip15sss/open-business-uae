"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    description: "Align goals and map out the corporate structure.",
  },
  {
    num: "02",
    title: "Structure Planning",
    description: "Formulate business licensing jurisdictions and options.",
  },
  {
    num: "03",
    title: "Documentation",
    description: "Notarize papers, compile profiles, and file registrations.",
  },
  {
    num: "04",
    title: "Official Approvals",
    description: "Acquire business license, and secure entry clearances.",
  },
  {
    num: "05",
    title: "Operational Launch",
    description: "Establish banking accounts and stamp residency visas.",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 md:mb-24 space-y-4">
          <span className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.25em] block">
            Execution Protocol
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-tight uppercase">
            A Seamless Pathway <span className="font-serif italic font-light text-champagne-gold">to Success.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-grey max-w-xl leading-relaxed">
            Our systematic framework handles government relations and corporate compliance to launch your venture quickly.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-stretch relative">
          
          {/* Desktop Thin Connecting Line */}
          <div className="hidden lg:block absolute top-[20px] left-[5%] right-[5%] h-[1px] bg-neutral-200/50 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-left flex flex-col justify-start items-start relative z-10 group space-y-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.15 }}
            >
              {/* Step Circle & Number */}
              <div className="w-10 h-10 rounded-full border border-champagne-gold bg-alabaster text-champagne-gold font-serif text-sm font-semibold flex items-center justify-center relative z-10 transition-colors duration-500 group-hover:bg-champagne-gold group-hover:text-alabaster select-none">
                {step.num}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 pt-2">
                <h3 className="font-serif text-lg font-bold text-charcoal tracking-tight group-hover:text-champagne-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Horizontal Arrow link for desktop (except last step) */}
              {index < 4 && (
                <div className="hidden lg:block absolute top-[12px] -right-4 text-neutral-300 group-hover:text-champagne-gold transition-colors duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

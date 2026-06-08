"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StepItem {
  num: number;
  title: string;
  description: string;
  svg: React.ReactNode;
}

interface ProcessStepsProps {
  stepsList?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    num: 1,
    title: "Consultation",
    description: "Expert guidance to help you find the right business structure.",
    svg: (
      <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FBFBFA" />
        <circle cx="35" cy="40" r="7" fill="#111111" />
        <path d="M22 68c0-8 6-14 13-14h0c7 0 13 6 13 14" fill="#111111" />
        <circle cx="65" cy="45" r="7" fill="#C5A880" />
        <path d="M55 72c0-6 4-11 10-11h0c6 0 10 5 10 11" fill="#C5A880" />
        <path d="M42 32h16c3 0 5 2 5 5v5c0 3-2 5-5 5h-6l-5 5v-5c-3 0-5-2-5-5v-5c0-3 2-5 5-5z" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
        <circle cx="47" cy="38" r="1" fill="#111111" />
        <circle cx="50" cy="38" r="1" fill="#111111" />
        <circle cx="53" cy="38" r="1" fill="#111111" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Planning",
    description: "Custom solutions, business plan, and freezone solution tailored to your goals.",
    svg: (
      <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FBFBFA" />
        <circle cx="50" cy="50" r="16" stroke="#111111" strokeWidth="1" />
        <path d="M50 36l3 14-3 4-3-4z" fill="#C5A880" />
        <path d="M50 64l3-14-3-4-3 4z" fill="#111111" />
        <line x1="50" y1="28" x2="50" y2="32" stroke="#111111" strokeWidth="1" />
        <line x1="50" y1="68" x2="50" y2="72" stroke="#111111" strokeWidth="1" />
        <line x1="28" y1="50" x2="32" y2="50" stroke="#111111" strokeWidth="1" />
        <line x1="68" y1="50" x2="72" y2="50" stroke="#111111" strokeWidth="1" />
        <circle cx="70" cy="32" r="6" stroke="#C5A880" strokeWidth="1" />
        <circle cx="28" cy="30" r="4" stroke="#C5A880" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Documentation",
    description: "Prepare and check all required documents accurately.",
    svg: (
      <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FBFBFA" />
        <rect x="28" y="32" width="44" height="40" rx="0" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
        <rect x="36" y="24" width="28" height="8" rx="0" fill="#C5A880" />
        <line x1="36" y1="44" x2="64" y2="44" stroke="#111111" strokeWidth="1" />
        <line x1="36" y1="52" x2="64" y2="52" stroke="#111111" strokeWidth="1" />
        <line x1="36" y1="60" x2="54" y2="60" stroke="#111111" strokeWidth="1" />
        <circle cx="70" cy="65" r="10" fill="#C5A880" />
        <path d="M66 65l3 3 5-5" stroke="#FBFBFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Approval",
    description: "Secure approvals from authorities and obtain your license.",
    svg: (
      <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FBFBFA" />
        <path d="M25 72h50v4H25v-4z" fill="#111111" />
        <path d="M30 72V48h5v24h-5zm10 0V48h5v24h-5zm10 0V48h5v24h-5zm10 0V48h5v24h-5zm10 0V48h5v24h-5z" fill="#C5A880" />
        <path d="M22 48l28-16 28 16H22z" fill="#111111" />
        <circle cx="50" cy="72" r="9" fill="#C5A880" />
        <path d="M47 72l2 2 4-4" stroke="#FBFBFA" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "Launch",
    description: "Your business is ready! Open accounts and start operations.",
    svg: (
      <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="42" fill="#FBFBFA" />
        <path d="M50 25c0 0 12 12 12 28a12 12 0 01-24 0c0-16 12-28 12-28z" fill="#111111" />
        <path d="M50 25s6 8 6 18c0 8-6 10-6 10s-6-2-6-10c0-10 6-18 6-18z" fill="#C5A880" />
        <path d="M38 58c-4 4-8 12-8 12s8-2 12-6M62 58c4 4 8 12 8 12s-8-2-12-6" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <path d="M47 70c0 0 3 8 3 12 0-4 3-12 3-12" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProcessSteps({ stepsList = defaultSteps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-stretch relative w-full">
      {/* Desktop Thin Connecting Line */}
      <div className="hidden lg:block absolute top-[20px] left-[5%] right-[5%] h-[1px] bg-neutral-200/50 z-0" />

      {stepsList.map((step, index) => (
        <motion.div
          key={index}
          className="text-left flex flex-col justify-start items-start relative z-10 group space-y-4 bg-transparent"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.15 }}
        >
          {/* Step Circle & Number */}
          <div className="w-10 h-10 rounded-full border border-champagne-gold bg-alabaster text-champagne-gold font-serif text-sm font-semibold flex items-center justify-center relative z-10 transition-colors duration-500 group-hover:bg-champagne-gold group-hover:text-alabaster select-none">
            {step.num}
          </div>

          {/* Icon Illustration */}
          <div className="transform group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] -ml-2">
            {step.svg}
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

          {/* Connecting Arrow */}
          {index < stepsList.length - 1 && (
            <div className="hidden lg:block absolute top-[12px] -right-4 text-neutral-300 group-hover:text-champagne-gold transition-colors duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "0% Personal Income Tax",
    description: "Incorporate with absolute tax optimization: 0% personal income tax and robust exemptions.",
    svg: (
      <svg className="w-24 h-24 mb-6" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" fill="#FBFBFA" />
        <circle cx="60" cy="60" r="40" fill="#C5A880" fillOpacity="0.06" />
        <path d="M25 90h70" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <path d="M35 90V65h8v25h-8z" fill="#111111" />
        <path d="M48 90V45h12v45H48z" fill="#C5A880" />
        <path d="M66 90V55h10v35H66z" fill="#111111" />
        <path d="M80 90V70h8v20h-8z" fill="#C5A880" fillOpacity="0.4" />
        <circle cx="60" cy="28" r="10" fill="#C5A880" />
        <text x="60" y="31.5" fill="#111111" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-inter)">0%</text>
        <path d="M60 12v4M60 40v4M44 28h4M72 28h4" stroke="#C5A880" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Global Market Access",
    description: "Connect with the world from one of the most strategic, elite logistics hubs globally.",
    svg: (
      <svg className="w-24 h-24 mb-6" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" fill="#FBFBFA" />
        <circle cx="60" cy="60" r="32" stroke="#111111" strokeWidth="1" />
        <path d="M28 60h64M60 28v64" stroke="#111111" strokeWidth="0.75" />
        <path d="M33 45c15-5 39-5 54 0M33 75c15 5 39 5 54 0" stroke="#111111" strokeWidth="0.75" />
        <path d="M48 30c5 15 5 45 0 60M72 30c-5 15-5 45 0 60" stroke="#111111" strokeWidth="0.75" />
        <ellipse cx="60" cy="60" rx="42" ry="16" stroke="#C5A880" strokeWidth="1" transform="rotate(-30 60 60)" strokeDasharray="4 3" />
        <path d="M85 30l4-2-2 5h-2v-3z" fill="#C5A880" />
        <path d="M30 85l3 3-5 1v-2l2-2z" fill="#C5A880" />
      </svg>
    ),
  },
  {
    title: "Sovereign Frameworks",
    description: "Maintain complete commercial independence with 100% foreign business ownership.",
    svg: (
      <svg className="w-24 h-24 mb-6" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" fill="#FBFBFA" />
        <path d="M30 80s10-15 25-15h10c15 0 25 15 25 15" stroke="#111111" strokeWidth="1" strokeLinecap="round" />
        <circle cx="45" cy="45" r="7" fill="#111111" />
        <circle cx="75" cy="45" r="7" fill="#C5A880" />
        <path d="M40 85h40v10H40V85z" fill="#C5A880" fillOpacity="0.4" />
        <rect x="52" y="55" width="16" height="22" rx="1" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
        <line x1="56" y1="62" x2="64" y2="62" stroke="#C5A880" strokeWidth="1" />
        <line x1="56" y1="68" x2="64" y2="68" stroke="#111111" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "International Banking",
    description: "Seamless cash flow integration with premium multi-currency digital corporate bank accounts.",
    svg: (
      <svg className="w-24 h-24 mb-6" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="48" fill="#FBFBFA" />
        <path d="M30 82h60v6H30v-6z" fill="#111111" />
        <path d="M36 82V52h6v30h-6zm18 0V52h6v30h-6zm18 0V52h6v30h-6z" fill="#C5A880" />
        <path d="M26 52l34-20 34 20H26z" fill="#111111" />
        <rect x="62" y="60" width="34" height="22" rx="1" fill="#111111" stroke="#C5A880" strokeWidth="0.75" />
        <circle cx="68" cy="66" r="2" fill="#C5A880" />
        <circle cx="40" cy="88" r="8" fill="#C5A880" />
        <text x="40" y="91" fill="#111111" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="var(--font-inter)">$</text>
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 md:mb-24 space-y-4">
          <span className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.25em] block">
            Strategic Gateway
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-tight uppercase">
            Why Leaders Choose <span className="font-serif italic font-light text-champagne-gold">the UAE.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-grey max-w-xl leading-relaxed">
            A prestigious, zero-tax environment engineered specifically to optimize and protect global corporate assets.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200/40 border-t border-b border-neutral-200/40 py-6 md:py-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-left flex flex-col justify-start items-start p-6 space-y-6 group bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: index * 0.1 }}
            >
              {/* SVG Graphic */}
              <div className="transform group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
                {feature.svg}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-bold text-charcoal tracking-tight group-hover:text-champagne-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

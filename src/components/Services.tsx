"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Company Formation",
      description: "Establish a prestigious mainland or freezone entity structured specifically for international commercial operations and full ownership protection.",
      link: "/services",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 100 100" fill="none">
          <path d="M15 80h70v2H15v-2z" fill="currentColor" />
          <path d="M22 80V40h6v40h-6zm18 0V40h6v40h-6zm18 0V40h6v40h-6zm18 0V40h6v40h-6z" fill="currentColor" opacity="0.6" />
          <path d="M12 40l38-24 38 24H12z" fill="currentColor" />
          <path d="M50 24v6" stroke="#111111" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: "Visa Services",
      description: "Investor residency permits, corporate worker visas, and premium Golden Visa setups.",
      link: "/services",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1" />
          <ellipse cx="30" cy="30" rx="10" ry="22" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="1" />
          <path d="M12 40c10-3 26-3 36 0M12 20c10 3 26 3 36 0" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: "Banking Introductions",
      description: "Establish accounts with top-tier UAE private banking and digital institutions.",
      link: "/services",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <rect x="8" y="14" width="44" height="32" rx="0" stroke="currentColor" strokeWidth="1" />
          <line x1="8" y1="24" x2="52" y2="24" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="32" width="10" height="6" rx="0" fill="currentColor" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "VAT & Tax Compliance",
      description: "Corporate tax planning, FTA audits, and monthly bookkeeping compliance.",
      link: "/services",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1" />
          <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1" />
          <circle cx="36" cy="36" r="3" stroke="currentColor" strokeWidth="1" />
          <line x1="36" y1="24" x2="24" y2="36" stroke="currentColor" strokeWidth="1" />
        </svg>
      ),
    },
    {
      title: "Business Advisory",
      description: "Strategic corporate structuring, feasibility modeling, and PRO liaison support.",
      link: "/services",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <path d="M12 28l6-6 10 10 16-16 6 6-22 22L12 28z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "POWER OF ATTORNEY",
      description: "Official drafting, Dubai Court notarization, and MOFA attestation services for legal, financial, and property matters.",
      link: "/services/power-of-attorney",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <path d="M16 10h28v40H16V10z" stroke="currentColor" strokeWidth="1" />
          <path d="M22 20h16M22 28h16M22 36h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="38" cy="38" r="4" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
        </svg>
      ),
    },
    {
      title: "AML REGISTRATION & COMPLIANCE",
      description: "Mandatory goAML portal registration, risk assessment, and regulatory compliance advisory for DNFBPs in the UAE.",
      link: "/services/aml-compliance",
      ctaText: "DETAIL ↗",
      icon: (className: string) => (
        <svg className={className} viewBox="0 0 60 60" fill="none">
          <path d="M30 8s14 4 14 14v12c0 10-14 18-14 18S16 44 16 34V22c0-10 14-14 14-14z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 28l4 4 8-8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const featuredService = services[0];
  const remainingServices = services.slice(1);

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
        <div className="flex flex-col gap-8">

          {/* Featured Card (Top Row) */}
          <motion.div
            className="w-full bg-transparent border border-[#C5A880]/30 p-10 flex flex-col justify-between relative overflow-hidden min-h-[200px] group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
          >
            <div className="flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start max-w-4xl text-left">
                <div className="flex-shrink-0">
                  {featuredService.icon("w-16 h-16 text-champagne-gold")}
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-normal text-charcoal tracking-tight uppercase">
                    {featuredService.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                    {featuredService.description}
                  </p>
                </div>
              </div>

              {/* Micro-interaction link */}
              <div className="relative z-10 pt-4 md:pt-0 text-left flex-shrink-0">
                <Link href={featuredService.link} className="inline-flex items-center gap-1 font-sans text-xs tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                  {featuredService.ctaText.replace(" ↗", "")} <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Remaining 6 Services (3-column grid below) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-transparent border border-neutral-200/40 p-10 flex flex-col justify-between group transition-all duration-[0.8s] ease-editorial hover:border-[#C5A880]/50 min-h-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              >
                <div className="space-y-6 text-left">
                  <div className="flex-shrink-0">
                    {service.icon("w-12 h-12 text-champagne-gold")}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl font-bold tracking-tight uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="pt-6 text-left">
                  <Link href={service.link} className="inline-flex items-center gap-1 font-sans text-xs tracking-widest font-bold uppercase text-charcoal group-hover:text-champagne-gold transition-colors duration-300">
                    {service.ctaText.replace(" ↗", "")} <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

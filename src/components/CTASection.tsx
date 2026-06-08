"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function CTASection({
  title = "Ready to Establish Your UAE Presence?",
  subtitle = "Speak with our experts and start your company formation process today.",
  imageSrc = "/images/cta_office_desk.png",
  imageAlt = "Luxury Corporate Office Desk in Dubai",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Container Card */}
        <div className="bg-transparent border border-[#C5A880]/30 rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: CTA Texts & Buttons */}
          <motion.div
            className="lg:col-span-7 p-6 sm:p-10 lg:p-16 flex flex-col justify-center space-y-6 md:space-y-8 text-left relative z-10 bg-alabaster"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.25em] block">
                Initiate Onboarding
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal leading-tight uppercase">
                {title}
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-grey leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#111111] text-white hover:bg-neutral-800 font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                Book Consultation
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>
              
              <a
                href="https://wa.me/971301234567"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-600/30 text-emerald-700 bg-emerald-50/10 hover:bg-emerald-600 hover:text-white font-sans font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg className="w-4 h-4 fill-current text-emerald-600 group-hover:text-white transition-colors duration-300 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.222h.005c5.505 0 9.99-4.478 9.99-9.985C22 4.478 17.517 2 12.012 2zm4.7 13.99c-.197.55-.983 1.058-1.549 1.134-.555.074-1.282.1-3.666-.889-3.047-1.264-5.01-4.363-5.163-4.567-.152-.204-1.22-1.623-1.22-3.1 0-1.478.77-2.203 1.042-2.502.272-.3.6-.375.8-.375h.569c.18 0 .426-.068.665.506.248.598.847 2.07.92 2.219.073.15.122.324.023.523-.1.2-.149.323-.298.497-.148.174-.312.387-.446.521-.149.15-.304.313-.13.613.173.3.768 1.267 1.65 2.053.882.786 1.625 1.028 1.925 1.177.3.15.474.125.648-.074.173-.2.742-.862.94-1.157.198-.296.395-.247.666-.149.272.099 1.727.814 2.025.963.297.148.495.223.569.348.074.124.074.698-.124 1.248z" />
                </svg>
                WhatsApp Secure
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual office desk with skyline backdrop */}
          <motion.div
            className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-[#C5A880]/20"
            style={{ position: "relative" }}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-w: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] hover:scale-105"
            />
            {/* Visual overlay gradient blending image to left dark panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-alabaster/40 via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-alabaster/40 via-transparent to-transparent lg:hidden" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Globe2,
  Percent,
  Target,
  Compass,
  Award,
  Shield,
  CheckCircle,
  Briefcase,
  Users,
  Building,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatisticsCards from "@/components/StatisticsCards";
import Timeline from "@/components/Timeline";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";

const stats = [
  {
    icon: Building2,
    number: "500+",
    label: "Companies Formed",
  },
  {
    icon: Calendar,
    number: "7+",
    label: "Years Experience",
  },
  {
    icon: Globe2,
    number: "50+",
    label: "Nationalities Served",
  },
  {
    icon: Percent,
    number: "98%",
    label: "Success Rate",
  },
];

const timelineMilestones = [
  {
    year: "2011",
    title: "Founding in Dubai",
    description: "Launched with a core team of business setup advisors helping local entrepreneurs navigate Dubai mainland licenses.",
    details: ["Established relationships with Dubai DED", "Formed first 50 mainland companies"],
  },
  {
    year: "2015",
    title: "Freezone Expansion",
    description: "Partnered directly with major UAE Freezones including Ajman, RAKEZ, Shams freezone, DMCC, IFZA and Meydan providing clients with flexible tax-free environments.",
    details: ["Expanded office to Business Bay", "Recognized as a registered Ajman channel Partner"],
  },
  {
    year: "2019",
    title: "Full-Service Integration",
    description: "Added dedicated corporate banking assistance, VAT compliance division, and visa processing departments to deliver a true turn-key setup experience.",
    details: ["Established direct bank channel partnerships", "Passed 200+ successful visa approvals"],
  },
  {
    year: "2024",
    title: "Digital Integration & Global Reach",
    description: "Launched remote formation frameworks, enabling global entrepreneurs to open a business in the UAE from anywhere in the world.",
    details: ["Serviced entrepreneurs from over 50 countries", "Maintained a 98% setup success rate"],
  },
];

const differentiators = [
  {
    title: "Unrivaled Local Expertise",
    description: "Our legal experts have deep-rooted experience in UAE commercial laws, DED frameworks, and freezone regulations.",
    icon: Award,
  },
  {
    title: "End-to-End Assistance",
    description: "We cover everything from trade name registration, trade licenses, visas, bank account introduction, to VAT filings.",
    icon: Briefcase,
  },
  {
    title: "Absolute Transparency",
    description: "Zero hidden charges. We provide upfront costs and clear timelines for mainland, freezone, and offshore formations.",
    icon: Shield,
  },
  {
    title: "Dedicated Local Support",
    description: "Every client is assigned a dedicated business setup consultant to handhold them through every government step.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Who We Are"
        description="Providing premier corporate consulting, licensing, residency, and company formation solutions in Dubai and across the UAE."
        breadcrumbs={[{ name: "About Us" }]}
      />

      {/* Our Story Section */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-sans text-[10px] font-bold text-champagne-gold uppercase tracking-[0.25em] block">
                Our Story
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-tight uppercase">
                A Legacy of Business Setup <span className="font-serif italic font-light text-champagne-gold">Excellence.</span>
              </h2>

              <div className="w-12 h-[1px] bg-champagne-gold/40 my-6" />

              <p className="font-sans text-sm sm:text-base text-slate-grey leading-relaxed">
                For over 15 years, <strong>Open Business in UAE</strong> has stood as a trusted partner for global entrepreneurs, SMEs, and multi-national conglomerates. We simplify the complexities of entering the UAE market, handling local regulatory frameworks, and securing business entities in record time.
              </p>

              <p className="font-sans text-sm sm:text-base text-slate-grey leading-relaxed">
                Our founders started with a clear vision: to dismantle the bureaucratic barriers that often delay business launches. Today, we offer complete mainland, freezone, and offshore setups, visa processing, corporate banking support, and local corporate sponsorship arrangements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-charcoal">Licensed Legal Consultants</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-charcoal">Government Liaison Officers (PRO)</span>
                </div> */}
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-charcoal">Official Freezone Strategic Partners</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-champagne-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="font-sans text-xs sm:text-sm font-semibold text-charcoal">100% Client Ownership Advisory</span>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden border border-[#C5A880]/20 group">
                <Image
                  src="/images/cta_office_desk.png"
                  alt="Dubai Corporate Office Building View"
                  fill
                  sizes="(max-w: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Mission Card */}
            <motion.div
              className="border border-[#C5A880]/30 p-8 sm:p-12 flex flex-col justify-between items-start group relative overflow-hidden bg-alabaster"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold bg-transparent">
                  <Target className="w-5 h-5" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight uppercase text-charcoal">
                  Our Mission
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  To empower global innovators, startups, and enterprises by delivering transparent, efficient, and cost-effective business formation solutions in the UAE. We strive to handle bureaucratic complexities so our clients can focus entirely on growth and building value.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="border border-[#C5A880]/30 p-8 sm:p-12 flex flex-col justify-between items-start group relative overflow-hidden bg-alabaster"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 1.2, delay: 0.1 }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold bg-transparent">
                  <Compass className="w-5 h-5" strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-tight uppercase text-charcoal">
                  Our Vision
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  To remain the premier business setup gateway in the Middle East, recognized globally for absolute client satisfaction, absolute legal integrity, and introducing revolutionary friction-free digital frameworks for corporate operations in the UAE.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Why Choose Open Business"
            subtitle="Extending premium client service and unparalleled local market integration to ensure your business structure remains optimized, fully compliant, and scalable."
            badge="Differentiators"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200/40 border-t border-b border-neutral-200/40 py-12">
            {differentiators.map((diff, index) => (
              <FeatureCard
                key={index}
                title={diff.title}
                description={diff.description}
                icon={diff.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Trusted Worldwide"
            subtitle="A numerical testament to our business formation track record and setup capabilities across Dubai and UAE."
          />
          <StatisticsCards stats={stats} columns={4} />
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Our Journey"
            subtitle="From a local consulting boutique to a premier end-to-end global setup agency in Dubai."
            badge="Milestones"
          />
          <Timeline items={timelineMilestones} />
        </div>
      </section>

      {/* Business Setup Expertise */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="UAE Setup Capabilities"
            subtitle="Expertise in all major UAE licensing jurisdictions to support your strategic goals."
            badge="Jurisdictions"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* Mainland */}
            <div className="bg-transparent border border-[#C5A880]/20 p-8 flex flex-col justify-between hover:border-champagne-gold/40 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-champagne-gold" strokeWidth={1.2} />
                  <h3 className="font-serif text-xl font-normal text-charcoal uppercase">MAINLAND Setup</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  Establish a mainland corporation under the Dubai Department of Economy and Tourism (DET). Perfect for local UAE market trade, commercial stores, and operating anywhere inside the country.
                </p>
                <ul className="space-y-2 pt-4 border-t border-neutral-200/40 font-sans text-xs text-slate-grey">
                  <li className="flex items-center gap-2">✓ 100% Foreign Ownership on commercial activities</li>
                  <li className="flex items-center gap-2">✓ No geographical limitations on trading</li>
                  <li className="flex items-center gap-2">✓ Direct access to government tenders</li>
                </ul>
              </div>
            </div>

            {/* Freezone */}
            <div className="bg-transparent border border-[#C5A880]/20 p-8 flex flex-col justify-between hover:border-champagne-gold/40 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-champagne-gold" strokeWidth={1.2} />
                  <h3 className="font-serif text-xl font-normal text-charcoal uppercase">FREEZONE Setup</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  Form a business in one of the UAE's 45+ premier economic freezones. Perfect for consultancy, digital startups, service agencies, and global import-export traders looking for absolute tax optimization.
                </p>
                <ul className="space-y-2 pt-4 border-t border-neutral-200/40 font-sans text-xs text-slate-grey">
                  <li className="flex items-center gap-2">✓ 100% Personal & Corporate Tax exemptions</li>
                  <li className="flex items-center gap-2">✓ 100% Capital and profit repatriation</li>
                  <li className="flex items-center gap-2">✓ Flexi-desk and co-working workspace setups</li>
                </ul>
              </div>
            </div>

            {/* Offshore */}
            <div className="bg-transparent border border-[#C5A880]/20 p-8 flex flex-col justify-between hover:border-champagne-gold/40 transition-all duration-500">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-champagne-gold" strokeWidth={1.2} />
                  <h3 className="font-serif text-xl font-normal text-charcoal uppercase">OFFSHORE Setup</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                  Form an offshore company under Jafza (Jebel Ali) or RAK ICC. Designed for holding assets, intellectual property custody, global investments, and tax planning.
                </p>
                <ul className="space-y-2 pt-4 border-t border-neutral-200/40 font-sans text-xs text-slate-grey">
                  <li className="flex items-center gap-2">✓ Complete corporate anonymity and confidentiality</li>
                  <li className="flex items-center gap-2">✓ Ideal for global corporate asset holding</li>
                  <li className="flex items-center gap-2">✓ Ability to open corporate bank accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Story?"
        subtitle="Schedule a free consultation session with our senior corporate advisors to structure your UAE success."
      />
    </>
  );
}

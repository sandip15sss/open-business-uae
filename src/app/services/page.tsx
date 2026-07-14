"use client";

import React from "react";
import {
  Building2,
  FileText,
  Users,
  CreditCard,
  Percent,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import StatisticsCards from "@/components/StatisticsCards";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

const servicesList = [
  {
    title: "Company Formation",
    description: "End-to-end formation across Dubai Mainland, 45+ Freezones, or UAE Offshore jurisdictions, custom-tailored to your exact business goals.",
    icon: Building2,
    benefits: "Full legal compliance and structures optimized for maximum tax savings.",
    features: [
      "Trade name registration & approvals",
      "Drafting Memorandum of Association (MOA)",
      "Mainland & Freezone corporate registration",
      "100% legal ownership structuring support",
    ],
  },
  {
    title: "Business Licensing",
    description: "Acquire commercial, professional, industrial, or tourism trade licenses with complete regulatory approvals from governmental departments.",
    icon: FileText,
    benefits: "Avoid delays and license rejections with expert pre-evaluation checksheets.",
    features: [
      "License type selection (Commercial, Service, Trade)",
      "External approvals coordination (Dubai custom, RTA, RERA approval etc.)",
      "Trade license amendments and renewals",
      "Special activity permissions & compliance audits",
    ],
  },
  {
    title: "Visa Services",
    description: "Manage residency visas, investor gold visas, family sponsorship, and corporate employee work permits with absolute convenience.",
    icon: Users,
    benefits: "Swift processing and hassle-free VIP medical fitness testing support.",
    features: [
      "10-Year UAE Gold Visa processing",
      "Investor & Partner visa arrangements",
      "Employee work entry permits & residency stamping",
      "Family and domestic staff visa sponsorships",
    ],
  },
  {
    title: "Bank Account Assistance",
    description: "Get introduced and secure business accounts with top tier local and international banking institutions operating inside the UAE.",
    icon: CreditCard,
    benefits: "Bypassing complex AML/compliance screening with pre-vetted dossiers.",
    features: [
      "Pre-evaluation of corporate file & shareholdings",
      "Introduction to premier UAE corporate banks",
      "Multi-currency bank account setup support",
      "Digital corporate banking solutions configuration",
    ],
  },
  {
    title: "VAT & Tax Registration",
    description: "Full tax registration, accounting alignment, corporate tax onboarding, and monthly VAT reporting under the Federal Tax Authority (FTA).",
    icon: Percent,
    benefits: "Mitigate expensive penalties and ensure total tax compliance.",
    features: [
      "FTA VAT registration & account setup",
      "Corporate Tax registration and filing preparations",
      "Tax accounting, ledger alignment & advice",
      "Accounting and Bookkeeping",
    ],
  },
  {
    title: "Business Advisory",
    description: "Strategic consulting, feasibility analysis, local market intelligence, brand localization, and corporate restructuring support.",
    icon: TrendingUp,
    benefits: "Position your brand for scalability and strategic profitability in the Middle East.",
    features: [
      "Market feasibility & expansion modeling",
      "Local corporate sponsor arrangements (where applicable)",
      "M&A, liquidation & restructuring consulting",
      "Corporate compliance & legal protection strategies",
    ],
  },
];

const serviceStats = [
  {
    icon: Zap,
    number: "24 Hours",
    label: "Average License SLA",
  },
  {
    icon: CheckCircle,
    number: "100%",
    label: "Visa Success Rate",
  },
  {
    icon: Clock,
    number: "7 Days",
    label: "Avg Bank Onboarding",
  },
  {
    icon: Award,
    number: "10+",
    label: "Partner Freezones",
  },
];

const benefitsList = [
  {
    title: "Vetted Professionals",
    description: "Work directly with legal and corporate setup experts who interact with UAE ministries daily, bypassing intermediary agencies.",
    icon: Award,
  },
  {
    title: "Strict Confidentiality",
    description: "We enforce strict security and NDA frameworks to safeguard all corporate files, intellectual property, and investor documents.",
    icon: ShieldCheck,
  },
  {
    title: "Zero Hidden Surcharges",
    description: "Our quotes are fully itemized, showing administrative fees, government licensing rates, and consultancy rates upfront.",
    icon: Percent,
  },
  {
    title: "Speedy Execution SLA",
    description: "We bypass standard processing backlogs through digital workflows and strong liaison ties with government departments.",
    icon: Zap,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Our Services"
        description="End-to-end corporate solutions designed to launch, support, and scale your business inside the UAE."
        breadcrumbs={[{ name: "Services" }]}
      />

      {/* Services Grid */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        {/* Background soft radial glow */}
        <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.04),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Comprehensive Corporate Solutions"
            subtitle="Explore our specialized services designed to establish and manage your UAE corporate assets."
            badge="Our Offerings"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                features={service.features}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="The Open Business Difference"
            subtitle="Why leading global brands and fast-growing startups trust us to establish their commercial footprint."
            badge="Why Us"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200/40 border-t border-b border-neutral-200/40 py-12">
            {benefitsList.map((benefit, index) => (
              <FeatureCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Statistics */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Service Speed & Performance"
            subtitle="Industry-leading turnaround times and metrics that define our setup efficiency."
          />
          <StatisticsCards stats={serviceStats} columns={4} />
        </div>
      </section>

      {/* Process Overview (Timeline) */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Our Simplified Setup Process"
            subtitle="Five clear steps to complete your business formation and start corporate operations in Dubai."
            badge="Process Workflow"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Setup?"
        subtitle="Speak with our setup experts for a comprehensive licensing quote and free consultation."
      />
    </>
  );
}

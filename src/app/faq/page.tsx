"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, MessageCircle } from "lucide-react";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

const faqCategories = [
  "Company Formation",
  "Business Licensing",
  "Visa Services",
  "Banking",
  "VAT & Tax",
  "General Questions",
];

const faqItems = [
  // Company Formation
  {
    question: "Can a foreigner own 100% of a company in Dubai Mainland?",
    answer: "Yes, under the updated UAE Commercial Companies Law, foreign investors can now achieve 100% ownership of mainland commercial companies, eliminating the previous requirement of having a local UAE national partner holding 51% of the shares for most trading activities.",
    category: "Company Formation",
  },
  {
    question: "What is the primary difference between Mainland and Freezone companies?",
    answer: "Mainland companies are registered under the Department of Economy and Tourism (DET) and can trade anywhere in the UAE and globally without geographic restrictions. Freezone companies are registered in specific economic zones, offering 100% tax exemptions and capital repatriation, but require a local distributor or agent to trade directly inside the mainland UAE retail market.",
    category: "Company Formation",
  },
  {
    question: "Can I register a company remotely without visiting the UAE?",
    answer: "Yes, we can establish your company remotely. We utilize digital registration frameworks to secure trade name approvals and sign registration forms online. However, you will need to travel to the UAE for biometric medical checks to secure your residency visa and open local bank accounts.",
    category: "Company Formation",
  },
  // Business Licensing
  {
    question: "How long does it take to obtain a trade license in Dubai?",
    answer: "The duration depends on the jurisdiction. Certain Freezone licenses (such as IFZA or Meydan) can be issued in as little as 24 to 48 hours. Mainland commercial licenses typically take between 3 to 5 business days, pending external approvals from governmental departments.",
    category: "Business Licensing",
  },
  {
    question: "Do I need a physical office space to obtain a trade license?",
    answer: "No, a physical office is not mandatory for all licenses. Many Freezones offer flexible co-working solutions, 'Flexi-Desks', or virtual offices (E-channel licenses) that satisfy government requirements. For mainland companies, a virtual office address or shared workspace contract is also acceptable for startup stages.",
    category: "Business Licensing",
  },
  // Visa Services
  {
    question: "How do I qualify for the UAE Golden Visa?",
    answer: "The 10-year Golden Visa is granted to foreign investors, entrepreneurs, exceptional talents, scientists, and outstanding students. Business founders can qualify by registering a company with a capital of at least AED 2 million or investing in real estate assets valued at AED 2 million or more.",
    category: "Visa Services",
  },
  {
    question: "Can I sponsor my family members under my business visa?",
    answer: "Yes, as an investor, partner, or executive employee with a valid residency visa, you can sponsor visas for your spouse, children (unmarried daughters of any age, sons up to 25), and parents. You can also sponsor domestic staff under specific salary and contract frameworks.",
    category: "Visa Services",
  },
  // Banking
  {
    question: "What documents are required to open a corporate bank account in the UAE?",
    answer: "Typically, banks require: your company trade license, Memorandum of Association (MOA), corporate structure certificates, passport/visa copies of the shareholders, a detailed corporate business profile/plan, and past 6 months of personal or corporate bank statements from the shareholders' home countries.",
    category: "Banking",
  },
  {
    question: "How long does it take to activate a corporate bank account?",
    answer: "Onboarding timelines range from 2 to 4 weeks depending on the business activities, corporate structure (single shareholder vs. holding structure), and AML (Anti-Money Laundering) background screening policies of the chosen banking institution.",
    category: "Banking",
  },
  // VAT & Tax
  {
    question: "What is the mandatory threshold for VAT registration in the UAE?",
    answer: "VAT registration is mandatory for any UAE-based business whose taxable supplies and imports exceed AED 375,000 over the preceding 12 months. Voluntary registration is available for businesses whose turnover exceeds AED 187,500.",
    category: "VAT & Tax",
  },
  {
    question: "What is the corporate tax rate in the UAE?",
    answer: "Beginning June 2023, the UAE implemented a standard corporate tax rate of 9% on taxable business profits exceeding AED 375,000. Profits below this threshold are taxed at 0% to support small startups and SMEs. Freezone companies matching specific qualifying criteria may also maintain 0% tax status.",
    category: "VAT & Tax",
  },
  // General Questions
  {
    question: "Do I need to reside in the UAE to run my UAE company?",
    answer: "No, you do not need to reside in the UAE. You can operate the company remotely from anywhere in the world. However, to keep your UAE residency visa active, the law requires you to enter the country at least once every 180 days.",
    category: "General Questions",
  },
  {
    question: "Can I open multi-currency bank accounts under a UAE company?",
    answer: "Yes, corporate bank accounts in the UAE support multi-currency facilities. You can open and hold accounts in AED, USD, EUR, GBP, CHF, and other major currencies to seamlessly handle global import-export or digital transactions.",
    category: "General Questions",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Frequently Asked Questions"
        description="Get instant answers about company registration, licensing regulations, corporate banking, residency visas, and tax obligations in the UAE."
        breadcrumbs={[{ name: "FAQs" }]}
      />

      {/* Accordion List Section */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Search Help Center"
            subtitle="Select a category or type queries below to find comprehensive setup answers."
            badge="Knowledge Base"
          />

          <FAQAccordion items={faqItems} categories={faqCategories} />
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Still Have Questions?"
            subtitle="Speak directly with our setup support desk or drop us an email, and our consultants will get back to you within 2 business hours."
            badge="Contact Support"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            {/* Phone Support */}
            <div className="bg-transparent p-6 rounded-none border border-[#C5A880]/20 flex items-start gap-4 hover:border-champagne-gold/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold flex-shrink-0">
                <Phone className="w-4 h-4" strokeWidth={1.2} />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] tracking-widest text-charcoal/40 font-bold uppercase block">Phone Support</span>
                <a href="tel:+971301234567" className="font-serif text-lg font-normal text-charcoal hover:text-champagne-gold transition-colors block leading-tight">
                  +971 30 123 4567
                </a>
                <span className="font-sans text-xs text-slate-grey block">Mon - Fri, 9am - 6pm</span>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-transparent p-6 rounded-none border border-[#C5A880]/20 flex items-start gap-4 hover:border-champagne-gold/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold flex-shrink-0">
                <Mail className="w-4 h-4" strokeWidth={1.2} />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] tracking-widest text-charcoal/40 font-bold uppercase block">Email Inquiries</span>
                <a href="mailto:hello@openbusiness.ae" className="font-serif text-lg font-normal text-charcoal hover:text-champagne-gold transition-colors block leading-tight">
                  hello@openbusiness.ae
                </a>
                <span className="font-sans text-xs text-slate-grey block">Replies within 2 hours</span>
              </div>
            </div>

            {/* WhatsApp Support */}
            <div className="bg-transparent p-6 rounded-none border border-[#C5A880]/20 flex items-start gap-4 hover:border-champagne-gold/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-green-600 fill-green-600/10" />
              </div>
              <div className="space-y-1">
                <span className="font-sans text-[9px] tracking-widest text-charcoal/40 font-bold uppercase block">Instant WhatsApp</span>
                <a href="https://wa.me/971301234567" target="_blank" rel="noopener noreferrer" className="font-serif text-lg font-normal text-charcoal hover:text-champagne-gold transition-colors block leading-tight">
                  Start Chat Now
                </a>
                <span className="font-sans text-xs text-slate-grey block">Online 24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <CTASection
        title="Need Custom Solutions?"
        subtitle="Schedule a deep dive consultation with our corporate licensing panel to review your unique structure."
      />
    </>
  );
}

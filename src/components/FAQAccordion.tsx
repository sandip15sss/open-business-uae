"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  categories: string[];
}

export default function FAQAccordion({ items, categories }: FAQAccordionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne-gold" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search for questions (e.g., license, bank)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border border-[#C5A880]/30 focus:border-champagne-gold rounded-none py-4 pl-12 pr-4 font-sans text-charcoal placeholder:text-slate-grey/50 focus:outline-none transition-all duration-300 text-sm"
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["All", ...categories].map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedIndex(null);
                }}
                className={`px-5 py-2.5 rounded-none font-sans text-[10px] tracking-widest uppercase font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-charcoal border-charcoal text-alabaster"
                    : "bg-transparent border-neutral-200/40 text-slate-grey hover:border-champagne-gold hover:text-champagne-gold"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-transparent border border-neutral-200/40 rounded-none overflow-hidden transition-all duration-500 hover:border-[#C5A880]/40 text-left"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-neutral-100/30 transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-charcoal leading-tight select-none">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold bg-transparent flex-shrink-0 transition-all duration-300 ${
                      isExpanded ? "rotate-180 border-champagne-gold text-champagne-gold bg-transparent" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-neutral-200/40 bg-transparent">
                        <p className="font-sans text-xs sm:text-sm text-slate-grey leading-relaxed">
                          {item.answer}
                        </p>
                        <span className="inline-block mt-4 px-2 py-0.5 rounded-none bg-champagne-gold/10 text-champagne-gold text-[9px] tracking-widest font-bold uppercase font-sans">
                          {item.category}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-transparent rounded-none border border-neutral-200/40">
            <p className="font-sans text-sm text-slate-grey">
              No matching questions found. Try search queries or choose another category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

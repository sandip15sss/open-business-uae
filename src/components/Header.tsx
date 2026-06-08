"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-alabaster/90 backdrop-blur-md border-b border-neutral-200/40 py-2"
          : "bg-alabaster/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group select-none">
              <div className="w-8 h-8 rounded-none border border-champagne-gold bg-transparent flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                <span className="font-serif text-sm font-bold text-champagne-gold select-none">O</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-lg font-bold tracking-tight text-charcoal leading-none group-hover:text-champagne-gold transition-colors duration-300">
                  Open Business
                </span>
                <span className="font-sans text-[9px] tracking-[0.2em] text-champagne-gold font-semibold uppercase leading-none mt-1">
                  in UAE
                </span>
              </div>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-champagne-gold hover:after:w-full after:transition-all after:duration-300 ${
                    isActive
                      ? "text-champagne-gold after:w-full"
                      : "text-charcoal hover:text-champagne-gold after:w-0"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-charcoal text-alabaster hover:bg-champagne-gold hover:text-charcoal font-sans font-bold text-[10px] tracking-widest uppercase px-6 py-3 rounded-none transition-all duration-500 flex items-center gap-1.5 active:scale-95"
            >
              Start Your Business
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-none text-charcoal hover:text-champagne-gold focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-editorial ${
          isOpen ? "max-h-96 opacity-100 border-t border-neutral-200/40 mt-2 bg-alabaster" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-alabaster border-b border-neutral-200/40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-sans text-xs tracking-widest uppercase font-semibold transition-colors ${
                  isActive ? "text-champagne-gold border-l-2 border-champagne-gold pl-2" : "text-charcoal hover:text-champagne-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-charcoal hover:bg-champagne-gold hover:text-charcoal text-alabaster text-center block font-sans font-bold text-xs tracking-widest uppercase py-4 rounded-none transition-all duration-300"
            >
              Start Your Business
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

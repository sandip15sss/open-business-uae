"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  FileText,
  Map,
  ShieldCheck,
  Send,
  Building,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";
import SectionHeader from "@/components/SectionHeader";

const WhatsAppIcon = ({ className, strokeWidth = 1.2 }: { className?: string; strokeWidth?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M17.49 15.3a1.49 1.49 0 0 1-.22 1.09c-.29.43-.88.75-1.36.85-1.12.23-2.58-.2-4.14-1.2A13.8 13.8 0 0 1 8 12.7c-1.3-1.34-1.84-2.67-1.63-3.79a1.76 1.76 0 0 1 .72-1.27c.41-.33.91-.39 1.25-.13.3.23.86.95 1 1.24.23.4.15.79-.13 1.15-.22.28-.46.52-.69.8a10.27 10.27 0 0 0 2.2 2.2c.28-.23.52-.47.8-.69.36-.28.75-.36 1.15-.13.29.14 1 .7 1.24 1A1.66 1.66 0 0 1 17.49 15.3Z" />
    <path d="M3 21l1.9-5.7A8.5 8.5 0 1 1 11.5 21c-1.6 0-3.13-.45-4.47-1.25L3 21Z" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const servicesDropdown = [
    "Company Formation (Mainland/Freezone)",
    "Business Licensing & Approvals",
    "Residency & Employment Visas",
    "Corporate Bank Account Opening",
    "VAT & Corporate Tax Registration",
    "General Business Advisory",
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,18}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service of interest";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear global submit error when user modifies fields
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: any = null;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.ok && data?.success) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          service: "",
          message: "",
        });
      } else {
        const errorMsg = data?.error || `Server error (status ${response.status}). Please try again later.`;
        setSubmitError(errorMsg);
      }
    } catch (err) {
      console.error("Submission fetch error:", err);
      setSubmitError("Failed to reach the server. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Contact Our Experts"
        description="Book your complimentary business formation consult today. Speak with our legal registration team."
        breadcrumbs={[{ name: "Contact" }]}
      />

      {/* Main Two-Column Layout */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Form Wrapper */}
            <div className="lg:col-span-7 bg-transparent border border-[#C5A880]/30 rounded-none p-6 sm:p-10 shadow-none text-left">
              <span className="font-sans text-[10px] tracking-widest text-champagne-gold font-bold uppercase block mb-2">
                Inquiry Form
              </span>
              <h2 className="font-serif text-3xl font-normal text-charcoal tracking-tight uppercase mb-6">
                Consultation Request
              </h2>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="font-sans text-xs font-semibold text-charcoal/80 block">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-transparent border rounded-none py-3 px-4 font-sans text-sm text-charcoal placeholder:text-slate-grey/50 focus:outline-none transition-colors ${errors.name ? "border-red-500 focus:border-red-500" : "border-[#C5A880]/30 focus:border-champagne-gold"
                            }`}
                          placeholder="e.g. John Doe"
                        />
                        {errors.name && <span className="font-sans text-xs text-red-500 block">{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="font-sans text-xs font-semibold text-charcoal/80 block">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-transparent border rounded-none py-3 px-4 font-sans text-sm text-charcoal placeholder:text-slate-grey/50 focus:outline-none transition-colors ${errors.email ? "border-red-500 focus:border-red-500" : "border-[#C5A880]/30 focus:border-champagne-gold"
                            }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <span className="font-sans text-xs text-red-500 block">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="font-sans text-xs font-semibold text-charcoal/80 block">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full bg-transparent border rounded-none py-3 px-4 font-sans text-sm text-charcoal placeholder:text-slate-grey/50 focus:outline-none transition-colors ${errors.phone ? "border-red-500 focus:border-red-500" : "border-[#C5A880]/30 focus:border-champagne-gold"
                            }`}
                          placeholder="e.g. +971 50 123 4567"
                        />
                        {errors.phone && <span className="font-sans text-xs text-red-500 block">{errors.phone}</span>}
                      </div>

                      {/* Company Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="companyName" className="font-sans text-xs font-semibold text-charcoal/80 block">
                          Company Name <span className="text-charcoal/40 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="companyName"
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border border-[#C5A880]/30 rounded-none py-3 px-4 font-sans text-sm text-charcoal placeholder:text-slate-grey/50 focus:border-champagne-gold focus:outline-none transition-colors"
                          placeholder="e.g. Acme Holdings"
                        />
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="font-sans text-xs font-semibold text-charcoal/80 block">
                        Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border rounded-none py-3 px-4 font-sans text-sm text-charcoal focus:outline-none transition-colors appearance-none ${errors.service ? "border-red-500 focus:border-red-500" : "border-[#C5A880]/30 focus:border-champagne-gold"
                          }`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C5A880' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.25em",
                        }}
                      >
                        <option value="" disabled className="bg-alabaster text-charcoal">Select a corporate service...</option>
                        {servicesDropdown.map((service, idx) => (
                          <option key={idx} value={service} className="bg-alabaster text-charcoal">{service}</option>
                        ))}
                      </select>
                      {errors.service && <span className="font-sans text-xs text-red-500 block">{errors.service}</span>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="font-sans text-xs font-semibold text-charcoal/80 block">
                        Your Inquiry details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full bg-transparent border rounded-none py-3 px-4 font-sans text-sm text-charcoal placeholder:text-slate-grey/50 focus:outline-none transition-colors ${errors.message ? "border-red-500 focus:border-red-500" : "border-[#C5A880]/30 focus:border-champagne-gold"
                          }`}
                        placeholder="Please describe your setup plan, timeline, or visa requirements..."
                      />
                      {errors.message && <span className="font-sans text-xs text-red-500 block">{errors.message}</span>}
                    </div>

                    {submitError && (
                      <div className="font-sans text-xs text-red-500 text-center border border-red-500/30 bg-red-500/5 py-2.5 px-3 rounded-none">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 disabled:bg-black/50 disabled:opacity-50 disabled:pointer-events-none text-white font-sans font-bold text-xs tracking-widest uppercase py-3 transition-all duration-300 ease-editorial flex items-center justify-center gap-2 group rounded-none shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-navy border-t-transparent rounded-full animate-spin" />
                          Processing Request...
                        </>
                      ) : (
                        <>
                          Submit Consultation Request
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-[10px] text-slate-grey/50 justify-center">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Symmetric Encryption SLA - Your details are 100% private and protected.</span>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    className="py-12 text-center space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center mx-auto border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2 max-w-md mx-auto">
                      <h3 className="font-serif text-2xl font-normal text-charcoal uppercase">
                        Request Received
                      </h3>
                      <p className="font-sans text-sm text-slate-grey leading-relaxed">
                        Thank you for contacting us. A senior business setup consultant has been assigned to your file and will call or email you within <strong>2 business hours</strong>.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="border border-[#C5A880]/40 text-champagne-gold hover:border-champagne-gold/70 font-sans font-bold text-xs tracking-widest uppercase px-6 py-2.5 rounded-none transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-[10px] tracking-widest text-champagne-gold font-bold uppercase block text-left">
                Offices & Details
              </span>
              <h2 className="font-serif text-3xl font-normal text-charcoal tracking-tight uppercase text-left mb-6">
                Corporate Directory
              </h2>

              <div className="space-y-4">
                {/* Telephone */}
                <ContactCard
                  title="Direct Telephone Desk"
                  value="+971 30 123 4567"
                  subtext="Available Mon-Fri, 9am - 6pm (GMT+4)"
                  href="tel:+971301234567"
                  icon={Phone}
                  delay={0.1}
                />

                {/* Email */}
                <ContactCard
                  title="Official Email"
                  value="sandipsawant0107@gmail.com"
                  subtext="Average client response speed: 2 hours"
                  href="mailto:sandipsawant0107@gmail.com"
                  icon={Mail}
                  delay={0.15}
                />

                {/* Address */}
                <ContactCard
                  title="Dubai HQ Address"
                  value="Office 1400, Al-Saraf Tower"
                  subtext="Business Bay, Dubai, United Arab Emirates"
                  icon={MapPin}
                  delay={0.2}
                />

                {/* Business Hours */}
                <ContactCard
                  title="Corporate Office Hours"
                  value="Mon - Fri: 9:00 AM - 6:00 PM"
                  subtext="Closed on Saturday, Sunday & UAE public holidays"
                  icon={Clock}
                  delay={0.25}
                />

                {/* WhatsApp */}
                <ContactCard
                  title="Instant WhatsApp Hotline"
                  value="+971 30 123 4567"
                  subtext="Chat securely with client managers 24/7"
                  href="https://wa.me/971301234567"
                  icon={WhatsAppIcon}
                  delay={0.3}
                  alignCenter={true}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Dubai Headquarters Location"
            subtitle="Visit our executive business bay suite for face-to-face setups, licensing signing, and banking introductions."
            badge="Find Our Office"
          />

          {/* Premium Map Styled Container */}
          <div className="max-w-6xl mx-auto bg-transparent border border-[#C5A880]/30 overflow-hidden h-[400px] relative flex flex-col justify-center items-center text-center p-8 group">
            {/* Grid Pattern decorative elements background */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Glowing gold circular radar */}
            <div className="absolute w-72 h-72 rounded-full border border-[#C5A880]/10 bg-[radial-gradient(circle,rgba(197,168,128,0.08),transparent_70%)] filter blur-md animate-pulse pointer-events-none" />
            <div className="absolute w-48 h-48 rounded-full border border-[#C5A880]/15 pointer-events-none" />
            <div className="absolute w-24 h-24 rounded-full border border-[#C5A880]/30 pointer-events-none" />

            <div className="relative z-10 space-y-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-champagne-gold bg-transparent text-champagne-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Map className="w-8 h-8" strokeWidth={1.2} />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-normal text-charcoal uppercase tracking-tight">
                  Al-Saraf Tower, Business Bay
                </h3>
                <p className="font-sans text-sm text-slate-grey max-w-md">
                  Coordinates: 25.1856° N, 55.2726° E. Centrally located right next to Business Bay Metro Station, Business Bay Canal, Dubai.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal hover:bg-champagne-gold text-alabaster hover:text-charcoal border border-charcoal/20 hover:border-champagne-gold font-sans font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-500"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Registry / Extra Information Cards */}
      <section className="py-32 bg-alabaster relative overflow-hidden border-t border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">

            {/* Box 1 */}
            <div className="bg-transparent border border-neutral-200/40 rounded-none p-6 space-y-3">
              <div className="flex items-center gap-2 text-champagne-gold">
                <Building className="w-5 h-5" strokeWidth={1.2} />
                <h4 className="font-serif text-base font-normal text-charcoal uppercase tracking-wider">Registry Info</h4>
              </div>
              <p className="font-sans text-xs text-slate-grey leading-relaxed">
                Registered legal formation agency under license number 995122. Issued by the Dubai Department of Economy and Tourism (DET), UAE commercial registry.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-transparent border border-neutral-200/40 rounded-none p-6 space-y-3">
              <div className="flex items-center gap-2 text-champagne-gold">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.2} />
                <h4 className="font-serif text-base font-normal text-charcoal uppercase tracking-wider">Client Protection</h4>
              </div>
              <p className="font-sans text-xs text-slate-grey leading-relaxed">
                Fully protected by professional liability insurance and local escrow frameworks. All corporate deposits and government capital holdings are secured.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-transparent border border-neutral-200/40 rounded-none p-6 space-y-3">
              <div className="flex items-center gap-2 text-champagne-gold">
                <FileText className="w-5 h-5" strokeWidth={1.2} />
                <h4 className="font-serif text-base font-normal text-charcoal uppercase tracking-wider">Service SLA</h4>
              </div>
              <p className="font-sans text-xs text-slate-grey leading-relaxed">
                We guarantee a response callback within 2 business hours for business setup inquiries. Free zone setup filings submitted to authorities inside 24 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

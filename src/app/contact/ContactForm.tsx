"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "./actions";

const initialState: FormState = { success: false };

const services = [
  "Panel Upgrade / Installation",
  "Home Rewiring",
  "EV Charger Installation",
  "Lighting & Outlets",
  "Basement / Renovation Wiring",
  "Commercial Tenant Buildout",
  "Three-Phase Power",
  "Generator System",
  "Repairs & Troubleshooting",
  "Emergency Service",
  "Other",
];

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="glow-border rounded-sm p-12 bg-[#111111] flex flex-col items-center justify-center text-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center bg-orange-500/10 border-2 border-orange-500/50 rounded-sm animate-pulse-glow">
          <span className="text-3xl">⚡</span>
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-2">Message Received!</h3>
          <p className="text-white/50 text-sm max-w-sm">
            Thanks for reaching out. A member of the F&A team will get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="glow-border rounded-sm p-8 bg-[#111111] flex flex-col gap-5">
      {state.error && (
        <div className="px-4 py-3 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {state.error}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white/60 text-xs font-semibold tracking-widest uppercase">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Smith"
            className="bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-orange-500/60 focus:bg-black/80 transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white/60 text-xs font-semibold tracking-widest uppercase">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-orange-500/60 focus:bg-black/80 transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-white/60 text-xs font-semibold tracking-widest uppercase">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(416) 555-0100"
            className="bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-orange-500/60 focus:bg-black/80 transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-white/60 text-xs font-semibold tracking-widest uppercase">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/60 focus:bg-black/80 transition-all duration-200 appearance-none"
          >
            <option value="" className="bg-[#111111]">Select a service...</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-[#111111]">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-white/60 text-xs font-semibold tracking-widest uppercase">
          Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your project or what you need help with..."
          className="bg-black/60 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-orange-500/60 focus:bg-black/80 transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="btn-orange px-8 py-4 text-sm font-bold rounded-sm tracking-wide relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed mt-2"
      >
        <span className="relative z-10">
          {isPending ? "Sending..." : "Send Message →"}
        </span>
      </button>

      <p className="text-white/25 text-xs text-center">
        We respond within 24 hours · All enquiries are confidential
      </p>
    </form>
  );
}

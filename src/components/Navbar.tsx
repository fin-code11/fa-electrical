"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-500/20 backdrop-blur-md bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="bg-white rounded px-3 py-1.5 group-hover:opacity-90 transition-opacity duration-200">
              <Image
                src="/logo.png"
                alt="F&A Electrical Contractors Inc"
                width={150}
                height={48}
                priority
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm group ${
                    active
                      ? "text-orange-400"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 bg-orange-500/10 rounded-sm border border-orange-500/30" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {!active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-orange-500 group-hover:w-4/5 transition-all duration-300" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn-orange ml-4 px-5 py-2 text-sm font-semibold rounded-sm relative overflow-hidden tracking-wide"
            >
              <span className="relative z-10">Get a Quote</span>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-orange-500/20 bg-black/95 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium tracking-wide rounded-sm transition-all ${
                  active
                    ? "text-orange-400 bg-orange-500/10 border border-orange-500/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-orange mt-2 px-4 py-3 text-sm font-semibold rounded-sm text-center relative overflow-hidden"
          >
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

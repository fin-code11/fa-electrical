import Link from "next/link";

const highlights = [
  {
    icon: "⚡",
    title: "Residential Wiring",
    desc: "Full home electrical installations, panel upgrades, and rewiring for safe, modern living.",
  },
  {
    icon: "🏗",
    title: "Commercial & Industrial",
    desc: "Large-scale commercial builds, office fitouts, and full industrial electrical systems.",
  },
  {
    icon: "🔧",
    title: "Repairs & Maintenance",
    desc: "Fast diagnostics and reliable repairs to keep your power running without interruption.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-24">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-orange-600/8 rounded-full blur-[80px] pointer-events-none" />

        {/* Corner decorators */}
        <div className="absolute top-20 left-6 w-8 h-8 border-t-2 border-l-2 border-orange-500/50" />
        <div className="absolute top-20 right-6 w-8 h-8 border-t-2 border-r-2 border-orange-500/50" />
        <div className="absolute bottom-20 left-6 w-8 h-8 border-b-2 border-l-2 border-orange-500/50" />
        <div className="absolute bottom-20 right-6 w-8 h-8 border-b-2 border-r-2 border-orange-500/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium tracking-widest uppercase animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Ontario ESA Certified · Lic. No. 7009205
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6 animate-slide-up">
            <span className="block text-white">Powering</span>
            <span className="block gradient-text glow-orange-text animate-flicker">
              F<span className="text-white">&</span>A
            </span>
            <span className="block text-white">Electrical</span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/60 text-lg sm:text-xl leading-relaxed mb-10 animate-slide-up delay-200">
            Guelph&apos;s trusted electrical contractors. From residential wiring to full commercial builds —
            quality, reliability, and zero compromise on safety.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link
              href="/contact"
              className="btn-orange px-8 py-4 text-base font-bold rounded-sm tracking-wide w-full sm:w-auto text-center relative overflow-hidden"
            >
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
            <Link
              href="/services"
              className="btn-outline px-8 py-4 text-base font-semibold rounded-sm tracking-wide w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </div>

          {/* Single stat */}
          <div className="mt-20 inline-flex items-center gap-4 px-10 py-6 border border-orange-500/20 bg-black/80 rounded-sm animate-fade-in delay-500">
            <span className="text-4xl font-black text-orange-400 glow-orange-text">20+</span>
            <div className="text-left">
              <p className="text-white font-bold text-sm tracking-wide">Years of Experience</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-0.5">Trusted Across Guelph & Area</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs tracking-widest uppercase animate-float">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Why F&A */}
      <section className="py-24 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Built on <span className="text-orange-400">Trust</span> & Quality
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-hover glow-border rounded-sm p-8 bg-[#111111] flex flex-col gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 border border-orange-500/30 rounded-sm text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                <Link
                  href="/services"
                  className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors mt-auto inline-flex items-center gap-1"
                >
                  Learn more <span className="text-base">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="section-divider mb-20" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-orange-950/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glow-border rounded-sm p-12 bg-black/60">
            <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Ready to Start?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Let&apos;s Power Your Project
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a no-obligation quote. Our team responds within 24 hours.
            </p>
            <Link
              href="/contact"
              className="btn-orange inline-block px-10 py-4 text-base font-bold rounded-sm tracking-wide relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

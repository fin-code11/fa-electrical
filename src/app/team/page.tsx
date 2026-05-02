import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | F&A Electrical",
  description: "Meet the licensed electricians and technicians behind F&A Electrical.",
};

const team = [
  {
    initials: "FA",
    name: "Franco A.",
    role: "Master Electrician & Founder",
    license: "Ontario Master Electrician · ESA Certified",
    bio: "With over 15 years in the trade, Franco founded F&A Electrical on a simple principle: every job deserves the same level of precision — whether it's a single outlet or a full commercial build. He leads every major project and personally ensures code compliance on every installation.",
    specialties: ["Panel Upgrades", "Commercial Builds", "Three-Phase Systems"],
  },
  {
    initials: "MR",
    name: "Marco R.",
    role: "Senior Electrician",
    license: "309A Licensed · 7+ Years",
    bio: "Marco specialises in residential projects and new construction wiring. His attention to detail and clean workmanship have made him a client favourite for renovation and basement finishing projects across the GTA.",
    specialties: ["Residential Wiring", "Basement Builds", "EV Chargers"],
  },
  {
    initials: "DK",
    name: "David K.",
    role: "Commercial Electrician",
    license: "309A Licensed · 5+ Years",
    bio: "David handles our commercial and industrial accounts, from tenant buildouts to emergency lighting systems. His background in large-scale construction gives F&A the capacity to take on complex, multi-trade projects.",
    specialties: ["Tenant Buildouts", "Generator Systems", "Data & Low Voltage"],
  },
  {
    initials: "TL",
    name: "Tony L.",
    role: "Apprentice Electrician",
    license: "4th Year Apprentice · ESA Registered",
    bio: "Tony is in his fourth year of his electrical apprenticeship and brings energy, precision, and a strong willingness to learn to every job. He works alongside senior electricians on residential and light commercial projects.",
    specialties: ["Residential Installs", "Lighting", "Service Calls"],
  },
];

const values = [
  {
    icon: "🛡",
    title: "Safety First",
    desc: "Every installation follows ESA standards. No shortcuts, no exceptions.",
  },
  {
    icon: "⚡",
    title: "Honest Pricing",
    desc: "Transparent quotes with no hidden fees — you know exactly what you're paying for.",
  },
  {
    icon: "🕐",
    title: "On Time",
    desc: "We show up when we say we will and finish within the agreed timeline.",
  },
  {
    icon: "✅",
    title: "Fully Warranted",
    desc: "All our work is backed by a workmanship warranty and ESA inspected.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="absolute top-8 left-6 w-6 h-6 border-t-2 border-l-2 border-orange-500/40" />
        <div className="absolute top-8 right-6 w-6 h-6 border-t-2 border-r-2 border-orange-500/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">The People Behind the Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Meet the <span className="text-orange-400">Team</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Every member of F&A Electrical is licensed, insured, and committed to delivering
            work that stands the test of time.
          </p>
        </div>
      </section>

      {/* Team cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="card-hover glow-border rounded-sm bg-[#111111] overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row gap-0">
                  {/* Avatar side */}
                  <div className="sm:w-48 flex-shrink-0 flex items-center justify-center p-8 bg-gradient-to-br from-orange-500/10 to-black/40 border-b sm:border-b-0 sm:border-r border-orange-500/20">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-sm bg-orange-500/20 border-2 border-orange-500/50 flex items-center justify-center animate-pulse-glow">
                        <span className="text-2xl font-black text-orange-400">{member.initials}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-sm flex items-center justify-center">
                        <span className="text-[8px] font-black text-white">✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Info side */}
                  <div className="flex-1 p-6">
                    <h2 className="text-xl font-black text-white">{member.name}</h2>
                    <p className="text-orange-400 text-sm font-semibold mt-0.5">{member.role}</p>
                    <p className="text-white/30 text-xs mt-1 mb-4">{member.license}</p>
                    <p className="text-white/55 text-sm leading-relaxed mb-5">{member.bio}</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/25 rounded-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="section-divider mb-20" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Our <span className="text-orange-400">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="card-hover glow-border rounded-sm p-6 bg-[#111111] text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 border border-orange-500/30 rounded-sm text-2xl">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-16">
        <div className="section-divider mb-16" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Join the Team</h2>
          <p className="text-white/50 text-sm mb-8">
            We&apos;re always looking for talented, motivated electricians and apprentices. If you take pride in your craft, we want to hear from you.
          </p>
          <a
            href="/contact"
            className="btn-outline inline-block px-8 py-3 text-sm font-semibold rounded-sm tracking-wide"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}

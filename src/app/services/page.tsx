import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | F&A Electrical",
  description: "Explore the full range of electrical services offered by F&A Electrical — residential, commercial, industrial, and emergency.",
};

const services = [
  {
    category: "Residential",
    icon: "🏠",
    items: [
      {
        title: "Panel Upgrades & Installations",
        desc: "Upgrade your electrical panel to handle modern power demands safely and efficiently. We install 100A to 400A service panels.",
      },
      {
        title: "Home Rewiring",
        desc: "Complete rewiring of older homes to meet current electrical codes, eliminating fire hazards from aging wiring.",
      },
      {
        title: "EV Charger Installation",
        desc: "Level 2 home EV charger installations — compatible with all major electric vehicles.",
      },
      {
        title: "Lighting & Outlets",
        desc: "Indoor and outdoor lighting design, pot light installation, and outlet additions throughout your home.",
      },
      {
        title: "Smoke & CO Detectors",
        desc: "ESA-compliant hardwired smoke and carbon monoxide detector installations.",
      },
      {
        title: "Basement & Renovation Wiring",
        desc: "Full electrical rough-in and finishing for basement builds, kitchen renos, and home additions.",
      },
    ],
  },
  {
    category: "Commercial",
    icon: "🏢",
    items: [
      {
        title: "Commercial Tenant Buildouts",
        desc: "Full electrical installation for retail spaces, restaurants, offices, and mixed-use commercial units.",
      },
      {
        title: "Three-Phase Power",
        desc: "Installation and maintenance of three-phase electrical systems for industrial and commercial equipment.",
      },
      {
        title: "Emergency & Exit Lighting",
        desc: "Code-compliant emergency lighting and exit sign installation for commercial buildings.",
      },
      {
        title: "Data & Communications Wiring",
        desc: "Structured cabling, server room power, and low-voltage wiring for modern business infrastructure.",
      },
      {
        title: "Generator Systems",
        desc: "Standby generator installation, transfer switches, and maintenance for business continuity.",
      },
      {
        title: "Electrical Inspections",
        desc: "Pre-purchase, insurance, and ESA electrical inspections with detailed reporting.",
      },
    ],
  },
  {
    category: "Industrial",
    icon: "🏭",
    items: [
      {
        title: "Industrial Panel & MCC Installation",
        desc: "Design and installation of motor control centres, distribution panels, and high-voltage switchgear for manufacturing and processing facilities.",
      },
      {
        title: "Plant & Facility Wiring",
        desc: "Full electrical infrastructure for warehouses, production plants, and industrial facilities — from service entrance to machine connections.",
      },
      {
        title: "Motor & Drive Connections",
        desc: "Wiring and commissioning of motors, variable frequency drives (VFDs), and automated machinery for industrial operations.",
      },
      {
        title: "High-Voltage Systems",
        desc: "Installation, maintenance, and testing of medium and high-voltage electrical systems up to 27.6 kV.",
      },
      {
        title: "Industrial Lighting",
        desc: "High-bay LED lighting installations, hazardous location fixtures, and energy-efficient lighting retrofits for large-scale facilities.",
      },
      {
        title: "Preventive Maintenance Programs",
        desc: "Scheduled inspection and maintenance programs for industrial electrical systems — minimising downtime and extending equipment life.",
      },
    ],
  },
  {
    category: "Maintenance & Repairs",
    icon: "🔧",
    items: [
      {
        title: "Troubleshooting & Diagnostics",
        desc: "Rapid identification and resolution of electrical faults, tripping breakers, and power issues.",
      },
      {
        title: "24/7 Emergency Service",
        desc: "Round-the-clock emergency electrical response for urgent safety situations.",
      },
      {
        title: "GFCI & AFCI Protection",
        desc: "Installation of ground-fault and arc-fault interrupter protection to meet modern safety standards.",
      },
      {
        title: "Surge Protection",
        desc: "Whole-home and commercial surge protection to guard against power spikes.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />

        {/* Corner decorators */}
        <div className="absolute top-8 left-6 w-6 h-6 border-t-2 border-l-2 border-orange-500/40" />
        <div className="absolute top-8 right-6 w-6 h-6 border-t-2 border-r-2 border-orange-500/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-orange-400">Services</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            From single outlets to full industrial facilities — we handle every scope of electrical work
            with the same commitment to quality and code compliance.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((category) => (
            <div key={category.category}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-500/10 border border-orange-500/30 rounded-sm text-2xl">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{category.category}</h2>
                  <div className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mt-1" />
                </div>
              </div>

              {/* Service grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((service) => (
                  <div
                    key={service.title}
                    className="card-hover glow-border rounded-sm p-6 bg-[#111111] group"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0 group-hover:shadow-[0_0_8px_rgba(249,115,22,0.8)] transition-shadow" />
                      <h3 className="text-base font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed pl-4">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="section-divider mb-16" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-white/50 mb-8">
            We take on custom and complex electrical projects. Reach out and we&apos;ll discuss your specific requirements.
          </p>
          <a
            href="/contact"
            className="btn-orange inline-block px-8 py-4 text-base font-bold rounded-sm tracking-wide relative overflow-hidden"
          >
            <span className="relative z-10">Talk to Our Team</span>
          </a>
        </div>
      </section>
    </div>
  );
}

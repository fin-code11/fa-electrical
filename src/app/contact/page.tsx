import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | F&A Electrical",
  description: "Get in touch with F&A Electrical for a free quote on any residential or commercial electrical project.",
};

const contactInfo = [
  {
    icon: "✆",
    label: "Phone",
    value: "(416) 555-0194",
    sub: "Mon–Fri 7am–6pm · Emergency 24/7",
  },
  {
    icon: "✉",
    label: "Email",
    value: "info@faelectrical.ca",
    sub: "We respond within 24 hours",
  },
  {
    icon: "◈",
    label: "Service Area",
    value: "Guelph & Surrounding Area",
    sub: "Residential · Commercial · Industrial",
  },
  {
    icon: "⚡",
    label: "Emergency Line",
    value: "(416) 555-0911",
    sub: "Available 24 hours a day, 7 days a week",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="relative py-24 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="absolute top-8 left-6 w-6 h-6 border-t-2 border-l-2 border-orange-500/40" />
        <div className="absolute top-8 right-6 w-6 h-6 border-t-2 border-r-2 border-orange-500/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Contact <span className="text-orange-400">Us</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Ready to start your project? Fill out the form below or give us a call.
            We offer free consultations and no-obligation quotes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="card-hover glow-border rounded-sm p-5 bg-[#111111] flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-orange-500/10 border border-orange-500/30 rounded-sm text-orange-400 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-0.5">{item.label}</p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Trust badges */}
              <div className="glow-border rounded-sm p-5 bg-[#111111] mt-2">
                <p className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Credentials</p>
                <ul className="space-y-2">
                  {[
                    "Ontario ESA Certified",
                    "Fully Licensed & Insured",
                    "IBEW Member",
                    "WSIB Covered",
                    "15+ Years in Business",
                  ].map((badge) => (
                    <li key={badge} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {badge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

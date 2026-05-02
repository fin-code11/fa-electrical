import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500 rounded-sm rotate-45" />
                <span className="relative z-10 text-white font-black text-xs">F&A</span>
              </div>
              <div>
                <p className="font-black text-white text-base leading-tight">
                  F<span className="text-orange-500">&</span>A Electrical
                </p>
                <p className="text-[10px] text-orange-400/70 tracking-[0.2em] uppercase">Licensed & Insured</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Delivering precision electrical solutions for residential and commercial clients.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-orange-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✆</span>
                <span>(416) 555-0194</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✉</span>
                <span>info@faelectrical.ca</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">◈</span>
                <span>Toronto, Ontario</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <p>© {new Date().getFullYear()} F&A Electrical. All rights reserved.</p>
          <p>Licensed Electrical Contractor · Ontario ESA Certified</p>
        </div>
      </div>
    </footer>
  );
}

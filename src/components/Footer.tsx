import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="F&A Electrical Contractors Inc"
                width={180}
                height={50}
                className="h-10 w-auto opacity-80"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Delivering precision electrical solutions for residential, commercial, and industrial clients.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
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

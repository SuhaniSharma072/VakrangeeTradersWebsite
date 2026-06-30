import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a4236] text-[#a8c4bc]">
      {/* Gold divider */}
      <div className="h-[3px] bg-[#c9a227]" />

      <div className="container-padded py-14">
        {/* Logo */}
        <div className="text-center mb-12">
          <p className="font-playfair text-3xl font-semibold text-white tracking-wide">Vakrangee Traders</p>
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a227] mt-1">Wholesale Supplier · Erode, Tamil Nadu</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Shop */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-white mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: "Lungi", href: "/products?category=lungi" },
                { label: "Towels & Gamacha", href: "/products?category=towel" },
                { label: "Bedsheets", href: "/products?category=bedsheet" },
                { label: "All Products", href: "/products" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#a8c4bc] hover:text-[#c9a227] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-white mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919443673013" className="text-sm text-[#a8c4bc] hover:text-[#c9a227] transition-colors">
                  +91 94436 73013
                </a>
              </li>
              <li>
                <a href="https://wa.me/919443673013" target="_blank" rel="noopener noreferrer" className="text-sm text-[#a8c4bc] hover:text-[#c9a227] transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-white mb-5">Info</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#a8c4bc] hover:text-[#c9a227] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[10px] font-medium tracking-[0.25em] uppercase text-white mb-5">Address</h4>
            <p className="text-sm text-[#a8c4bc] leading-relaxed">
              41, Alagiri Singh Street<br />
              Erode 638001<br />
              Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2d6152]">
        <div className="container-padded py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6a9e94]">© {new Date().getFullYear()} Vakrangee Traders. All rights reserved.</p>
          <p className="text-xs text-[#6a9e94]">Wholesale Textiles from Erode, Tamil Nadu.</p>
        </div>
      </div>
    </footer>
  );
}

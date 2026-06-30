"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Lungi", href: "/products?category=lungi" },
  { label: "Towels & Gamacha", href: "/products?category=towel" },
  { label: "Bedsheets", href: "/products?category=bedsheet" },
  { label: "All Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement bar */}
      <div className="bg-[#1a4236] text-[#c9a227] text-center text-[11px] py-2.5 tracking-[0.2em] uppercase font-medium">
        GST Invoice on Every Order &nbsp;·&nbsp; Wholesale Supplier — Erode, Tamil Nadu
      </div>

      {/* Logo + icons */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="container-padded relative flex items-center justify-center h-28">
          <button className="lg:hidden text-neutral-800 absolute left-4" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/finallogo.png"
              alt="Vakrangee Traders"
              width={400}
              height={120}
              className="h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-5 text-neutral-800 absolute right-4">
            <Link href="/contact" className="hover:text-[#1a4236] transition-colors">
              <User size={18} />
            </Link>
            <Link href="/contact" className="hover:text-[#1a4236] transition-colors">
              <ShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="hidden lg:block border-b border-neutral-200 bg-white">
        <div className="container-padded">
          <nav className="flex items-center justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-5 py-3.5 text-[11px] tracking-[0.18em] uppercase font-medium border-b-2 transition-colors",
                  pathname === link.href
                    ? "border-[#1a4236] text-[#1a4236]"
                    : "border-transparent text-neutral-500 hover:text-[#1a4236] hover:border-[#1a4236]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-neutral-200 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-xs tracking-[0.15em] uppercase font-medium text-neutral-600 border-b border-neutral-100 hover:text-[#1a4236]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

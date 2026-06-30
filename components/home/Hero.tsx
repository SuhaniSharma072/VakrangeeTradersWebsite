"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/lungi.jpg",
    label: "Erode's Finest",
    title: "Premium Cotton\nLungis",
    subtitle: "Rich colours, traditional weaves, consistent quality — straight from Erode.",
    cta: "Shop Lungis",
    href: "/products?category=lungi",
  },
  {
    image: "/images/lungi57.jpg",
    label: "Wholesale Collection",
    title: "Every Colour,\nEvery Occasion",
    subtitle: "From everyday whites to festive checks — stocked in depth, ready to ship.",
    cta: "View Collection",
    href: "/products?category=lungi",
  },
  {
    image: "/images/lungi47.jpg",
    label: "Bulk Supply",
    title: "Trusted Brands,\nBulk Pricing",
    subtitle: "Top lungi brands available in bulk. GST invoice on every order.",
    cta: "Enquire Now",
    href: "/contact",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const s = slides[current];

  return (
    <div className="relative w-full overflow-hidden bg-[#1a4236]" style={{ height: "88vh", minHeight: "560px" }}>
      {/* Image */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}>
        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Rich dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-padded w-full">
          <div className={`max-w-xl transition-all duration-500 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c9a227]" />
              <p className="text-[#c9a227] text-[11px] tracking-[0.35em] uppercase font-medium">
                {s.label}
              </p>
            </div>

            {/* Title */}
            <h1 className="font-playfair text-5xl lg:text-7xl font-semibold text-white leading-tight whitespace-pre-line">
              {s.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-white/70 text-base leading-relaxed max-w-sm">
              {s.subtitle}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 mt-9">
              <Link
                href={s.href}
                className="bg-[#c9a227] hover:bg-[#b8910f] text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200"
              >
                {s.cta}
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-white text-xs tracking-[0.2em] uppercase border-b border-white/40 hover:border-white pb-0.5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-[2px] bg-[#c9a227]"
                : "w-4 h-[2px] bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 text-white/40 text-xs tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}

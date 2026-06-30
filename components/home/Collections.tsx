import Link from "next/link";

const collections: { label: string; desc: string; href: string }[] = [
  { label: "Lungi", desc: "Checks & Solids", href: "/products?category=lungi" },
  { label: "Towels & Gamacha", desc: "Cotton & Terry", href: "/products?category=towel" },
  { label: "Bedsheets", desc: "Single & Double", href: "/products?category=bedsheet" },
];

export default function Collections() {
  return (
    <section className="container-padded py-16">
      <div className="text-center mb-10">
        <p className="section-label mb-2">Our Collections</p>
        <h2 className="section-title">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {collections.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="bg-neutral-50 group flex flex-col items-center justify-center py-12 px-6 text-center hover:shadow-md transition-shadow border border-neutral-100"
          >
            <h3 className="font-playfair text-2xl font-semibold text-neutral-900 group-hover:text-[#b8960c] transition-colors">
              {c.label}
            </h3>
            <span className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#b8960c] border-b border-[#b8960c] pb-px">
              Explore
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

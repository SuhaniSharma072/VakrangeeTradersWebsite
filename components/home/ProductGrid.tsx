import Link from "next/link";
import Image from "next/image";

const products = [
  { name: "Premium Cotton Lungi — Checks", tag: "lungi", img: "/images/lungi45.jpg" },
  { name: "Terry Bath Towel", tag: "towel", img: "/images/towel.jpg" },
  { name: "Cotton Gamacha — Plain White", tag: "gamacha", img: "/images/towel32.jpg" },
  { name: "Printed Double Bedsheet Set", tag: "bedsheet", img: "/images/IMG_3725.jpg" },
  { name: "Solid Colour Lungi — Assorted", tag: "lungi", img: "/images/lungi47.jpg" },
  { name: "Terry Bath Towel — Premium", tag: "towel", img: "/images/anothertowel.jpg" },
  { name: "Cotton Gamacha — Striped", tag: "gamacha", img: "/images/moretowel.jpg" },
  { name: "Plain Cotton Single Bedsheet", tag: "bedsheet", img: "/images/IMG_3727.jpg" },
];

export default function ProductGrid() {
  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="container-padded">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Our Products</p>
            <h2 className="section-title">All Products</h2>
          </div>
          <Link href="/products" className="text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-[#b8960c] transition-colors border-b border-neutral-300 pb-px">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="aspect-square w-full mb-4 overflow-hidden border border-neutral-100 relative">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960c] mb-3">{p.tag}</p>
              <a
                href={`https://wa.me/919443673013?text=${encodeURIComponent(`Hi, I'd like to enquire about ${p.name}. Please share pricing and availability.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-900 border-b border-neutral-400 hover:border-[#b8960c] hover:text-[#b8960c] pb-px transition-colors"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

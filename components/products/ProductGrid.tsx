"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";

type SanityProduct = {
  _id: string;
  title: string;
  category: string;
  image?: any;
  description?: string;
  inStock: boolean;
};

export default function ProductGrid() {
  const params = useSearchParams();
  const category = params.get("category");
  const [products, setProducts] = useState<SanityProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = category
      ? `*[_type == "product" && category == $category && inStock != false] | order(_createdAt asc)`
      : `*[_type == "product" && inStock != false] | order(_createdAt asc)`;

    client
      .fetch(query, { category })
      .then((data) => { setProducts(data); setLoading(false); });
  }, [category]);

  if (category === "bedsheet") {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center border border-neutral-100 bg-neutral-50">
        <p className="font-playfair text-4xl font-semibold text-neutral-800 mb-3">Coming Soon</p>
        <p className="text-sm text-neutral-500 mb-8 max-w-xs">
          Our bedsheet collection is being curated. Enquire on WhatsApp to know more or pre-book.
        </p>
        <a
          href={`https://wa.me/919443673013?text=${encodeURIComponent("Hi! I'd like to enquire about your bedsheet collection.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Enquire on WhatsApp
        </a>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-neutral-100 aspect-square w-full mb-3" />
            <div className="h-3 bg-neutral-100 w-16 mb-3" />
            <div className="h-8 bg-neutral-100 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500 mb-4">No products found in this category.</p>
        <a
          href={`https://wa.me/919443673013?text=${encodeURIComponent("Hi! I'm looking for a specific textile product. Can you help?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Ask on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-slate-500 mb-6">
        Showing {products.length} product{products.length !== 1 ? "s" : ""}
        {category ? ` in "${category}"` : ""}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="group">
            <div className="bg-neutral-50 aspect-square w-full mb-3 overflow-hidden border border-neutral-100">
              {p.image ? (
                <img
                  src={urlFor(p.image).width(600).height(600).fit("crop").url()}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : null}
            </div>
            <p className="text-xs text-gray-500 mb-3">{p.category.toUpperCase()}</p>
            <a
              href={`https://wa.me/919443673013?text=${encodeURIComponent(`Hi, I'd like to enquire about ${p.title}. Please share pricing and availability.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>

      {(category === "lungi" || category === "towel") && (
        <div className="mt-20 mb-8 text-center">
          <p className="font-playfair text-xl text-[#1a4236] mb-2">This is only a portion of our collection.</p>
          <p className="text-sm text-neutral-600 mb-5">We stock a much wider range of designs, colours, and brands. Text or WhatsApp us to see the full catalogue.</p>
          <a
            href={`https://wa.me/919443673013?text=${encodeURIComponent(`Hi! I'd like to see your full ${category} collection. Can you share more?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1a4236] hover:bg-[#143026] text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-3 transition-colors"
          >
            WhatsApp Us to See More
          </a>
        </div>
      )}
    </div>
  );
}

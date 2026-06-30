"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { ShopifyProduct } from "@/lib/types";

const PRODUCTS: ShopifyProduct[] = [
  { id: "1",  title: "Cotton Lungi — Style 1",  handle: "lungi-1",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "2",  title: "Cotton Lungi — Style 2",  handle: "lungi-2",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi42.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "10", title: "Cotton Lungi — Style 3",  handle: "lungi-3",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi45.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "11", title: "Cotton Lungi — Style 4",  handle: "lungi-4",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi46.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "12", title: "Cotton Lungi — Style 5",  handle: "lungi-5",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi47.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "13", title: "Cotton Lungi — Style 6",  handle: "lungi-6",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi48.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "22", title: "Cotton Lungi — Style 7",  handle: "lungi-7",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi49.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "23", title: "Cotton Lungi — Style 8",  handle: "lungi-8",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi50.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "24", title: "Cotton Lungi — Style 9",  handle: "lungi-9",  description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi51.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "25", title: "Cotton Lungi — Style 10", handle: "lungi-10", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi52.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "26", title: "Cotton Lungi — Style 11", handle: "lungi-11", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi53.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "27", title: "Cotton Lungi — Style 12", handle: "lungi-12", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi54.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "28", title: "Cotton Lungi — Style 13", handle: "lungi-13", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi57.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "29", title: "Cotton Lungi — Style 14", handle: "lungi-14", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi58.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "30", title: "Cotton Lungi — Style 15", handle: "lungi-15", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi59.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "31", title: "Cotton Lungi — Style 16", handle: "lungi-16", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi60.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  { id: "32", title: "Cotton Lungi — Style 17", handle: "lungi-17", description: "Classic cotton lungi. Comfortable and durable for daily wear.", tags: ["lungi"], priceRange: { minVariantPrice: { amount: "80", currencyCode: "INR" } }, images: { edges: [{ node: { url: "/images/lungi61.jpg", altText: "Cotton Lungi" } }] }, variants: { edges: [] } },
  {
    id: "3",
    title: "Terry Bath Towel",
    handle: "terry-bath-towel",
    description: "Soft terry cloth bath towel. 70×140 cm. Hotel and retail grade.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "120", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel.jpg", altText: "Terry Bath Towel" } }] },
    variants: { edges: [] },
  },
  {
    id: "4",
    title: "Terry Bath Towel — Premium",
    handle: "terry-bath-towel-premium",
    description: "Premium heavyweight terry towel. 70×140 cm. Extra soft and highly absorbent.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "165", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel3.jpg", altText: "Terry Bath Towel Premium" } }] },
    variants: { edges: [] },
  },
  {
    id: "5",
    title: "Terry Hand Towel",
    handle: "terry-hand-towel",
    description: "Compact hand towel. 40×60 cm. Ideal for retail packs and hotel amenities.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "65", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel32.jpg", altText: "Terry Hand Towel" } }] },
    variants: { edges: [] },
  },
  {
    id: "14",
    title: "Cotton Towel — Style 4",
    handle: "cotton-towel-style-4",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel34.jpg", altText: "Cotton Towel Style 4" } }] },
    variants: { edges: [] },
  },
  {
    id: "15",
    title: "Cotton Towel — Style 5",
    handle: "cotton-towel-style-5",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel35.jpg", altText: "Cotton Towel Style 5" } }] },
    variants: { edges: [] },
  },
  {
    id: "16",
    title: "Cotton Towel — Style 6",
    handle: "cotton-towel-style-6",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel36.jpg", altText: "Cotton Towel Style 6" } }] },
    variants: { edges: [] },
  },
  {
    id: "17",
    title: "Cotton Towel — Style 7",
    handle: "cotton-towel-style-7",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel37.jpg", altText: "Cotton Towel Style 7" } }] },
    variants: { edges: [] },
  },
  {
    id: "18",
    title: "Cotton Towel — Style 8",
    handle: "cotton-towel-style-8",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel38.jpg", altText: "Cotton Towel Style 8" } }] },
    variants: { edges: [] },
  },
  {
    id: "19",
    title: "Cotton Towel — Style 9",
    handle: "cotton-towel-style-9",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/towel41.jpg", altText: "Cotton Towel Style 9" } }] },
    variants: { edges: [] },
  },
  {
    id: "20",
    title: "Cotton Towel — Style 10",
    handle: "cotton-towel-style-10",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/anothertowel.jpg", altText: "Cotton Towel Style 10" } }] },
    variants: { edges: [] },
  },
  {
    id: "21",
    title: "Cotton Towel — Style 11",
    handle: "cotton-towel-style-11",
    description: "Soft cotton towel. Available in assorted colours. Ideal for retail.",
    tags: ["towel"],
    priceRange: { minVariantPrice: { amount: "90", currencyCode: "INR" } },
    images: { edges: [{ node: { url: "/images/moretowel.jpg", altText: "Cotton Towel Style 11" } }] },
    variants: { edges: [] },
  },
];

export default function ProductGrid() {
  const params = useSearchParams();
  const category = params.get("category");

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

  const filtered = category
    ? PRODUCTS.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === category.toLowerCase())
      )
    : PRODUCTS;

  if (!filtered.length) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500">No products found in this category.</p>
        <a
          href={`https://wa.me/919443673013?text=${encodeURIComponent("Hi! I'm looking for a specific textile product. Can you help?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4 inline-flex"
        >
          Ask on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-slate-500 mb-6">
        Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        {category ? ` in "${category}"` : ""}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
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

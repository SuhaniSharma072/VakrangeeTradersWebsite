"use client";

import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

const categories = [
  { label: "All Products", value: "all" },
  { label: "Lungi", value: "lungi" },
  { label: "Towels & Gamacha", value: "towel" },
  { label: "Bedsheets", value: "bedsheet" },
];

export default function ProductFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("category") || "all";

  const setCategory = (value: string) => {
    const p = new URLSearchParams(params.toString());
    if (value === "all") p.delete("category");
    else p.set("category", value);
    router.push(`/products?${p.toString()}`);
  };

  return (
    <div className="border border-slate-200 bg-white">
      <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-700">
          Filter by Category
        </h3>
      </div>
      <ul>
        {categories.map((c) => (
          <li key={c.value} className="border-b border-slate-100 last:border-0">
            <button
              onClick={() => setCategory(c.value)}
              className={clsx(
                "w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                active === c.value
                  ? "bg-red-50 text-red-700 font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-red-700"
              )}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-700 mb-1">Need custom stock?</p>
        <a
          href="https://wa.me/919443673013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-red-700 hover:underline uppercase tracking-wide"
        >
          Ask on WhatsApp →
        </a>
      </div>
    </div>
  );
}

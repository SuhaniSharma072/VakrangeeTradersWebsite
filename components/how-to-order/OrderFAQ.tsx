"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    q: "What is the Minimum Order Quantity (MOQ)?",
    a: "MOQ varies by product. Lungi and gamacha start at 100 pieces. Towels start at 50 pieces. Bedsheet sets start at 50 sets. Contact us for specific products — we sometimes accommodate smaller trial orders for new buyers.",
  },
  {
    q: "Do you provide samples before a bulk order?",
    a: "Yes, we can send samples for most products. Sample cost is charged at ₹200–₹500 per item (couriered). This is refundable if you place a bulk order within 30 days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI, NEFT/RTGS, IMPS, and Razorpay (accepts cards, net banking, wallets). We do not accept cash payments. A 50% advance is required for first-time buyers.",
  },
  {
    q: "Do you provide GST invoices?",
    a: "Yes, always. We are GST registered (GSTIN: 33XXXXX0000X1ZX). Every order comes with a proper tax invoice showing HSN code, GST rate, and breakup.",
  },
  {
    q: "Can I return products if there are defects?",
    a: "Yes. We accept returns for manufacturing defects within 7 days of delivery. Share photos over WhatsApp and we'll arrange pickup or replacement.",
  },
  {
    q: "Can you do custom branding or private label?",
    a: "Yes, for orders above a minimum quantity (varies by product). We offer custom weave labels, printed brand tags, and custom packaging for regular buyers.",
  },
  {
    q: "Do you offer credit terms?",
    a: "Credit (net 15 / net 30) is available for established buyers with a track record of 3+ orders. New buyers pay 50% advance, balance before dispatch.",
  },
];

export default function OrderFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-label">FAQ</p>
          <h2 className="section-heading">Common Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="font-semibold text-slate-900 text-sm">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    "text-slate-400 shrink-0 transition-transform",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

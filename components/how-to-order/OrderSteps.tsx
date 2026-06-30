import { Search, MessageSquare, CreditCard, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "Step 1",
    title: "Browse & Shortlist",
    desc: "Browse our catalogue on the Products page. Note the item names, categories, and any specifications you need (colour, size). You can also WhatsApp us for our latest catalogue PDF.",
    tip: "Tip: Use the category filter to quickly find lungis, towels, gamacha, or bedsheets.",
  },
  {
    icon: MessageSquare,
    step: "Step 2",
    title: "Send an Inquiry",
    desc: "Fill the inquiry form on the Contact page, or WhatsApp us directly. Share: product name, quantity, delivery location, and your preferred delivery date. We'll respond within 24 hours with pricing and availability.",
    tip: "Tip: Larger orders get better per-piece pricing. Share your total monthly requirement for the best rate.",
  },
  {
    icon: CreditCard,
    step: "Step 3",
    title: "Confirm & Pay",
    desc: "Once you approve the quote, we'll send a formal invoice with GST breakup. Pay via UPI, NEFT/RTGS, or Razorpay payment link. 50% advance is required for new buyers; existing buyers can discuss credit terms.",
    tip: "Tip: All invoices are GST-compliant. Your chartered accountant will be happy.",
  },
  {
    icon: PackageCheck,
    step: "Step 4",
    title: "We Dispatch & You Receive",
    desc: "After payment confirmation, we pack and dispatch within 3–5 working days. We use trusted transport partners for Maharashtra delivery. Tracking details are shared over WhatsApp.",
    tip: "Tip: Maharashtra orders typically arrive in 2–4 days after dispatch from Erode.",
  },
];

export default function OrderSteps() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="space-y-10">
          {steps.map(({ icon: Icon, step, title, desc, tip }, i) => (
            <div
              key={step}
              className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="shrink-0 w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Icon size={28} className="text-white" />
              </div>
              <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <p className="section-label">{step}</p>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  {title}
                </h3>
                <p className="text-slate-600 mt-3 leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-start gap-2 bg-brand-50 rounded-xl p-4 border border-brand-100">
                  <span className="text-brand-600 text-sm">💡</span>
                  <p className="text-sm text-brand-800">{tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

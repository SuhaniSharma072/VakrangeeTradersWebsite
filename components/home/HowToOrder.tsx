import Link from "next/link";

const steps = [
  { step: "01", title: "Browse & Shortlist", desc: "Pick products from our catalogue or ask us for a PDF catalogue on WhatsApp." },
  { step: "02", title: "Send Your Requirements", desc: "WhatsApp us the product, quantity, and delivery location. We'll respond fast." },
  { step: "03", title: "Confirm the Order", desc: "Agree on quantity and terms. Pay via UPI or bank transfer. GST invoice sent." },
  { step: "04", title: "We Dispatch", desc: "Order packed and dispatched within 3–5 days. Delivery to Maharashtra in 2–4 days." },
];

export default function HowToOrder() {
  return (
    <section className="border-t border-gray-200">
      <div className="container-padded py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-900">
            How to Order
          </h2>
          <Link href="/how-to-order" className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors">
            Full Guide →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="border border-gray-200 p-5">
              <p className="text-3xl font-bold text-gray-100 leading-none mb-3">{s.step}</p>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-2">{s.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function OrderCTA() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919443673013";

  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="bg-slate-900 rounded-3xl p-10 lg:p-16 text-center">
          <p className="section-label text-brand-400">Get Started</p>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mt-2">
            Ready to Place Your First Order?
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Whether you know exactly what you need or want to discuss options —
            reach out. We&apos;ll guide you through the whole process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={`https://wa.me/${number}?text=${encodeURIComponent("Hi! I'd like to place a wholesale order. Can you guide me?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us Now
            </a>
            <Link href="/contact" className="btn-outline-white justify-center">
              Fill Inquiry Form
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

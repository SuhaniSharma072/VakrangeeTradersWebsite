"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const PRODUCTS = ["Lungi", "Towels & Gamacha", "Bedsheets", "Mixed / Multiple Products", "Other"];
const WHATSAPP_NUMBER = "919443673013";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    product: "",
    quantity: "",
    message: "",
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi! I'd like to enquire about a wholesale order.`,
      `\n*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.city ? `*City:* ${form.city}` : "",
      `*Product:* ${form.product}`,
      form.quantity ? `*Quantity:* ${form.quantity}` : "",
      form.message ? `*Message:* ${form.message}` : "",
    ].filter((l) => l !== "").join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-6">
        Send a Wholesale Inquiry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input className="input-field" placeholder="Rajesh Sharma" value={form.name} onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div>
          <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input className="input-field" type="tel" placeholder="+91 94436 73013" value={form.phone} onChange={(e) => set("phone", e.target.value)} required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
            Product <span className="text-red-500">*</span>
          </label>
          <select className="input-field" value={form.product} onChange={(e) => set("product", e.target.value)} required>
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
            City / State
          </label>
          <input className="input-field" placeholder="Pune, Maharashtra" value={form.city} onChange={(e) => set("city", e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
            Quantity Required
          </label>
          <input className="input-field" placeholder="e.g. 500 pieces" value={form.quantity} onChange={(e) => set("quantity", e.target.value)} />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-gray-700 block mb-1.5 uppercase tracking-wide">
          Additional Details
        </label>
        <textarea className="input-field resize-none" rows={4} placeholder="Colour preferences, specifications, delivery timeline..." value={form.message} onChange={(e) => set("message", e.target.value)} />
      </div>

      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold tracking-widest uppercase py-4 transition-colors">
        <MessageCircle size={16} />
        Send via WhatsApp
      </button>
      <p className="text-xs text-gray-400 text-center">Opens WhatsApp with your inquiry pre-filled.</p>
    </form>
  );
}

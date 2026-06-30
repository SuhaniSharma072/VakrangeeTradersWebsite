import { Truck, MapPin, Clock, IndianRupee } from "lucide-react";

const info = [
  {
    icon: Truck,
    title: "Shipping Partners",
    desc: "We work with DTDC, Delhivery, and road transport services for bulk shipments. Parcels under 10 kg go by courier; larger orders go by transport.",
  },
  {
    icon: MapPin,
    title: "Delivery Coverage",
    desc: "We ship pan-India. Maharashtra (Pune, Mumbai, Nashik, Aurangabad) is our primary market. Delivery in 2–4 working days after dispatch.",
  },
  {
    icon: Clock,
    title: "Dispatch Timeline",
    desc: "Ready stock: 3–5 working days. Custom / made-to-order items: 10–15 working days. We'll confirm timelines before you pay.",
  },
  {
    icon: IndianRupee,
    title: "Shipping Charges",
    desc: "Shipping is charged at actuals based on weight and destination. Rates are communicated upfront before you confirm the order.",
  },
];

export default function ShippingInfo() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container-padded">
        <div className="text-center mb-10">
          <p className="section-label text-brand-400">Shipping & Delivery</p>
          <h2 className="text-3xl font-display font-bold text-white mt-2">
            Delivery Information
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="w-11 h-11 bg-brand-600/20 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-brand-400" />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

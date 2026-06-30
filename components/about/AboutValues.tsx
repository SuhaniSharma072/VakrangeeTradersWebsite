import { Heart, Scale, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family-Run, Relationship-Driven",
    desc: "We're not a faceless corporation. Every buyer speaks directly to our team. We remember your preferences, your peak seasons, and your business needs.",
  },
  {
    icon: Scale,
    title: "Fair & Transparent",
    desc: "No hidden charges. GST on every invoice. The price you're quoted is the price you pay — shipping rates communicated upfront.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    desc: "We'd rather have 100 buyers who've been with us for 10 years than 1000 one-time transactions. Your growth is our growth.",
  },
];

export default function AboutValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="text-center mb-12">
          <p className="section-label">Our Values</p>
          <h2 className="section-heading">How We Do Business</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center p-8">
              <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon size={24} className="text-brand-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">{title}</h3>
              <p className="text-slate-500 mt-3 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

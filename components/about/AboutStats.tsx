export default function AboutStats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container-padded">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10 lakh+", label: "Pieces shipped per year" },
            { value: "48 hrs", label: "Average quote turnaround" },
            { value: "₹0", label: "Hidden fees — ever" },
            { value: "3–5 days", label: "Standard dispatch time" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl lg:text-4xl font-display font-bold text-brand-400">
                {s.value}
              </p>
              <p className="text-sm text-slate-400 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

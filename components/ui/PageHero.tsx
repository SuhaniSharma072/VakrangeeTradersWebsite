interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#1a4236] text-white py-16 lg:py-20 text-center">
      <div className="container-padded">
        <p className="section-label text-[#d4af37] mb-3">{label}</p>
        <h1 className="font-playfair text-4xl lg:text-5xl font-semibold text-white">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-5">
          <div className="h-px w-12 bg-[#b8960c]" />
          <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">{subtitle}</p>
          <div className="h-px w-12 bg-[#b8960c]" />
        </div>
      </div>
    </section>
  );
}

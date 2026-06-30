import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">Our Background</p>
            <h2 className="section-heading">A Family-Run Wholesale Retailer Built on Lungis and Towels</h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Vakrangee Traders is a family-run wholesale textile business based in
                Erode, Tamil Nadu, the city known as the &ldquo;Textile Hub of South India.&rdquo;
                Started and still run by our family, we have built this business on
                trust, personal relationships, and deep knowledge of the trade.
              </p>
              <p>
                Lungis and towels are our core speciality. We know these products
                inside out: the weaves, the thread counts, the colour fastness, the
                sizing. We stock them in depth so your orders are always ready to ship.
              </p>
              <p>
                Because we are family-run, every order gets personal attention. Our
                buyers come back to us for fair prices, proper GST billing, and a
                supply chain they can rely on season after season.
              </p>
            </div>

          </div>

          {/* Shop photo */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-xl">
              <Image
                src="/images/PHOTO-2026-06-29-07-11-42.jpg"
                alt="Vakrangee Traders — our shop in Erode"
                width={600}
                height={500}
                className="w-full object-cover"
              />
              {/* subtle dark gradient at bottom for caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-5">
                <p className="text-white text-sm font-medium tracking-wide">Our Shop — Erode, Tamil Nadu</p>
                <p className="text-white/70 text-xs mt-0.5">41, Alagiri Singh Street, Erode – 638001</p>
              </div>
            </div>
            {/* decorative border offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#b8960c] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

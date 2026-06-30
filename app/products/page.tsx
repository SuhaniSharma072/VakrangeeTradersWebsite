import type { Metadata } from "next";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our wholesale textile catalogue — lungis, towels, gamacha, bedsheets and more. Available in bulk with competitive pricing.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Our Catalogue"
        title="Wholesale Textile Products"
        subtitle="Explore our full range of high-quality textiles. All products available in bulk quantities with GST invoicing."
      />
      <div className="bg-[#1a4236]/5 border-y border-[#1a4236]/20">
        <div className="container-padded py-4 text-center text-sm text-[#1a4236]">
          Not ordering in bulk? No problem — contact us for individual or small quantity orders and we will be happy to help.
        </div>
      </div>

      <section className="container-padded py-16 lg:py-24 pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-64 shrink-0">
            <ProductFilters />
          </aside>
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </section>
    </>
  );
}

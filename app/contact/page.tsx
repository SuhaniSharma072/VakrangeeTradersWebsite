import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Erode Textiles for wholesale inquiries, pricing, and bulk orders. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Let's Talk Business"
        subtitle="Send us your requirements and we'll get back to you with pricing and availability."
      />
      <section className="container-padded py-16 lg:py-24 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}

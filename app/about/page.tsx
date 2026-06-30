import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vakrangee Traders — a family-run textile wholesale business based in Erode, Tamil Nadu, supplying quality fabrics across India since 2005.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Rooted in Erode, Trusted Across India"
        subtitle="A family business built on quality craftsmanship, fair pricing, and reliable supply chains."
      />
      <AboutStory />
      <AboutValues />
    </>
  );
}

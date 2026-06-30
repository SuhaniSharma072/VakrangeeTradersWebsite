import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OrderSteps from "@/components/how-to-order/OrderSteps";
import OrderFAQ from "@/components/how-to-order/OrderFAQ";
import OrderCTA from "@/components/how-to-order/OrderCTA";
import ShippingInfo from "@/components/how-to-order/ShippingInfo";

export const metadata: Metadata = {
  title: "How to Order",
  description:
    "Simple 4-step process to place a bulk textile order with Vakrangee Traders. MOQ from 100 pieces. GST invoicing available.",
};

export default function HowToOrderPage() {
  return (
    <>
      <PageHero
        label="Ordering Process"
        title="Simple. Fast. Reliable."
        subtitle="Place your first wholesale order in minutes. Our team handles everything from quote to doorstep delivery."
      />
      <OrderSteps />
      <ShippingInfo />
      <OrderFAQ />
      <OrderCTA />
    </>
  );
}

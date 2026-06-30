import { ShopifyProduct } from "@/lib/types";

interface ProductCardProps {
  product: ShopifyProduct;
}


export default function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node;
  const category = product.tags[0] ?? "textile";

  return (
    <div className="group">
      <div className="bg-neutral-50 aspect-square w-full mb-3 overflow-hidden border border-neutral-100">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : null}
      </div>
      <p className="text-xs text-gray-500 mb-3">{category.toUpperCase()}</p>
      <a
        href={`https://wa.me/919443673013?text=${encodeURIComponent(`Hi, I'd like to enquire about ${product.title}. Please share pricing and availability.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark"
      >
        Enquire on WhatsApp
      </a>
    </div>
  );
}

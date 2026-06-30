import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const number = "919443673013";

  return (
    <div className="space-y-5">
      <div className="border border-gray-200 p-6">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-5">Contact Details</h3>
        <p className="text-sm text-gray-700 font-medium mb-4">Dinesh Bohra <span className="text-gray-400 font-normal">— Owner</span></p>
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Phone size={15} className="mt-0.5 shrink-0 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <a href="tel:+919443673013" className="text-gray-500 hover:text-gray-900 transition-colors">
                +91 94436 73013
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin size={15} className="mt-0.5 shrink-0 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-500">41, Alagiri Singh Street<br />Erode — 638001, Tamil Nadu</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="border border-[#1a4236]/20 p-6 bg-[#1a4236]/5">
        <p className="text-sm text-[#1a4236] leading-relaxed">
          Not looking to order in bulk? No problem. Whether you need just a few pieces or a small assortment, reach out and we will be happy to help.
        </p>
      </div>

      <div className="border border-gray-200 p-6 bg-gray-50">
        <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900 mb-2 flex items-center gap-2">
          <MessageCircle size={14} />
          WhatsApp
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Most buyers find WhatsApp the fastest way to enquire, share requirements, and confirm orders.
        </p>
        <a
          href={`https://wa.me/${number}?text=${encodeURIComponent("Hi! I'd like to enquire about wholesale textile orders.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-semibold tracking-widest uppercase py-3 transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}

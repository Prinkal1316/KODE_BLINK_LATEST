import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "9552848466";
const WHATSAPP_NUMBER = "919552848466";

export default function FloatingContact() {
  const message = encodeURIComponent(
    "Hi KODEBLINK! I would like to know more about your services."
  );

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-center gap-3">
      {/* Call Us */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call KODEBLINK"
        title="Call Us"
        className="floating-contact floating-call flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg transition-colors hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-200"
      >
        <Phone size={27} strokeWidth={2.3} />
      </a>

      {/* WhatsApp Chat */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KODEBLINK on WhatsApp"
        title="Chat with Us"
        className="floating-contact floating-whatsapp flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle size={29} strokeWidth={2.3} />
      </a>
    </div>
  );
}
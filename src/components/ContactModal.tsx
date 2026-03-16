import { Phone, MessageCircle, X } from "lucide-react";
import { PHONE_NUMBER_1, PHONE_NUMBER_2, WHATSAPP_NUMBER } from "@/data/menuData";

const ContactModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  const whatsappMessage = encodeURIComponent("नमस्ते! मुझे भारत रेस्टोरेंट से ऑर्डर करना है।");

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm" style={{background: "hsl(var(--foreground) / 0.55)"}} onClick={onClose} />

      <div className="relative w-full max-w-sm shadow-2xl overflow-hidden"
        style={{
          background: "hsl(var(--card))",
          borderRadius: "1.5rem 1.5rem 0 0",
        }}
      >
        {/* Top gold accent bar */}
        <div className="h-[3px] gradient-gold" />

        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{background: "hsl(var(--border))"}} />
        </div>

        <div className="px-6 pb-8 pt-2">
          {/* Close */}
          <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))"}}>
            <X className="w-4 h-4" />
          </button>

          {/* Title */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-extrabold text-foreground">📞 संपर्क करें</h3>
            <p className="text-muted-foreground text-sm mt-1">ऑर्डर देने के लिए नीचे विकल्प चुनें</p>
          </div>

          <div className="grid gap-3">
            {/* Phone 1 */}
            <a
              href={`tel:${PHONE_NUMBER_1}`}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--deep-red)))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 4px 16px hsl(var(--primary) / 0.35)"
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: "hsl(var(--primary-foreground) / 0.15)"}}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold">कॉल करें</p>
                <p className="text-sm opacity-80">+91-{PHONE_NUMBER_1}</p>
              </div>
            </a>

            {/* Phone 2 */}
            <a
              href={`tel:${PHONE_NUMBER_2}`}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--accent)))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 4px 16px hsl(var(--accent) / 0.3)"
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: "hsl(var(--primary-foreground) / 0.15)"}}>
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold">दूसरा नंबर</p>
                <p className="text-sm opacity-80">+91-{PHONE_NUMBER_2}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
              style={{
                background: "linear-gradient(135deg, hsl(142 65% 28%), hsl(142 55% 35%))",
                color: "hsl(var(--primary-foreground))",
                boxShadow: "0 4px 16px hsl(142 65% 28% / 0.4)"
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: "hsl(var(--primary-foreground) / 0.15)"}}>
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold">WhatsApp ऑर्डर</p>
                <p className="text-sm opacity-80">तुरंत मेसेज भेजें</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

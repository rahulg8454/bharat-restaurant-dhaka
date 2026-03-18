import { Phone } from "lucide-react";

const FloatingContact = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fixed bottom-36 right-5 sm:bottom-6 z-50 flex flex-col items-center gap-3">
      <button
        onClick={onClick}
        className="w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 relative pulse-ring shadow-2xl"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--saffron)))",
          boxShadow: "0 6px 24px hsl(var(--gold) / 0.55), 0 2px 8px hsl(0 0% 0% / 0.25)"
        }}
        aria-label="संपर्क करें"
      >
        <Phone className="w-7 h-7" style={{ color: "hsl(16 82% 18%)" }} />
      </button>

      <span
        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
        style={{
          background: "hsl(var(--card))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
          boxShadow: "0 2px 8px hsl(0 0% 0% / 0.15)"
        }}
      >
        ऑर्डर
      </span>
    </div>
  );
};

export default FloatingContact;

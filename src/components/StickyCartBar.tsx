import { useCart } from "@/contexts/CartContext";

const StickyCartBar = ({ onClick }: { onClick: () => void }) => {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null; // hide if empty

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div
        onClick={onClick}
        className="max-w-3xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer transition-all active:scale-95"
        style={{
          background: "linear-gradient(135deg, hsl(var(--gold)), hsl(var(--saffron)))",
          boxShadow: "0 6px 24px hsl(var(--gold) / 0.4)",
          color: "hsl(16 82% 14%)"
        }}
      >
        {/* Left side */}
        <span className="font-bold text-sm">
          🛒 {totalItems} item{totalItems > 1 ? "s" : ""}
        </span>

        {/* Middle */}
        <span className="font-bold text-sm">
          ₹{totalPrice}
        </span>

        {/* Right */}
        <span className="font-extrabold text-sm">
          View Cart →
        </span>
      </div>
    </div>
  );
};

export default StickyCartBar;

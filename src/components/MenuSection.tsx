import { MenuCategory } from "@/data/menuData";
const MenuSection = ({ category }: { category: MenuCategory }) => {
  return (
    <section id={category.id} className="max-w-3xl mx-auto px-3 py-4">

      {/* Category Header with image banner */}
      <div
        className="relative overflow-hidden rounded-2xl mb-4 shadow-lg"
        style={{ border: "1.5px solid hsl(var(--primary) / 0.2)" }}
      >
        {/* Food image */}
        <div className="relative h-36 md:h-44 w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, hsl(var(--background) / 0.97) 0%, hsl(var(--background) / 0.6) 40%, transparent 100%)"
            }}
          />
          {/* Category info overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 flex items-end justify-between">
            <div className="flex items-center gap-2.5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--saffron)), hsl(var(--primary)))",
                  boxShadow: "0 4px 10px hsl(var(--primary) / 0.4)"
                }}
              >
                <span className="text-xl">{category.emoji}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold tracking-wide drop-shadow-lg" style={{ color: "hsl(var(--foreground))" }}>
                {category.title}
              </h2>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full shadow-md"
              style={{
                background: "hsl(var(--primary) / 0.85)",
                color: "hsl(var(--primary-foreground))",
                backdropFilter: "blur(8px)"
              }}
            >
              {category.items.length} आइटम
            </span>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid gap-2">
        {category.items.map((item, idx) => (
          <div
            key={idx}
            className="menu-card flex items-center justify-between rounded-2xl px-4 py-3 transition-all group"
          >
            {/* Left: veg indicator + name + qty */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Veg square */}
              <span
                className="w-5 h-5 rounded flex items-center justify-center text-[9px] flex-shrink-0 font-bold"
                style={{
                  border: "2px solid hsl(140 65% 36%)",
                  color: "hsl(140 65% 36%)",
                  background: "hsl(140 65% 36% / 0.08)"
                }}
              >●</span>
              <div className="min-w-0">
                <p className="font-bold text-sm md:text-base leading-tight truncate group-hover:text-primary transition-colors" style={{ color: "hsl(var(--card-foreground))" }}>
                  {item.name}
                </p>
                {item.quantity && (
                  <p className="text-xs mt-0.5 font-medium" style={{ color: "hsl(var(--muted-foreground))" }}>
                    📦 {item.quantity}
                  </p>
                )}
              </div>
            </div>
            {/* Right: price badge */}
            <div className="ml-3 flex-shrink-0">
              <span
                className="font-extrabold text-lg md:text-xl whitespace-nowrap px-3 py-1 rounded-xl"
                style={{
                  color: "hsl(var(--primary))",
                  background: "hsl(var(--primary) / 0.08)",
                  border: "1px solid hsl(var(--primary) / 0.15)"
                }}
              >
                ₹{item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default MenuSection;

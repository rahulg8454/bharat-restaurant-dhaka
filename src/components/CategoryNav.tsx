import { menuData } from "@/data/menuData";

const CategoryNav = ({ activeCategory, onSelect }: { activeCategory: string; onSelect: (id: string) => void }) => {
  return (
    <nav className="sticky top-0 z-20 py-2.5 px-3 shadow-md" style={{
      background: "linear-gradient(to bottom, hsl(var(--card)), hsl(var(--background) / 0.98))",
      borderBottom: "2px solid hsl(var(--gold) / 0.3)",
      backdropFilter: "blur(12px)"
    }}>
      <div className="max-w-3xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max px-0.5 py-0.5">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all touch-manipulation border ${
                activeCategory === cat.id
                  ? "nav-pill-active border-transparent scale-105 text-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border active:scale-95"
              }`}
            >
              {cat.emoji} {cat.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;

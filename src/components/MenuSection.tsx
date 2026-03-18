import { MenuCategory } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";

const MenuSection = ({ category }: { category: MenuCategory }) => {
  const { language } = useLanguage();
  const { addToCart, cartItems } = useCart();

  const categoryTitle = language === 'en' ? category.titleEn : category.title;
  const quantity =
  cartItems.find(
    (cartItem) =>
      cartItem.name === item.name &&
      cartItem.categoryId === category.id
  )?.quantity || 0;

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
            alt={categoryTitle}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 30%, hsl(var(--card) / 0.95) 100%)",
            }}
          />
        </div>

        {/* Category title and emoji */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>{category.emoji}</span>
            <span>{categoryTitle}</span>
          </h2>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="space-y-2">
        {category.items.map((item, index) => {
          const itemName = language === 'en' ? item.nameEn : item.name;
          return (
            <div
              key={index}
              className="menu-item-card flex items-center justify-between px-4 py-3 rounded-xl gap-3"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border) / 0.6)",
              }}
            >
              {/* Item info */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Veg/Non-veg indicator */}
                <div
                  className={`w-4 h-4 shrink-0 rounded-sm border-2 flex items-center justify-center ${
                    item.veg
                      ? "border-green-500"
                      : "border-red-500"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.veg ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>

                {/* Item name and quantity */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{itemName}</p>
                  {item.quantity && (
                    <p className="text-xs text-muted-foreground">{item.quantity}</p>
                  )}
                </div>
              </div>

              {/* Price and Add button */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-sm font-bold text-primary">
                  ₹{item.price}
                </span>
              <div className="flex items-center gap-1">
  <Button
    size="sm"
    variant="outline"
    className="h-7 w-7 p-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
    onClick={() =>
      addToCart({
        name: item.name,
        nameEn: item.nameEn,
        price: item.price,
        quantity: item.quantity,
        veg: item.veg,
        categoryId: category.id,
        categoryTitle: category.title,
        categoryTitleEn: category.titleEn,
      })
    }
  >
    <Plus className="h-3 w-3" />
  </Button>

  {quantity > 0 && (
    <span className="text-xs font-bold text-primary">
      +{quantity}
    </span>
  )}
</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuSection;          

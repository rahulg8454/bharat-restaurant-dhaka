import { MenuCategory } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const MenuSection = ({ category }: { category: MenuCategory }) => {
  const { language } = useLanguage();
  const { addToCart, cart, updateQuantity } = useCart();

  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categoryTitle =
    language === "en" ? category.titleEn : category.title;


  const handleOptionSelect = (item: any, category: any, option: any) => {
    const prices = item.price.split("/");

    let selectedPrice = prices[0];

    if (
      option.labelEn.toLowerCase() === "full" ||
      option.labelEn.toLowerCase() === "large" ||
      option.labelEn.toLowerCase() === "icecream" ||
      option.labelEn.toLowerCase() === "cone" ||
      option.labelEn.toLowerCase() === "gravy"
    ) {
      selectedPrice = prices[1] || prices[0];
    }

    addToCart({
      name: `${item.name} (${option.label})`,
      nameEn: `${item.nameEn} (${option.labelEn})`,
      price: selectedPrice,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryTitleEn: category.titleEn,
    });

    setSelectedItem(null);
  };

  return (
    <section id={category.id} className="max-w-3xl mx-auto px-3 py-4">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
        <div className="relative h-36 md:h-44 w-full overflow-hidden">
          <img
            src={category.image}
            alt={categoryTitle}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>{category.emoji}</span>
            <span>{categoryTitle}</span>
          </h2>
        </div>
      </div>

      {/* MENU */}
      <div className="space-y-2">
        {category.items.map((item, index) => {

        
          const quantity = cart
            .filter((c) => c.nameEn.startsWith(item.nameEn))
            .reduce((sum, c) => sum + c.qty, 0);

          const itemName =
            language === "en" ? item.nameEn : item.name;

          return (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border) / 0.6)",
              }}
            >
              {/* LEFT */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-4 h-4 border-2 border-green-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>

                <div>
                  <p className="text-sm font-semibold">{itemName}</p>

                  {(item.quantity || item.quantityEn) && (
                    <p className="text-xs text-muted-foreground">
                      {language === "en"
                        ? item.quantityEn || item.quantity
                        : item.quantity}
                    </p>
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">
                  ₹{item.price}
                </span>

                {quantity === 0 ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-7 p-0 rounded-full"
                    onClick={() => {
                      if (item.options) {
                        setSelectedItem({ item, category });
                      } else {
                        addToCart({
                          name: item.name,
                          nameEn: item.nameEn,
                          price: item.price,
                          categoryId: category.id,
                          categoryTitle: category.title,
                          categoryTitleEn: category.titleEn,
                        });
                      }
                    }}
                  >
                    <Plus size={14} />
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 border rounded-full px-2 py-1">
                  <button
  onClick={() => {
    const cartItem = cart.find((c) =>
      c.nameEn.startsWith(item.nameEn)
    );

    if (cartItem) {
      updateQuantity(cartItem.id, cartItem.qty - 1);
    }
  }}
  className="text-primary"
>
  <Minus size={14} />
</button>

                    <span>{quantity}</span>

                    <button
                      onClick={() => {
                        if (item.options) {
                          setSelectedItem({ item, category });
                        } else {
                          addToCart({
                            name: item.name,
                            nameEn: item.nameEn,
                            price: item.price,
                            categoryId: category.id,
                            categoryTitle: category.title,
                            categoryTitleEn: category.titleEn,
                          });
                        }
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* OPTION MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 w-72">
            <h3 className="font-bold text-center mb-3">
              {language === "en"
                ? selectedItem.item.nameEn
                : selectedItem.item.name}
            </h3>

            {selectedItem.item.options.map((opt: any, i: number) => (
              <button
                key={i}
                className="w-full border rounded-lg py-2 mb-2"
                onClick={() =>
                  handleOptionSelect(
                    selectedItem.item,
                    selectedItem.category,
                    opt
                  )
                }
              >
                {language === "en" ? opt.labelEn : opt.label}
              </button>
            ))}

            <button
              onClick={() => setSelectedItem(null)}
              className="text-sm text-gray-500 mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuSection;

import { useState } from "react";
import { menuData } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchModal = ({ open, onClose }: any) => {

  const { language } = useLanguage();
  const [query, setQuery] = useState("");

  if (!open) return null;

  // collect all items
  const allItems = menuData.flatMap(cat => cat.items);

  // filter logic
  const filteredItems = allItems.filter(item => {

    const nameEn = item.name?.en?.toLowerCase() || "";
    const nameHi = item.name?.hi?.toLowerCase() || "";

    return (
      nameEn.includes(query.toLowerCase()) ||
      nameHi.includes(query.toLowerCase())
    );
  });

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-24">

      <div className="bg-white w-[90%] max-w-md p-4 rounded-xl shadow-xl">

        <div className="flex justify-between mb-3">

          <h2 className="font-semibold">
            {language === "en" ? "Search Item" : "आइटम खोजें"}
          </h2>

          <button onClick={onClose}>✖</button>

        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={language === "en" ? "Type food name..." : "खाना खोजें..."}
          className="w-full border p-2 rounded mb-3"
        />

        <div className="max-h-60 overflow-y-auto space-y-2">

          {filteredItems.map(item => (

            <div
              key={item.id}
              className="border rounded p-2 text-sm"
            >

              {language === "en"
                ? item.name.en
                : item.name.hi}

            </div>

          ))}

          {filteredItems.length === 0 && (
            <p className="text-sm text-gray-500">
              {language === "en"
                ? "No items found"
                : "कोई आइटम नहीं मिला"}
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default SearchModal;

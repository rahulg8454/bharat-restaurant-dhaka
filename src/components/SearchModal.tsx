import { useState } from "react";
import { menuData } from "@/data/menuData";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchModal = ({ open, onClose }: any) => {

  const { language } = useLanguage();
  const [query, setQuery] = useState("");

  if (!open) return null;

  // flatten all items
  const allItems = menuData.flatMap(cat =>
    cat.items.map(item => ({
      ...item,
      categoryId: cat.id
    }))
  );

  // filter logic
  const filteredItems = allItems.filter(item => {

    const nameHindi = item.name.toLowerCase();
    const nameEnglish = item.nameEn.toLowerCase();

    return (
      nameHindi.includes(query.toLowerCase()) ||
      nameEnglish.includes(query.toLowerCase())
    );
  });

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-24">

      <div className="bg-white w-[92%] max-w-md p-4 rounded-xl shadow-xl">

        <div className="flex justify-between mb-3">

          <h2 className="font-semibold">
            {language === "en" ? "Search Items" : "आइटम खोजें"}
          </h2>

          <button onClick={onClose}>✖</button>

        </div>

        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            language === "en"
              ? "Type food item name..."
              : "खाने का नाम लिखें..."
          }
          className="w-full border p-2 rounded mb-3"
        />

        <div className="max-h-64 overflow-y-auto space-y-2">

     {filteredItems.map((item, index) => (

  <div
    key={index}
    className="border rounded p-2 text-sm cursor-pointer hover:bg-gray-50"
    
    onClick={() => {

      onClose();

      document
        .getElementById(item.categoryId)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    }}

  >

    {language === "en"
      ? item.nameEn
      : item.name}

  </div>

))}

          {filteredItems.length === 0 && (
            <p className="text-sm text-gray-500 text-center">

              {language === "en"
                ? "No matching item"
                : "कोई आइटम नहीं मिला"}

            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default SearchModal;

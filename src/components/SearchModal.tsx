import { menuData } from "@/data/menuData";

const SearchModal = ({ open, onClose }: any) => {

  if (!open) return null;

  const allItems = menuData.flatMap(cat => cat.items);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start pt-24">

      <div className="bg-white w-[90%] max-w-md p-4 rounded-xl shadow-xl">

        <div className="flex justify-between mb-3">
          <h2 className="font-semibold">Search Item</h2>

          <button onClick={onClose}>✖</button>
        </div>

        <input
          placeholder="Type food name..."
          className="w-full border p-2 rounded mb-3"
        />

        <div className="max-h-60 overflow-y-auto space-y-2">

          {allItems.map(item => (
            <div
              key={item.id}
              className="border rounded p-2 text-sm"
            >
              {item.name}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default SearchModal;

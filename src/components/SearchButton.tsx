import { Search } from "lucide-react";

const SearchButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3 py-2 rounded-full font-semibold text-xs transition-all hover:scale-105 active:scale-95 bg-white shadow-md"
    >
      <Search className="w-4 h-4" />
      <span>Search</span>
    </button>
  );
};

export default SearchButton;

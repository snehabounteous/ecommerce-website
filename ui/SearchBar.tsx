import { IconSearch } from '@tabler/icons-react';

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-4 py-2 focus:outline-none text-sm md:text-base"
      />
      <button className="hidden md:block p-2.5 bg-[var(--color-primary)] text-white hover:bg-green-600 transition-colors">
        <IconSearch size={20} stroke={2} />
      </button>
    </div>
  );
};

export default SearchBar;

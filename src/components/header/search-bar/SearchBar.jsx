import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="search-bar rounded-3xl  lg:block relative overflow-hidden">
      <input
        type="text"
        className="w-full  px-3 py-0.5 outline-none text-black"
        name=""
        id=""
        placeholder="Search"
      />
      <button className="absolute p-2 right-0 top-[50%] translate-y-[-50%] text-black bg-white">
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;

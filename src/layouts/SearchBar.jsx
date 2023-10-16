import { useState } from "react";
import PropTypes from "prop-types";

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText);
    setSearchText("");
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center"
      >
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search for a tutorial..."
          className="p-2 border-2 border-gray-300 rounded mr-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-lg/none border-none rounded text-slate-200 hover:cursor-pointer hover:bg-green-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

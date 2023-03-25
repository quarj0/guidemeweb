import React, { useState } from 'react';

import '../styles/SearchBar.css';


function SearchBar({ onSearch }) {
    
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSearch} className='search-form'>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyUp={
            (event) => {
                if (event.key === 'Enter') {
                    onSearch(searchText)
                }
            }
        }
        placeholder="Search for a tutorial..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;

import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchText);
    setSearchText('');
  };



  return (
    <div>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search for a tutorial..."
        />
        <button type="submit">Search</button>
      </form>
     
    </div>
  );
}

export default SearchBar;

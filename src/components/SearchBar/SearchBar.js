import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon from a library
import './SearchBar.css';
const SearchBar = ({ handleSearch }) => {
  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    handleSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="search-icon">
        <FiSearch className='icon'/>
      </div>
    </div>
  );
};

export default SearchBar;

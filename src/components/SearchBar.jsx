import { React, useState } from "react";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      window.location.href = `/search/${searchQuery}`;
    }
  };

  return (
    <form id="search" className="search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a title..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div className="searchResults"></div>
    </form>
  );
};

export default SearchBar;

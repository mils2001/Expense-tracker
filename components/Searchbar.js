import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search expenses..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

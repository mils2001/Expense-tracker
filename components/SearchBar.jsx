import React from "react";


const SearchBar = ({ onSearch }) => {

    return (

        <div className="search-bar">

            <input

                type="text"

                placeholder="Search expenses..."

                onChange={(e) => onSearch(e.target.value)}

            />

        </div>

    );

};


export default SearchBar;

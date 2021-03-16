import { useState } from "react";
import { SearchForm } from "../styles/SearchForm";

const SearchFormComponent = ({ handleSearchSubmit }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchForm action="" className="search-movie-form">
      <input
        type="text"
        placeholder="Movie Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={(e) => {
          handleSearchSubmit(e, search);
          setSearch("");
        }}
      >
        <i className="fas fa-search"></i>
      </button>
    </SearchForm>
  );
};

export default SearchFormComponent;

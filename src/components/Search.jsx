const Search = ({ searchText, setSearchText }) => {
  const onChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  return (
    <div className="input-group mb-3">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="search-icon"
      >
        <i className="bi bi-search"></i>
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Product search"
        aria-describedby="search-icon"
        value={searchText}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;

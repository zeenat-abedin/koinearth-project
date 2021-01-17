const Search = () => {
  return (
    <div className="input-group mb-3">
      <button className="btn" type="button" id="button-addon1">
        <i className="bi-alarm"></i>
      </button>
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  );
};

export default Search;

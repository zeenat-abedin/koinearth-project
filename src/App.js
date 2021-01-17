import { useState } from "react";

// Custom Components
import Products from "components/Products/Products";
import Search from "components/Search";

const App = () => {
  const [searchText, setSearchText] = useState("");

  console.log("searchText", searchText);

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <Search searchText={searchText} setSearchText={setSearchText} />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

import Search from "./components/Search";

const App = () => {
  const [searchText, setSearchText] = useState("");

  console.log("searchText", searchText);

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <Search searchText={searchText} setSearchText={setSearchText} />
        </div>
      </div>
    </div>
  );
};

export default App;

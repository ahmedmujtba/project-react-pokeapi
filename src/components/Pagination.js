import React from "react";

function Pagination({ nextPageHandler, prevPageHandler }) {
  return (
    <div className="pages">
      <button onClick={prevPageHandler}>Previous</button>
      <button onClick={nextPageHandler}>Next</button>
    </div>
  );
}

export default Pagination;

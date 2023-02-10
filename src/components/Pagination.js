import React from "react";

function Pagination({ nextPageHandler, prevPageHandler }) {
  return (
    <div className="pages">
      {prevPageHandler && <button onClick={prevPageHandler}>Previous</button>}
      {nextPageHandler && <button onClick={nextPageHandler}>Next</button>}
    </div>
  );
}

export default Pagination;

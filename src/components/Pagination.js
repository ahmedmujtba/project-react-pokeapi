import React from "react";

function Pagination({ nextPageHandler, prevPageHandler }) {
  return (
    <div className="pages">
      {prevPageHandler && (
        <button
          type="button"
          className="btn btn-danger btn-circle btn-xl"
          onClick={prevPageHandler}
        >
          Previous
        </button>
      )}
      {nextPageHandler && (
        <button
          type="button"
          className="btn btn-danger btn-circle btn-xl"
          onClick={nextPageHandler}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;

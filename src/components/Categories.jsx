import React from "react";
function Categories({ filterItem, diversityList }) {
  return (
    <div className="btn-group">
    {diversityList.map((curElem) => {
      return (
        <button
          className="btn-group__item"
          onClick={() => filterItem(curElem)}
        >
          {curElem}
        </button>
      );
    })}
  </div>
  );
}
export default Categories;
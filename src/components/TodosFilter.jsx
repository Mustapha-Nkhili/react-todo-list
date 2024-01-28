import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColorFilter, addStatusFilter } from "../actions";

export default function TodosFilter() {
  const dispatch = useDispatch();
  const [isFilterOptionsDisplayed, setIsFilterOptionsDIsplayed] =
    useState(false);
  const state = useSelector((store) => store.filters);

  // Toggle display of filter options when filter icon is clicked
  function handleFilterOptionsDisplaying() {
    setIsFilterOptionsDIsplayed((prev) => !prev);
  }

  // Handle filtering for both status and colors
  function handleStatusFilter(e) {
    e.target.classList.toggle("clicked");
    dispatch(addStatusFilter(e.target.value !== "" ? e.target.value : "all"));
  }

  function handleColorsFilter(e) {
    e.target.classList.toggle("clicked");
    dispatch(addColorFilter(e.target.value !== "" ? e.target.value : "white"));
  }

  return (
    <div className="todos-filter">
      <div className="filter-icon" onClick={handleFilterOptionsDisplaying}>
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <div
        className={classnames("content", {
          "display-filter-options": isFilterOptionsDisplayed,
        })}
      >
        <h2>Filterd By</h2>
        <select name="status" label="Status" onClick={handleStatusFilter}>
          <option value="">Status</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <select name="colors" label="Colors" onClick={handleColorsFilter}>
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
    </div>
  );
}

import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";
import TodoStatusFilter from "./filterComponent/TodoStatusFilter";
import TodoColorFilter from "./filterComponent/TodoColorFilter";

export default function TodosFilter() {
  const [isFilterOptionsDisplayed, setIsFilterOptionsDIsplayed] =
    useState(false);

  // Toggle display of filter options when filter icon is clicked
  function handleFilterOptionsDisplaying() {
    setIsFilterOptionsDIsplayed((prev) => !prev);
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
        <TodoStatusFilter />
        <TodoColorFilter />
      </div>
    </div>
  );
}

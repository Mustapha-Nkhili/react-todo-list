import { useDispatch } from "react-redux";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import { useState } from "react";
import TodoStatusFilter from "./filterComponent/TodoStatusFilter";
import TodoColorFilter from "./filterComponent/TodoColorFilter";
import { markAllTodosCompleted, clearAllCompletedTodos } from "../actions";

export default function TodosFilter() {
  const dispatch = useDispatch();
  const [isFilterOptionsDisplayed, setIsFilterOptionsDIsplayed] =
    useState(false);

  // Toggle display of filter options when filter icon is clicked
  function handleFilterOptionsDisplaying() {
    setIsFilterOptionsDIsplayed((prev) => !prev);
  }
  function handleMarkAllTodosCompleted() {
    dispatch(markAllTodosCompleted());
  }

  function handleClearCompleted() {
    dispatch(clearAllCompletedTodos());
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="mark-all-completed-btn"
            onClick={handleMarkAllTodosCompleted}
          >
            mark all completed
          </button>
          <button
            className="clear-completed-btn"
            onClick={handleClearCompleted}
          >
            clear completed
          </button>
        </div>
      </div>
    </div>
  );
}

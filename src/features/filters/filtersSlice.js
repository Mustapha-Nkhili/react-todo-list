import { createSelector } from "reselect";
import { selectTodoIds } from "../todos/todosSlice";

const initialState = {
  status: "all",
  colors: [],
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/changeTodosFilterStatus": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "filters/addTodosFilterColor": {
      if (action.color !== "") {
        return {
          ...state,
          colors: [...state.colors, action.color],
        };
      }
      return { ...state };
    }
    default:
      return state;
  }
}

export const selectFilteredTodoIds = createSelector(
  selectTodoIds,
  (state) => state.todos,
  (state) => state.filters,
  (todosId, todos, filters) => {
    const { status, colors } = filters;
    const showAllCompletions = status === "all";
    if (showAllCompletions && colors.length === 0) {
      return todosId;
    }

    const completedStatus = status === "completed";
    // Return either active or completed todos based on filter
    return todosId.filter((_, index) => {
      const statusMatches =
        showAllCompletions || todos[index].completed === completedStatus;
      const colorMatches =
        colors.length === 0 || colors.includes(todos[index].color);
      return statusMatches && colorMatches;
    });
  }
);

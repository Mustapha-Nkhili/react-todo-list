import { createSelector } from "reselect";
import { selectTodoIds } from "../todos/todosSlice";

const initialState = {
  status: "all",
  color: "red",
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/changeTodosFilterStatus": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
}

export const selectFilteredTodoIds = createSelector(
  [selectTodoIds, (state) => state.todos, (state) => state.filters.status],
  (todosId, todos, status) => {
    return todosId.filter((todoId, index) => {
      if (todoId === todos[index].id) {
        return (
          (status === "uncompleted" && !todos[index].completed) ||
          (status === "completed" && todos[index].completed) ||
          status === "all"
        );
      }
    });
  }
);

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
  selectTodoIds,
  (state) => state.todos,
  (state) => state.filters.status,
  (todoIds, todos, status) => {
    return todoIds.filter((todoId, index) => {
      if (index < todos.length && todoId === todos[index].id) {
        return (
          (status === "uncompleted" && !todos[index].completed) ||
          (status === "completed" && todos[index].completed) ||
          status === "all"
        );
      }
      return false;
    });
  }
);

// export const selectFilteredTodos = createSelector(
//   // First input selector: all todos
//   state => state.todos,
//   // Second input selector: current status filter
//   state => state.filters.status,
//   // Output selector: receives both values
//   (todos, status) => {
//     if (status === "all") {
//       return todos
//     }

//     const completedStatus = status === "completed"
//     // Return either active or completed todos based on filter
//     return todos.filter(todo => todo.completed === completedStatus)
//   }
// )

// export const selectFilteredTodoIds = createSelector(
//   // Pass our other memoized selector as an input
//   selectFilteredTodos,
//   // And derive data in the output selector
//   filteredTodos => filteredTodos.map(todo => todo?.id)
// )

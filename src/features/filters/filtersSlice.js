import { selectTodoIds } from "../todos/todosSlice";
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
  colors: [],
};


const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeTodosFilterStatus(state, action) {
      state.status = action.payload;
    },
    addTodosFilterColor(state, action) {
      const colors = new Set([...state.colors, action.payload]);

      state.colors = Array.from(colors);
    },
    removeTodosFilterColor(state, action) {
      const colors = new Set([...state.colors]);
      colors.delete(action.payload);

      state.colors = Array.from(colors);
    },
  },
});

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

export const {
  changeTodosFilterStatus,
  addTodosFilterColor,
  removeTodosFilterColor,
} = filtersSlice.actions;

export default filtersSlice.reducer;

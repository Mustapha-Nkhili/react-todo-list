import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filtersReducer,
  },
  preloadedState
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { createSelector } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      if (action.payload !== "") {
        state.push({ id: nanoid(), text: action.payload, completed: false });
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo(state, action) {
      state.map((todo, index) => {
        if (todo.id === action.payload) {
          state.splice(index, 1);
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    editTodo(state, action) {
      const { id, modifiedText } = action.payload;

      state.map((todo) => {
        if (todo.id === id) {
          todo.text = modifiedText;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodoStatus(state, action) {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    addTodoColor(state, action) {
      const { id, color } = action.payload;
      state.map((todo) => {
        if (id === todo.id) {
          todo.color = color;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    markAllTodosCompleted(state, action) {
      state.map((todo) => {
        if (!todo.completed) {
          todo.completed = true;
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    clearAllCompletedTodos(state, action) {
      state.forEach((todo, index) => {
        if (todo.completed) {
          state.splice(index, 1)
        }
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodoStatus,
  addTodoColor,
  markAllTodosCompleted,
  clearAllCompletedTodos,
} = todosSlice.actions;

export default todosSlice.reducer;

export const selectTodoIds = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo) => todo.id)
);

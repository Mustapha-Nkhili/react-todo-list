import { legacy_createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState;
const persistedTodosString = localStorage.getItem("todos");

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = legacy_createStore(rootReducer, preloadedState);

export default store;

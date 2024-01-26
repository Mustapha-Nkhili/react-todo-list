import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { todoReducer } from "./features/todos/todosSlice.js";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = legacy_createStore(todoReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

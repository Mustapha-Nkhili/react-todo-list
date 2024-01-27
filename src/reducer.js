import { combineReducers } from "redux";
import { todoReducer } from "./features/todos/todosSlice";

const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer
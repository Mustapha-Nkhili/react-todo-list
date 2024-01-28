import { combineReducers } from "redux";
import todoReducer  from "./features/todos/todosSlice";
import filtersReducer from "./features/filters/filtersSlice";

const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filtersReducer
})

export default rootReducer;
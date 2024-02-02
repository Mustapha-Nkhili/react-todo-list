import { nanoid } from "nanoid";
import { createSelector } from "reselect";

const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/addTodo":
      if (action.text !== "") {
        const todos = [
          ...state,
          { id: nanoid(), text: action.text, completed: false },
        ];
        localStorage.setItem("todos", JSON.stringify(todos));

        return todos;
      } else {
        return [...state];
      }
    case "todos/deleteTodo": {
      const undeletedTodos = state.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(undeletedTodos));

      return undeletedTodos;
    }
    case "todos/editTodo": {
      const todosWithEditedTodo = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, text: action.modifiedText };
        }

        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(todosWithEditedTodo));
      
      return todosWithEditedTodo;
    }
    case "todos/toggleTodoStatus": {
      const todosWithToggledTodo = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(todosWithToggledTodo));

      return todosWithToggledTodo;
    }
    case "todos/addTodoColor": {
      const todosWithColor = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, color: action.color };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(todosWithColor));

      return todosWithColor;
    }
    case "todos/markAllTodosCompleted": {
      const allCompletedTodos = state.map((todo) => {
        return { ...todo, completed: true };
      });
      localStorage.setItem("todos", JSON.stringify(allCompletedTodos));

      return allCompletedTodos;
    }
    case "todos/clearAllCompletedTodos": {
      const uncompletedTodos = state.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(uncompletedTodos));

      return uncompletedTodos;
    }
    default:
      return state;
  }
}

export const selectTodoIds = createSelector(
  (state) => state.todos,
  (todos) => todos.map((todo) => todo.id)
);

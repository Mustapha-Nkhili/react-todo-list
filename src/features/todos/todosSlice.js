import { nanoid } from "nanoid";

const initialState = [];

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/addTodo":
      if (action.text !== "") {
        return [
          ...state,
          { id: nanoid(), text: action.text, completed: false },
        ];
      } else {
        return [...state];
      }
    case "todos/deleteTodo":
      return state.filter((todo) => todo.id !== action.id);

    case "todos/editTodo":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, text: action.modifiedText };
        }
        return todo;
      });
    default:
      return state;
  }
}

import { nanoid } from "nanoid";

const initialState = {
  todos: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (action.text !== "") {
        return {
          ...state,
          todos: [
            ...state.todos,
            { text: action.text, id: nanoid(), completed: false },
          ],
        };
      } else {
        return {
          ...state,
          todos: [...state.todos],
        };
      }
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, text: action.modifiedText };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

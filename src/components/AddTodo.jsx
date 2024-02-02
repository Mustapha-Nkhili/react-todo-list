import { useRef } from "react";
import { addTodo } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function AddTodo() {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const addBtnRef = useRef();

  function handleAddTodo() {
    dispatch(addTodo(inputRef.current.value.trim()));
    inputRef.current.value = "";
  }

  const handleKeyPress = (event) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === "Enter") {
      event.preventDefault();
      // Simulate a click on the add button
      if (addBtnRef.current) {
        addBtnRef.current.click();
      }
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        ref={inputRef}
        placeholder="Enter what you want todo"
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={handleAddTodo}
        className="add-todo-btn btn"
        ref={addBtnRef}
      >
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
}

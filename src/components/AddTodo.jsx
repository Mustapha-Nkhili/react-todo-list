import { useEffect, useRef } from "react";
import { addTodo } from "../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const addBtnRef = useRef();

  function handleAddTodo() {
    dispatch(addTodo(inputRef.current.value));
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

  useEffect(() => {
    const inputElement = inputRef.current;
    const addBtnElement = addBtnRef.current;

    // Attach the event listener to the input element when the component mounts
    if (inputElement && addBtnElement) {
      inputElement.addEventListener("keydown", handleKeyPress);
    }

    // Remove the event listener when the component unmounts
    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [inputRef]);

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        ref={inputRef}
        placeholder="Enter what you want todo"
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

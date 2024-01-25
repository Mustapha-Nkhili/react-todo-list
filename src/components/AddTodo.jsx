import { useRef } from "react";
import { addTodo } from "../actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function AddTodo() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = "";
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo-input"
        ref={inputRef}
        placeholder="Enter what you want todo"
      />
      <button onClick={handleAddTodo} className="add-todo-btn btn">
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
}

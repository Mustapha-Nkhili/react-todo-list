import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodoStatus } from "../actions";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEdit,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const todoId = todo.id;
  const [isTodoModifing, setIsTodoModifing] = useState(false);
  const [modifiedText, setModifiedText] = useState("");
  const editInputRef = useRef();

  function handleTodoTextChanges(e) {
    setModifiedText(e.target.value);
  }

  function handleTodoEdited() {
    dispatch(editTodo(todoId, modifiedText));
    setIsTodoModifing(false);
  }

  function handleCancelTodoEdit() {
    setIsTodoModifing(false);
  }

  function handleTodoEdit() {
    setModifiedText(todo.text);
    setIsTodoModifing(true);
  }

  function handleDeleteTodo() {
    dispatch(deleteTodo(todoId));
  }

  function handleToggleTodoStatus() {
    dispatch(toggleTodoStatus(todoId))
  }
  return (
    <div className="todo" key={todoId} id={todoId}>
      {isTodoModifing ? (
        <div>
          <input
            type="text"
            className="edit-todo-input"
            value={modifiedText}
            onChange={handleTodoTextChanges}
            autoFocus
            ref={editInputRef}
          />
          <button className="edit-check-btn btn">
            <FontAwesomeIcon icon={faCheck} onClick={handleTodoEdited} />
          </button>
        </div>
      ) : (
        <div className="todo-text-container">
          <button
            className={classnames("toggle-status-btn", {active: todo.completed})}
            onClick={handleToggleTodoStatus}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <span className="todo-text">{todo.text}</span>
        </div>
      )}

      <div id={todo.id}>
        {isTodoModifing ? (
          <button
            className="cancel-edit-todo-btn btn"
            onClick={handleCancelTodoEdit}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : (
          <button className="edit-todo-btn btn" onClick={handleTodoEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button className="remove-todo-btn btn" onClick={handleDeleteTodo}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

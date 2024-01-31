import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { addTodoColor } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function TodoColorSelector({ todoId }) {
  const dispatch = useDispatch();
  const [isColorDisplayed, setIsColorDisplayed] = useState(false);
  const colors = ["red", "green", "blue", "orange", "purple"];

  function handleAddColor(color) {
    dispatch(addTodoColor(todoId, color));
    setIsColorDisplayed(false);
  }

  const todo = useSelector((state) =>
    state.todos.find(({ id }) => id === todoId)
  );

  return (
    <div className={classnames("select-colors", { clicked: isColorDisplayed })}>
      <span
        onClick={() => setIsColorDisplayed((prev) => !prev)}
        style={{ color: todo.color  }}
      >
        {todo.color === undefined ? "colors" : todo.color}{" "}
        <FontAwesomeIcon icon={faChevronDown} style={{ color: "black" }} />
      </span>
      <div
        className={classnames("select-colors-container", {
          active: isColorDisplayed,
        })}
      >
        {colors.map((color, index) => (
          <span
            onClick={() => handleAddColor(color)}
            style={{ backgroundColor: color }}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
}

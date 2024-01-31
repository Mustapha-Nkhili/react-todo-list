import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { addTodoColor } from "../../actions";
import { useDispatch } from "react-redux";

export default function ColorFiltersSelect({ todoId }) {
  const dispatch = useDispatch();
  const [isColorDisplayed, setIsColorDisplayed] = useState(false);
  const [chosenColor, setChosenColor] = useState("");
  const colors = ["red", "green", "blue", "orange", "purple"];

  function handleAddColor(color) {
    setChosenColor(color);
    dispatch(addTodoColor(todoId, chosenColor));
    setIsColorDisplayed(false);
  }

  return (
    <div className={classnames("select-colors", { clicked: isColorDisplayed })}>
      <span
        onClick={() => setIsColorDisplayed((prev) => !prev)}
        style={{ color: chosenColor }}
      >
        {chosenColor === "" ? "colors" : chosenColor}{" "}
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

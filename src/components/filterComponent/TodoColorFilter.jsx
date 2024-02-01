import { useDispatch, useSelector } from "react-redux";
import { addColorFilter, removeColorFilter } from "../../actions";

export default function TodoColorFilter() {
  const dispatch = useDispatch();
  const filterColors = useSelector((state) => state.filters.colors);
  const colors = ["red", "green", "blue", "orange", "purple"];

  function handleColorsFilter(e, color) {
    if (e.target.checked) {
      dispatch(addColorFilter(color));
    } else {
      dispatch(removeColorFilter(color))
    }
  }

  return (
    <div className="color-filter">
      <h2>Filter by colors</h2>
      {colors.map((color, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={color}
            id={color}
            value={color}
            checked={filterColors.includes(color)}
            onChange={(e) => handleColorsFilter(e, color)}
          />
          <label htmlFor={color}>{color}</label>
        </div>
      ))}
    </div>
  );
}

import { useDispatch } from "react-redux";
import { addStatusFilter } from "../../actions";

export default function StatusTodosFilter() {
  const dispatch = useDispatch();
  const status = ["all", "completed", "uncompleted"];

  function handleStatusFilter(e) {
    dispatch(addStatusFilter(e.target.value));
  }

  return (
    <>
      <div className="status-filter">
        <h2>Filter by status</h2>
        {status.map((status, index) => (
          <div key={index}>
            <input
              type="radio"
              name="status"
              value={status}
              id={status}
              onChange={handleStatusFilter}
            />
            <label htmlFor={status}>{status} todos</label>
          </div>
        ))}
      </div>
    </>
  );
}

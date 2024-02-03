import { useDispatch, useSelector } from "react-redux";
import { changeTodosFilterStatus } from "../../filtersSlice";

export default function TodosStatusFilter() {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state.filters.status);
  const statusArr = ["all", "completed", "uncompleted"];

  function handleStatusFilter(e) {
    dispatch(changeTodosFilterStatus(e.target.value));
  }

  return (
    <>
      <div className="status-filter">
        <h2>Filter by status</h2>
        {statusArr.map((status, index) => (
          <div key={index}>
            <input
              type="radio"
              name="status"
              value={status}
              id={status}
              checked={filterStatus === status}
              onChange={handleStatusFilter}
            />
            <label htmlFor={status}>{status} todos</label>
          </div>
        ))}
      </div>
    </>
  );
}

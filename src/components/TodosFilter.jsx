export default function TodosFilter() {
  return (
    <div className="todos-filter">
      <select name="filter" id="filter">
        <optgroup label="Status">
        <option value="">Filterd By</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
        </optgroup>
        <optgroup label="Colors">
          <option value="red">Red</option>
          <option value="yellow">yellow</option>
        </optgroup>
      </select>
    </div>
  );
}

import { shallowEqual, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "./TodosFilter";
import { selectFilteredTodoIds } from "../features/filters/filtersSlice";

export default function TodoList() {
  const todosRef = useRef();
  const filteredTodosId = useSelector(selectFilteredTodoIds);
  const remainingTodos = useSelector(
    (state) => state.todos.filter((todo) => !todo.completed),
    shallowEqual
  );
  const MAX_HEIGHT = 350;

  useLayoutEffect(() => {
    if (todosRef.current.offsetHeight > MAX_HEIGHT) {
      todosRef.current.style.height = `${MAX_HEIGHT}px`;
      todosRef.current.style.overflowY = "scroll";
    } else {
      todosRef.current.style.overflowY = "auto";
    }
  }, [todosRef]);
  
  return (
    <>
      <div className="todos-header">
        <span>
          {remainingTodos.length > 0 ? (
            <>
              <span>Remaining Todos :</span> {remainingTodos.length} items left
            </>
          ) : (
            "There's No Tasks"
          )}
        </span>
        <TodosFilter />
      </div>
      <main className="todos" ref={todosRef}>
        {filteredTodosId.map((todoId) => {
          return <TodoItem todoId={todoId} key={todoId} />;
        })}
      </main>
    </>
  );
}

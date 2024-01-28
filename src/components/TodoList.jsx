import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "./TodosFilter";

export default function TodoList() {
  const todosRef = useRef();
  const todos = useSelector((store) => store.todos);
  const statusFilter = useSelector((store) => store.filters.status);
  const MAX_HEIGHT = 350;

  useLayoutEffect(() => {
    if (todosRef.current.offsetHeight > MAX_HEIGHT) {
      todosRef.current.style.height = `${MAX_HEIGHT}px`;
      todosRef.current.style.overflowY = "scroll";
    } else {
      todosRef.current.style.height = "auto";
      todosRef.current.style.overflowY = "auto";
    }
  }, [todosRef]);

  const filteredTodos = todos.filter((todo) => {
    return (
      (statusFilter === "uncompleted" && !todo.completed) ||
      (statusFilter === "completed" && todo.completed) ||
      statusFilter === "all"
    );
  });
  return (
    <>
      <TodosFilter />
      <main className="todos" ref={todosRef}>
        {filteredTodos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </main>
    </>
  );
}

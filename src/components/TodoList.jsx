import { useSelector, shallowEqual } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "./TodosFilter";
import { selectTodoIds } from "../features/todos/todosSlice";

export default function TodoList() {
  const todosRef = useRef();
  const todos = useSelector((store) => store.todos);
  const todosId = useSelector(selectTodoIds);
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

  const filteredTodos = todosId.filter((todoId, index) => {
    if (todoId === todos[index].id) {
      return (
        (statusFilter === "uncompleted" && !todos[index].completed) ||
        (statusFilter === "completed" && todos[index].completed) ||
        statusFilter === "all"
      );
    }
  });

  return (
    <>
      <TodosFilter />
      <main className="todos" ref={todosRef}>
        {filteredTodos.map((todoId) => {
          return <TodoItem todoId={todoId} key={todoId} />;
        })}
      </main>
    </>
  );
}

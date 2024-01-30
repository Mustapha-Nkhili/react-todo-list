import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "./TodosFilter";
import { selectFilteredTodoIds } from "../features/filters/filtersSlice";

export default function TodoList() {
  const todosRef = useRef();
  const filteredTodosId = useSelector(selectFilteredTodoIds)
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


  return (
    <>
      <TodosFilter />
      <main className="todos" ref={todosRef}>
        {filteredTodosId.map((todoId) => {
          return <TodoItem todoId={todoId} key={todoId} />;
        })}
      </main>
    </>
  );
}

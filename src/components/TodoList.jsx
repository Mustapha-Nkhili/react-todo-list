import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "./TodosFilter";

export default function TodoList() {
  const todos = useSelector((store) => store);
  const todosRef = useRef();

  useLayoutEffect(() => {
    if (todosRef.current.offsetHeight > 350) {
      todosRef.current.style.height = "350px";
      todosRef.current.style.overflowY = "scroll";
    } else {
      todosRef.current.style.height = "auto";
      todosRef.current.style.overflowY = "auto";
    }
  }, [todosRef]);

  return (
    <main className="todos" ref={todosRef}>
      <TodosFilter />
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </main>
  );
}

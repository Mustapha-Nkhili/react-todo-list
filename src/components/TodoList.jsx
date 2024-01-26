import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";

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
    <div className="todos" ref={todosRef}>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

import { shallowEqual, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import TodosFilter from "../../filters/components/TodosFilter";
import { selectFilteredTodoIds } from "../../filters/filtersSlice";
import emptyTodListImg from "../../../assets/empty-list-img.png";

export default function TodoList() {
  const todosRef = useRef();
  const filteredTodosId = useSelector(selectFilteredTodoIds);
  const remainingTodos = useSelector(
    (state) => state.todos.filter((todo) => !todo.completed),
    shallowEqual
  );
  const MAX_HEIGHT = 350;

  useLayoutEffect(() => {
    if (filteredTodosId.length > 0) {
      if (todosRef.current.offsetHeight > MAX_HEIGHT) {
        todosRef.current.style.height = `${MAX_HEIGHT}px`;
        todosRef.current.style.overflowY = "scroll";
      } else {
        todosRef.current.style.overflowY = "auto";
      }
    }
  }, [todosRef, filteredTodosId]);

  return filteredTodosId.length > 0 ? (
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
        {filteredTodosId.map((todoId) => (
          <TodoItem todoId={todoId} key={todoId} />
        ))}
      </main>
    </>
  ) : (
    <div className="empty-todo-list">
      <span>
        You have no tasks to do! <span>Enjoy your day or</span>{" "}
        <span>AddTaks</span>
      </span>
      <img
        src={emptyTodListImg}
        alt="this is just an image that let the user now that the todo list is empty"
        className="empty-todo-list-img"
      />
    </div>
  );
}

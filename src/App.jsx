import AddTodo from "./features/todos/components/AddTodo";
import TodoList from "./features/todos/components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="todo-app-container">
      <h1>Todo list app</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

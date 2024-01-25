import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
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

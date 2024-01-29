export const deleteTodo = (id) => ({
  type: "todos/deleteTodo",
  id: id,
});

export const addTodo = (text) => ({
  type: "todos/addTodo",
  text: text,
});

export const editTodo = (id, text) => ({
  type: "todos/editTodo",
  id: id,
  modifiedText: text,
});

export const toggleTodoStatus = (id) => ({
  type: "todos/toggleTodoStatus",
  id: id,
});

export const addStatusFilter = (status) => ({
  type: "filters/changeTodosFilterStatus",
  status: status,
});

export const addColorFilter = (color) => ({
  type: "filters/changeTodosFilterColor",
});

export const deleteTodo = (id) => {
  return {
    type: "todos/deleteTodo",
    id: id,
  };
};

export const addTodo = (text) => {
  return {
    type: "todos/addTodo",
    text: text,
  };
};

export const editTodo = (id, text) => {
  return {
    type: "todos/editTodo",
    id: id,
    modifiedText: text,
  };
};


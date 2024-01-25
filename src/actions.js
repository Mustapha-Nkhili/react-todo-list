export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    text: text,
  };
};

export const editTodo = (id, text) => {
  return {
    type: "EDIT_TODO",
    id: id,
    modifiedText: text,
  };
};


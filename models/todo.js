const todos = [
  {
    id: 1,
    task: 'Wash the car',
    done: false,
  },
  {
    id: 2,
    task: 'Take out the trash',
    done: true,
  },
  {
    id: 3,
    task: 'Read the book',
    done: false,
  },
];

module.exports = {
  getAll,
  create,
  delete: deleteTodo,
};

function getAll() {
  return todos;
}

function create(newTodo) {
  newTodo.done = false;
  newTodo.id = todos.length + 1;
  todos.push(newTodo);
  return newTodo;
}

function deleteTodo(todoId) {
  const idx = todos.findIndex((todo) => todo.id === parseInt(todoId));
  todos.splice(idx, 1);
  return todos;
}

const Todo = require('../models/todo');

module.exports = {
  index,
  create,
  delete: deleteTodo,
};

function index(req, res) {
  const todos = Todo.getAll();
  res.json(todos);
}

function create(req, res) {
  const newTodo = Todo.create(req.body);
  res.json(newTodo);
}

function deleteTodo(req, res) {
  const todos = Todo.delete(req.params.id);
  res.json(todos);
}

const Todo = require('../models/todo');

module.exports = {
  index,
  create,
};

function index(req, res) {
  const todos = Todo.getAll();
  res.json(todos);
}

function create(req, res) {
  const newTodo = Todo.create(req.body);
  res.json(newTodo);
}

const Todo = require('../models/todo');

module.exports = {
  index,
};

function index(req, res) {
  const todos = Todo.getAll();
  res.json(todos);
}

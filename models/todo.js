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
};

function getAll() {
  return todos;
}

/*------ State -----------*/
let todos;

/*------ Cached Elements -------*/
const todoListEl = document.querySelector('ul');

/*------ Functions ------ */
fetchTodos();

async function fetchTodos() {
  const response = await fetch('http://localhost:3000/todos');
  todos = await response.json();
  render();
}

function render() {
  todos.forEach((todo) => {
    const liEl = document.createElement('li');
    liEl.innerText = todo.task;
    if (todo.done) {
      liEl.style.textDecoration = 'line-through';
    }
    todoListEl.append(liEl);
  });
}

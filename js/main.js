/*------ State -----------*/
let todos;

/*------ Cached Elements -------*/
const todoListEl = document.querySelector('ul');
const inputEl = document.getElementById('task');
/*------ Event Listeners ------*/
document
  .querySelector('form')
  .addEventListener('submit', function (evt) {
    evt.preventDefault();
    submitNewTodo();
  });

todoListEl.addEventListener('click', function (evt) {
  const btnList = document.querySelectorAll('ul button');
  btnList.forEach((btn) => {
    if (evt.target === btn) {
      deleteTodo(evt.target);
    }
  });
});
/*------ Functions ------ */
fetchTodos();

async function fetchTodos() {
  const response = await fetch('http://localhost:3000/todos');
  todos = await response.json();
  render();
}

function render() {
  todoListEl.innerHTML = '';
  todos.forEach((todo) => {
    const liEl = document.createElement('li');
    liEl.innerHTML = `${todo.task} <button id="${todo.id}">X</button>`;
    if (todo.done) {
      liEl.style.textDecoration = 'line-through';
    }
    todoListEl.append(liEl);
  });
}

async function submitNewTodo() {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      task: inputEl.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(
    'http://localhost:3000/todos',
    options
  );
  const newTodo = await response.json();
  todos.push(newTodo);
  inputEl.value = '';

  render();
}

async function deleteTodo(btnEl) {
  const todoId = btnEl.id;
  const options = {
    method: 'DELETE',
  };

  const response = await fetch(
    `http://localhost:3000/todos/${todoId}`,
    options
  );
  todos = await response.json();
  render();
}

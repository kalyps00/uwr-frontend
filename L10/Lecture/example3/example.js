const bodyElement = document.querySelector("body");

const todos = [
  { id: 1, text: "Learn JavaScript", completed: false },
  { id: 2, text: "Learn TypeScript", completed: false },
  { id: 3, text: "Learn React", completed: false },
  { id: 4, text: "Learn Node.js", completed: false },
  { id: 5, text: "Learn Express.js", completed: false },
];

const renderTodos = () => {
  const todoListElement = document.createElement("ul");
  todos.forEach((todo) => {
    const todoItemElement = document.createElement("li");
    todoItemElement.innerText = `${todo.id} - ${todo.text}`;
    todoListElement.appendChild(todoItemElement);
  });
  bodyElement.appendChild(todoListElement);
};

renderTodos();

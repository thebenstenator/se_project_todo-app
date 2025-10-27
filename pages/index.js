import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
// Keep the template as a selector string so the Todo class can query it.
const todoTemplate = "#todo-template";
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
/*const generateTodo = (data) => {
  const todoElement = todoTemplate.content
    .querySelector(".todo")
    .cloneNode(true);
  const todoNameEl = todoElement.querySelector(".todo__name");
  const todoCheckboxEl = todoElement.querySelector(".todo__completed");
  const todoLabel = todoElement.querySelector(".todo__label");
  const todoDate = todoElement.querySelector(".todo__date");
  const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

  todoNameEl.textContent = data.name;
  todoCheckboxEl.checked = data.completed;

  // Apply id and for attributes.
  // The id will initially be undefined for new todos.
  todoCheckboxEl.id = `todo-${data.id}`;
  todoLabel.setAttribute("for", `todo-${data.id}`);

  // If a due date has been set, parsing this it with `new Date` will return a
  // number. If so, we display a string version of the due date in the todo.
  const dueDate = new Date(data.date);
  if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }

  todoDeleteBtn.addEventListener("click", () => {
    todoElement.remove();
  });

  return todoElement;
};*/

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  // Give the new todo a simple unique id.
  const id = Date.now().toString();
  const values = { id, name, date };
  const todo = new Todo(values, todoTemplate);
  todosList.append(todo.getView());
  closeModal(addTodoPopup);
});

initialTodos.forEach((item) => {
  const todo = new Todo(item, todoTemplate);
  todosList.append(todo.getView());
});

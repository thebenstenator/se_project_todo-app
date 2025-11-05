import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = "#todo-template";
const todosList = document.querySelector(".todos__list");

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = new Todo(item, todoTemplate);
    const todoElement = todo.getView();
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

const openModal = (modal) => {
  if (modal === addTodoPopup) {
  }
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const id = uuidv4();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  const values = { id, name };
  if (dateInput) {
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    values.date = date;
  }

  const todo = new Todo(values, todoTemplate);
  const todoElement = todo.getView();
  section.addItem(todoElement);

  closeModal(addTodoPopup);
  formValidator.resetValidation();
});

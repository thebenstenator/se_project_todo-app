import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todoTemplate = "#todo-template";
const todosList = document.querySelector(".todos__list");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = new Todo(item, todoTemplate, handleCheck, handleDelete);
    const todoElement = todo.getView();
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const { name, date: dateInput } = inputValues;
    const id = uuidv4();
    const values = { id, name };

    if (dateInput) {
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      values.date = date;
    }

    const todo = new Todo(values, todoTemplate, handleCheck, handleDelete);
    const todoElement = todo.getView();
    section.addItem(todoElement);

    todoCounter.updateTotal(true);
    addTodoPopup.close();
    formValidator.resetValidation();
  },
});

addTodoPopup.setEventListeners();

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

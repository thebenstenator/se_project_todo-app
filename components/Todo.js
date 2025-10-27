class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateSelector = selector;
  }

  _getTemplate() {
    const todoElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".todo")
      .cloneNode(true);

    return todoElement;
  }

  _setEventListeners() {
    this._todoCheckbox.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
  }

  getView() {
    this._todoElement = this._getTemplate();

    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoCheckbox = this._todoElement.querySelector(".todo__completed");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoCheckbox.checked = this._data.completed;
    this._todoCheckbox.id = `todo-${this._data.id}`;
    this._todoNameEl.textContent = this._data.name;

    if (this._data.date) {
      const dueDate = new Date(this._data.date);
      this._todoDate.textContent = `Due: ${dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    const label = this._todoElement.querySelector(".todo__label");
    label.setAttribute("for", `todo-${this._data.id}`);

    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;

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

  getView() {}
}

import displayController from "./displayController";

export default class Todo {
    checked = false;
    #id = null;
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.#id = "id" + Math.random().toString(16).slice(2);
    }

    edit(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        displayController.editTodo(this);
    }

    get id() {
        return this.#id;
    }
}

import displayController from "./displayController";
import Project from "./project";

export default class Todo {
    checked = false;
    #id = null;
    #project = null;
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.#id = "id" + Math.random().toString(16).slice(2);
        this.#project = Project.active;
    }

    edit(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        displayController.editTodo(this);
    }

    delete() {
        this.#project.removeTodo(this.#id);
    }

    get id() {
        return this.#id;
    }
}

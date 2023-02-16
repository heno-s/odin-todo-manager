import displayController from "./displayController.js";

export default class Project {
    #todos = [];
    #id = 0;
    constructor(title) {
        this.title = title;
        this.setActive();
        this.#id = "id" + new Date().getTime();
    }

    addTodo(todo) {
        this.#todos.push(todo);
        displayController.appendTodo(todo);
    }

    removeTodo(index) {
        this.#todos.splice(index, 1);
        displayController.showProjectTodos(this);
    }

    getTodo(index) {
        return this.#todos[index];
    }

    setActive() {
        displayController.setActiveProject(this);
        Project.#active = this;
    }

    get id() {
        return this.#id;
    }

    get todos() {
        return [...this.#todos];
    }

    static #active;
    static get active() {
        return Project.#active;
    }
}

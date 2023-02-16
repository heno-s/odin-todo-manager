import displayController from "./displayController.js";

export default class Project {
    #todos = [];
    #id = 0;
    constructor(title) {
        this.title = title;
        this.#id = "id" + Math.random().toString(16).slice(2);
        displayController.appendProject(this);
        Project.setActive(this);
    }

    addTodo(todo) {
        this.#todos.push(todo);
        displayController.appendTodo(todo);
    }

    removeTodo(id) {
        this.#todos.splice(
            this.#todos.findIndex((todo) => todo.id === id),
            1
        );
        displayController.removeTodo(id);
    }

    getTodo(id) {
        return this.#todos.find((todo) => todo.id === id);
    }

    get id() {
        return this.#id;
    }

    static setActive(project) {
        Project.#active = project;
        displayController.setActiveProject(project);
    }

    get todos() {
        return [...this.#todos];
    }

    static #active;
    static get active() {
        return Project.#active;
    }
}

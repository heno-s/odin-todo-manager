import displayController from "./displayController.js";

export default class Project {
    #todos = [];
    #id = 0;
    constructor(title) {
        this.title = title;
        this.#id = "id" + Math.random().toString(16).slice(2);
    }

    addTodo(todo) {
        this.#todos.push(todo);
        displayController.appendTodo(todo);
    }

    removeTodo(index) {
        this.#todos.splice(index, 1);
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

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
    }

    removeTodo(index) {
        this.#todos.splice(index, 1);
    }

    getTodo(index) {
        return this.#todos[index];
    }

    setActive() {
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

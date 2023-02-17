import displayController from "./displayController.js";
import { getFromStorage, saveToStorage } from "./index.js";
import Todo from "./todo.js";

const projects = [];

function _loadProjects() {
    const savedProjects = getFromStorage("projects") || [];
    savedProjects.forEach(({ title, todos }) => {
        const project = new Project(title);
        todos.forEach(({ title, description, priority, dueDate }) => {
            const todo = new Todo(
                title,
                description,
                priority,
                dueDate
            );
            project.addTodo(todo);
        });
        projects.push(project);
    });
}

export function getProjects() {
    return [...projects];
}

export function saveProject(project) {
    projects.push(project);
    saveToStorage("projects", projects);
}

export default class Project {
    #todos = [];
    #id = 0;
    constructor(title) {
        this.title = title;
        this.#id = "id" + Math.random().toString(16).slice(2);
        this.toJSON = function () {
            const todos = this.#todos;
            return { ...this, todos };
        };
    }

    addTodo(todo) {
        this.#todos.push(todo);
        if (Project.active !== undefined) {
            displayController.appendTodo(todo);
        }
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

_loadProjects();

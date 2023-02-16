import Project from "./project.js";

export default class Todo {
    checked = false;
    constructor(title, description, priority, dueDate) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = Project.active;
        this.project.addTodo(this);
    }
}

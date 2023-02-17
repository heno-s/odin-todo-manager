import displayController from "./displayController";
import initPage from "./loadInit";
import Project, {
    getProjects,
    removeProject,
    saveProject,
} from "./project";
import Todo from "./todo";

initPage();

export function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

/* ELEMENTS */
const addTask = document.querySelector(".add-task");
const todoForm = document.querySelector(".todo-form");
const todosContainer = document.querySelector(".todos");
const projectsDOM = document.querySelector(".projects");
const addProject = document.querySelector(".add-project");
const projectForm = document.querySelector(".project-form");

/* LISTENERS */
projectsDOM.addEventListener("click", (evt) => {
    const t = evt.target;
    if (!t.closest(".project")) {
        return null;
    }
    const projects = getProjects();
    const projectDOM = t.closest(".project");
    const project = projects.find(
        (project) => project.id === projectDOM.id
    );
    if (t.closest(".mdi-trash-can-outline")) {
        const projects = removeProject(project);
        const wasActive = displayController.removeProject(project);
        if (wasActive && projects.length > 0) {
            Project.setActive(projects[0]);
        }
        return true;
    }

    Project.setActive(project);
});

addProject.addEventListener(
    "click",
    displayController.toggleProjectForm
);

projectForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (projectForm.projectTitle.value) {
        const project = new Project(projectForm.projectTitle.value);
        saveProject(project);
        displayController.appendProject(project);
        Project.setActive(project);
    }
    displayController.toggleProjectForm();
});

addTask.addEventListener(
    "click",
    displayController.toggleTodoAddForm
);

todoForm
    .querySelector(".close-form")
    .addEventListener("click", displayController.toggleTodoAddForm);

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const [title, description, priority, dueDate] = [
        todoForm.title.value,
        todoForm.description.value,
        todoForm.priority.value,
        todoForm.dueDate.valueAsDate,
    ];

    const todo = new Todo(title, description, priority, dueDate);
    Project.active.addTodo(todo);
    displayController.toggleTodoAddForm();
});

todosContainer.addEventListener("click", (evt) => {
    const t = evt.target;
    const todoDOM = t.closest(".todo");
    const todo = Project.active.getTodo(todoDOM.id);
    if (!todoDOM) {
        return null;
    }

    if (t.type === "checkbox") {
        todo.checked = t.checked;
    }
    if (t.closest(".todo-body")) {
        displayController.createEditForm(todo);
    }
    if (t.classList.contains("mdi-trash-can-outline")) {
        todo.delete();
    }
});

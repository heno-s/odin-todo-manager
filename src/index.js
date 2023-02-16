import displayController from "./displayController";
import initPage from "./loadInit";
import Project from "./project";
import Todo from "./todo";

initPage();

const addTask = document.querySelector(".add-task");
const todoForm = document.querySelector(".todo-form");

addTask.addEventListener("click", (evt) => {
    displayController.toggleTodoForm();
});

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const [title, description, priority, dueDate] = [
        todoForm.title.value,
        todoForm.description.value,
        todoForm.priority.value,
        todoForm.dueDate.value,
    ];

    const todo = new Todo(title, description, priority, dueDate);
    Project.active.addTodo(todo);
    todoForm.reset();
    displayController.toggleTodoForm();
});

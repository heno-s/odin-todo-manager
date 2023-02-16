import displayController from "./displayController";
import initPage from "./loadInit";

initPage();

const addTask = document.querySelector(".add-task");
const todoForm = document.querySelector(".todo-form");

addTask.addEventListener("click", (evt) => {
    displayController.toggleTodoForm();
});

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    displayController.toggleTodoForm();
});

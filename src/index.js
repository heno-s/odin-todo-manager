import displayController from "./displayController";
import initPage from "./loadInit";
import Project from "./project";
import Todo from "./todo";

initPage();

/* ELEMENTS */
const addTask = document.querySelector(".add-task");
const todoForm = document.querySelector(".todo-form");
const todosContainer = document.querySelector(".todos");

/* LISTENERS */
addTask.addEventListener("click", (evt) => {
    displayController.toggleTodoAddForm();
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
        const todoForm = displayController.showEditForm(todo);
        if (todoForm === null) {
            return null;
        }

        todoForm.addEventListener(
            "submit",
            (evt) => {
                evt.preventDefault();
                const [title, description, priority, dueDate] = [
                    todoForm.title.value,
                    todoForm.description.value,
                    todoForm.priority.value,
                    todoForm.dueDate.valueAsDate,
                ];
                todo.edit(title, description, priority, dueDate);
            },
            { once: true }
        );
    }
});

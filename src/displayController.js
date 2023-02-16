function setActiveProject(project) {
    _clearTodos();
    const todos = project.todos;
    todos.forEach(appendTodo);
}

function appendTodo(todo) {
    const todoDOM = _createTodo(todo);
    const container = document.querySelector(".todos");

    container.appendChild(todoDOM);
}

function _createTodo(todo) {
    const { title, description, priority, dueDate } = todo;
    const todoDOM = document.createElement("div");
    todoDOM.classList.add("todo");

    return todoDOM;
}

function _clearTodos() {
    const container = document.querySelector(".todos");
    container.innerHTML = "";
}

export default {
    setActiveProject,
    appendTodo,
};

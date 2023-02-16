function appendProject(project) {
    const projectDOM = _createProject(project);
    const projects = document.querySelector(".projects");
    projects.appendChild(projectDOM);
}

function _createProject(project) {
    const { title, id } = project;
    const projectDOM = document.createElement("li");
    projectDOM.classList.add("project");
    projectDOM.id = id;

    const projectName = document.createElement("span");
    projectName.classList.add("project-name");
    projectName.textContent = title;

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("mdi");
    deleteIcon.classList.add("mdi-trash-can-outline");

    projectDOM.appendChild(projectName);
    projectDOM.appendChild(deleteIcon);

    return projectDOM;
}

function setActiveProject(project) {
    _removeActiveProject();
    const projectDOM = document.getElementById(project.id);
    projectDOM.classList.add("active");
    _showProjectTodos(project);
}

function _removeActiveProject() {
    const activeProject = document.querySelector(".project.active");
    if (!activeProject) {
        return;
    }
    activeProject.classList.remove("active");
    _removeCurrentTodos();
}

function _removeCurrentTodos() {
    const container = document.querySelector(".todos");
    container.innerHTML = "";
}

function _showProjectTodos(project) {
    const todos = project.todos;
    todos.forEach(appendTodo);
}

function appendTodo(todo) {
    const todoDOM = _createTodo(todo);
    const container = document.querySelector(".todos");

    container.appendChild(todoDOM);
}

function _createTodo(todo) {
    const { title, description, priority, dueDate, id, checked } =
        todo;
    const todoDOM = document.createElement("div");
    todoDOM.classList.add("todo");

    const priorityDOM = document.createElement("input");
    priorityDOM.type = "checkbox";
    priorityDOM.classList.add("priority");
    _setPriority(priorityDOM, priority);
    priorityDOM.checked = checked;

    const todoBody = _createTodoBody(title, description, dueDate);

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("mdi");
    deleteIcon.classList.add("mdi-trash-can-outline");
    console.log(todoBody);
    todoDOM.appendChild(priorityDOM);
    todoDOM.appendChild(todoBody);
    todoDOM.appendChild(deleteIcon);

    todoDOM.id = id;

    return todoDOM;
}

function toggleTodoAddForm() {
    const addTask = document.querySelector(".add-task");
    addTask.classList.toggle("hide");

    const todoForm = document.querySelector("#todo-form");
    todoForm.reset();
    todoForm.classList.toggle("hide");
}

function _cloneTodoForm() {
    const todoForm = document
        .querySelector("#todo-form")
        .cloneNode(true);
    todoForm.id = "edit-form";
    todoForm.reset();
    todoForm.classList.remove("hide");

    return todoForm;
}

function createEditForm(todo) {
    if (document.querySelector("#edit-form")) {
        return null;
    }
    const { title, description, priority, dueDate, id } = todo;
    const todoDOM = document.getElementById(todo.id);
    const editForm = _cloneTodoForm();

    editForm.dataset.id = id;
    editForm.title.value = title;
    editForm.description.value = description;
    editForm.priority.value = priority;
    if (dueDate) {
        editForm.dueDate.valueAsDate = dueDate;
    }

    editForm.addEventListener(
        "submit",
        (evt) => {
            evt.preventDefault();
            const [title, description, priority, dueDate] = [
                editForm.title.value,
                editForm.description.value,
                editForm.priority.value,
                editForm.dueDate.valueAsDate,
            ];
            todo.edit(title, description, priority, dueDate);
        },
        { once: true }
    );

    editForm.querySelector(".close-form").addEventListener(
        "click",
        (e) => {
            editForm.remove();
            todoDOM.classList.remove("hide");
        },
        { once: true }
    );

    todoDOM.insertAdjacentElement("afterend", editForm);
    todoDOM.classList.add("hide");

    return editForm;
}

function editTodo(todo) {
    const { title, description, priority, id, dueDate } = todo;

    const todoDOM = document.getElementById(id);
    _setPriority(todoDOM.querySelector(".priority"), priority);
    const todoBody = _createTodoBody(title, description, dueDate);
    todoDOM.querySelector(".todo-body").replaceWith(todoBody);

    todoDOM.classList.remove("hide");
    const editForm = document.querySelector("#edit-form");
    editForm && editForm.remove();
    return true;
}

function removeTodo(id) {
    const todo = document.getElementById(id);
    todo.remove();
}

function toggleProjectForm() {
    const addProject = document.querySelector(".add-project");
    addProject.classList.toggle("hide");

    const projectForm = document.querySelector(".project-form");
    projectForm.reset();
    projectForm.classList.toggle("hide");
}

function _createTodoBody(title, description, dueDate) {
    const todoBody = document.createElement("div");
    todoBody.classList.add("todo-body");

    const todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = title;

    todoBody.appendChild(todoTitle);

    if (description) {
        const todoDescription = document.createElement("div");
        todoDescription.classList.add("todo-description");
        todoDescription.textContent =
            description.substr(0, 50) +
            (description.length > 50 ? "..." : "");

        todoBody.appendChild(todoDescription);
    }
    if (dueDate) {
        const todoDueDate = document.createElement("div");
        todoDueDate.classList.add("todo-due-date");

        const calendar = document.createElement("div");
        calendar.classList.add("mdi");
        calendar.classList.add("mdi-calendar-clock-outline");

        const todoDate = document.createElement("div");
        todoDate.classList.add("todo-date");
        todoDate.textContent = dueDate;

        todoDueDate.appendChild(calendar);
        todoDueDate.appendChild(todoDate);

        todoBody.appendChild(todoDueDate);
    }

    return todoBody;
}

function _setPriority(priorityDOM, priority) {
    switch (+priority) {
        case 0:
            priorityDOM.classList.add("priority-low");
            break;
        case 1:
            priorityDOM.classList.add("priority-medium");
            break;
        case 2:
            priorityDOM.classList.add("priority-high");
            break;
        default:
            priorityDOM.classList.add("priority-low");
            break;
    }
}

export default {
    toggleTodoAddForm,
    toggleProjectForm,
    appendProject,
    setActiveProject,
    appendTodo,
    createEditForm,
    editTodo,
    removeTodo,
};

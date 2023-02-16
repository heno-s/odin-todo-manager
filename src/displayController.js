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
    activeProject.classList.remove(".ative");
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
    const { title, description, priority, dueDate, id } = todo;
    const todoDOM = document.createElement("div");
    todoDOM.classList.add("todo");

    const priorityDOM = document.createElement("input");
    priorityDOM.type = "checkbox";
    priorityDOM.classList.add("priority");

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

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("mdi");
    deleteIcon.classList.add("mdi-trash-can-outline");

    todoDOM.appendChild(priorityDOM);
    todoDOM.appendChild(todoBody);
    todoDOM.appendChild(deleteIcon);

    todoDOM.id = id;

    return todoDOM;
}

function toggleTodoAddForm() {
    const addTask = document.querySelector(".add-task");
    addTask.classList.toggle("hide");

    const todoForm = document.querySelector(".todo-form");
    todoForm.classList.toggle("hide");
}

function _cloneTodoForm() {
    const todoForm = document
        .querySelector(".todo-form")
        .cloneNode(true);
    todoForm.reset();
    todoForm.classList.remove("hide");

    return todoForm;
}

function showEditForm(todo) {
    if (document.querySelector(".todo-form").dataset.id) {
        return null;
    }
    const { title, description, priority, dueDate, id } = todo;
    const todoDOM = document.getElementById(todo.id);
    const todoForm = _cloneTodoForm();

    todoForm.dataset.id = id;
    todoForm.title.value = title;
    todoForm.description.value = description;
    todoForm.priority.value = priority;
    if (dueDate) {
        todoForm.dueDate.valueAsDate = dueDate;
    }

    todoDOM.insertAdjacentElement("afterend", todoForm);
    todoDOM.classList.add("hide");

    return todoForm;
}

function editTodo(todo) {
    const { title, description, priority, id, dueDate } = todo;

    const todoDOM = document.getElementById(id);
    const todoBody = todoDOM.querySelector(".todo-body");
    const todoForm = document.querySelector(".todos .todo-form");

    todoDOM.querySelector(".todo-title").textContent = title;
    todoDOM.querySelector(".priority").value = priority;
    let descriptionDOM = todoDOM.querySelector(".todo-description");
    let dateDOM = todoDOM.querySelector(".todo-due-date");

    if (!description) {
        descriptionDOM && descriptionDOM.remove();
    } else {
        if (!descriptionDOM) {
            descriptionDOM = document.createElement("div");
            descriptionDOM.classList.add("todo-description");
            todoBody.appendChild(description);
        }

        descriptionDOM.textContent =
            description.substr(0, 50) +
            (description.length > 50 ? "..." : "");
    }

    if (!dueDate) {
        dateDOM && dateDOM.remove();
    } else {
        if (!dateDOM) {
            dateDOM = document.createElement("div");
            dateDOM.classList.add("todo-due-date");
            const calendar = document.createElement("div");
            calendar.classList.add("mdi");
            calendar.classList.add("mdi-calendar-clock-outline");

            const todoDate = document.createElement("div");
            todoDate.classList.add("todo-date");
            todoDate.textContent = dueDate;

            dateDOM.appendChild(calendar);
            dateDOM.appendChild(todoDate);
        }
        dateDOM.querySelector(".todo-date").textContent = dueDate;
    }

    todoForm.remove();
    todoDOM.classList.remove("hide");
    return true;
}

function removeTodo(id) {
    const todo = document.getElementById(id);
    todo.remove();
}

export default {
    toggleTodoAddForm,
    appendProject,
    setActiveProject,
    appendTodo,
    showEditForm,
    editTodo,
    removeTodo,
};

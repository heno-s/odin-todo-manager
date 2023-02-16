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

export default {
    appendProject,
};

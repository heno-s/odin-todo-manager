import displayController from "./displayController";
import Project, { getProjects, saveProject } from "./project";
import Todo from "./todo";

export default function initPage() {
    const projects = getProjects();
    if (projects.length > 0) {
        projects.forEach(displayController.appendProject);
        Project.setActive(projects[0]);
        return null;
    }
    const project1 = new Project("Today");
    displayController.appendProject(project1);
    Project.setActive(project1);

    const todo11 = new Todo(
        "Go out with trash",
        "this is some randome not so short description",
        1,
        new Date()
    );
    const todo12 = new Todo(
        "Go shopping",
        "this is some randome longer description about how awesome is this todo",
        0,
        new Date()
    );

    project1.addTodo(todo11);
    project1.addTodo(todo12);

    projects.push(project1);

    saveProject(project1);
}

import displayController from "./displayController";
import Project from "./project";
import Todo from "./todo";

export default function initPage() {
    const projects = [];

    const project1 = new Project("Today");

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

    const project2 = new Project("Tomorrow");

    const todo21 = new Todo(
        "Go out with trash tomorrow",
        "this is some randome not so short description",
        1,
        new Date()
    );
    const todo22 = new Todo(
        "Go shopping tomorrow",
        "this is some randome longer description about how awesome is this todo",
        0,
        new Date()
    );

    project2.addTodo(todo21);
    project2.addTodo(todo22);

    projects.push(project1, project2);

    projects.forEach(displayController.appendProject);

    Project.setActive(project1);
}

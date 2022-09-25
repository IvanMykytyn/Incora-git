import { generateId } from './utils.js';
class App {
    constructor(name, projects) {
        this._name = name;
        this._projects = projects;
    }
    // setters and getters
    setName(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get projects() {
        return this._projects;
    }
    //
    addProject(project) {
        this.projects.push(project);
    }
}
class User {
    constructor(name) {
        this._id = generateId();
        this._name = name;
    }
    // setters and getters
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
class Task {
    constructor(title, durationInMin, completed, develop, id) {
        this._title = title;
        this._durationInMin = durationInMin;
        this._completed = completed;
        this._develop = develop;
        this._id = id ? id : generateId();
    }
    getInfo() {
        return `${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`;
    }
    get title() { return this._title; }
    set title(value) { this._title = value; }
    get durationInMin() { return this._durationInMin; }
    set durationInMin(value) { this._durationInMin = value; }
    get completed() { return this._completed; }
    set completed(value) { this._completed = value; }
    get develop() { return this._develop; }
    set develop(value) { this._develop = value; }
    get id() { return this._id; }
}
class Project {
    constructor(tasks) {
        this._tasks = tasks;
    }
    get tasks() {
        return this._tasks;
    }
    set tasks(v) {
        this._tasks = v;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    editTask(id, task) {
        const taskIndex = this.tasks.findIndex((task) => task.id === id);
        if (taskIndex < 0)
            throw new Error("There is no such id");
        // const editedTask: Omit<ITask, 'getInfo'> = {
        //   ...this.tasks[taskIndex],
        //   ...task,
        // }
        // const { id: taskId, title, durationInMin, completed, develop } = editedTask
        // this.tasks[taskIndex] = new Task(
        //   title,
        //   durationInMin,
        //   completed,
        //   develop,
        //   taskId,
        // )
        // this.tasks[taskIndex] = new Task(...Object.values(editedTask))
    }
    deleteTask(id) {
        const tasksAfterDeleting = this.tasks.filter((task) => task.id !== id);
        if (tasksAfterDeleting.length === this.tasks.length)
            throw new Error("There is no such id");
        this.tasks = tasksAfterDeleting;
    }
    getTotalTime() {
        const totalTime = this.tasks.reduce((total, curr) => {
            return total + curr.durationInMin;
        }, 0);
        return totalTime;
    }
    getAllTasksByDeveloper(id) {
        return this.tasks.filter((task) => task.develop.id === id);
    }
}
export { User, Task, Project, App };

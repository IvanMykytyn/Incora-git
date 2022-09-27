import { generateId } from './utils.js';
class App {
    constructor(name, projects) {
        this._name = '';
        this._projects = [];
        this.name = name;
        this.projects = projects;
    }
    // setters and getters
    setName(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get projects() {
        return this._projects;
    }
    set projects(value) {
        this._projects = value;
    }
    //
    addProject(project) {
        this.projects.push(project);
    }
}
class User {
    constructor(name) {
        this._id = generateId();
        this._name = '';
        this.name = name;
    }
    // setters and getters
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
class Task {
    constructor(title, durationInMin, completed, develop, id) {
        this._id = '';
        this._title = '';
        this._durationInMin = 0;
        this._completed = false;
        this._develop = null;
        this.title = title;
        this.durationInMin = durationInMin;
        this.completed = completed;
        this.develop = develop;
        this.id = id ? id : generateId();
    }
    getInfo() {
        return `${this.id} ${this.title} ${this.completed ? 'completed' : 'not completed'}`;
    }
    // setters and getters
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get durationInMin() {
        return this._durationInMin;
    }
    set durationInMin(value) {
        this._durationInMin = value;
    }
    get completed() {
        return this._completed;
    }
    set completed(value) {
        this._completed = value;
    }
    get develop() {
        return this._develop;
    }
    set develop(value) {
        this._develop = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
class Project {
    constructor(tasks) {
        this._tasks = [];
        this.tasks = tasks;
    }
    get tasks() {
        return this._tasks;
    }
    set tasks(value) {
        this._tasks = value;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    editTask(taskId, task) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex < 0)
            throw new Error('There is no such id');
        const { id, title, durationInMin, completed, develop } = this.tasks[taskIndex];
        // const editedTask: Omit<Task, 'getInfo' | 'id'> = {...this.tasks[taskIndex], ...task,}
        const editedTask = Object.assign({ title,
            durationInMin,
            completed,
            develop }, task);
        // const editedTask ={
        //   ...this.tasks[taskIndex],
        //   ...task,
        // }
        this.tasks[taskIndex] = new Task(editedTask.title, editedTask.durationInMin, editedTask.completed, editedTask.develop, id);
        // this.tasks[taskIndex] = new Task(...Object.values(editedTask))
    }
    deleteTask(id) {
        const tasksAfterDeleting = this.tasks.filter((task) => task.id !== id);
        if (tasksAfterDeleting.length === this.tasks.length)
            throw new Error('There is no such id');
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

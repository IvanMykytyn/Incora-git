import { User, Task, Project, App } from './classes.js';
const userIvan = new User('Ivan');
const userRoman = new User('Roman');
const task1 = new Task('title1', 10, false, userIvan);
const task2 = new Task('title2', 12, false, userRoman);
const task3 = new Task('title3', 3, true, userIvan);
const task4 = new Task('title4', 9, false, userIvan);
const task5 = new Task('title5', 2, true, userRoman);
const task6 = new Task('title6', 1, false, userRoman);
const task7 = new Task('title7', 7, true, userIvan);
const task8 = new Task('title8', 3, false, userRoman);
const task9 = new Task('title9', 6, true, userRoman);
const project1 = new Project([task1, task2, task3, task7]);
const project2 = new Project([task4, task5, task6, task8, task9]);
const application = new App('Todo List', [project1, project2]);
project1.editTask(task1.id, { title: 'editedTitle', durationInMin: 20 });
console.log('tasks after editing:');
console.log(project1);
project1.deleteTask(task2.id);
console.log('tasks after deleting:');
console.log(project1);
console.log("Total Time project1: " + project1.getTotalTime());
console.log("Total Time project2: " + project2.getTotalTime());
console.log("All userIvan's tasks");
project1
    .getAllTasksByDeveloper(userIvan.id)
    .forEach((task) => console.log(task.getInfo()));
console.log(application);

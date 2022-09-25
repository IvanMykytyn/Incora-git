import {IApp, ITask, IUser, IProject} from './interfaces.js'
import { generateId } from './utils.js'

class App implements IApp {
  private _name: string
  private _projects: Project[]
  constructor(name: string, projects: Project[]) {
    this._name = name
    this._projects = projects
  }

  // setters and getters
  public setName(name: string): void {
    this._name = name
  }
  public get name(): string{
    return this._name
  }
  public get projects(): Project[]{
    return this._projects
  }
  //

  addProject(project: Project): void {
    this.projects.push(project)
  }
}

class User implements IUser {
  private readonly _id: string
  private _name: string

  constructor(name: string) {
    this._id = generateId()
    this._name = name
  }

  // setters and getters
  public get id() : string {
    return this._id
  }
  public get name() : string {
    return this._name
  }
  //
}

class Task implements ITask {
  private readonly _id: string;
  private _title : string
  private _durationInMin : number
  private _completed : boolean
  private _develop : User

  constructor(
    title: string,
    durationInMin: number,
    completed: boolean,
    develop: User,
    id?: string,
  ) {
    this._title = title
    this._durationInMin = durationInMin
    this._completed = completed
    this._develop = develop
    this._id = id ? id : generateId()
  }

  public getInfo(): string {
    return `${this.id} ${this.title} ${
      this.completed ? 'completed' : 'not completed'
    }`
  }


  public get title () : string { return this._title}         
  public set title (value: string) { this._title = value}         
  public get durationInMin () : number { return this._durationInMin}         
  public set durationInMin (value: number) { this._durationInMin= value}         
  public get completed () : boolean { return this._completed}         
  public set completed (value: boolean) { this._completed= value}         
  public get develop () : User { return this._develop}       
  public set develop (value: User) { this._develop= value}       
  public get id () : string { return this._id}       


}

class Project implements IProject {
  private _tasks: Task[]
  constructor(tasks: Task[]) {
    this._tasks = tasks
  }

  public get tasks() : Task[] {
    return this._tasks
  }
  public set tasks(v : Task[]) {
    this._tasks = v;
  }
  

  addTask(task: Task): void {
    this.tasks.push(task)
  }

  editTask(id: string, task: Omit<Partial<ITask>, 'id'>): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id)
    if(taskIndex < 0) throw new Error("There is no such id") 

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

  deleteTask(id: string): void {
    const tasksAfterDeleting = this.tasks.filter((task) => task.id !== id)

    if(tasksAfterDeleting.length === this.tasks.length) throw new Error("There is no such id") 

    this.tasks = tasksAfterDeleting
  }

  getTotalTime(): number {
    const totalTime = this.tasks.reduce((total, curr) => {
      return total + curr.durationInMin
    }, 0)

    return totalTime
  }

  getAllTasksByDeveloper(id: string): Task[] {
    return this.tasks.filter((task) => task.develop.id === id)
  }
}

export {User,Task, Project,App}

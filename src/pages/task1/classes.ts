import type { IApp, ITask, IUser, IProject } from './interfaces'
import { generateId } from './utils'

class App implements IApp {
  private _name: string = ''
  private _projects: Project[] = []

  constructor(name: string, projects: Project[]) {
    this.name = name
    this.projects = projects
  }

  // setters and getters
  public setName(name: string): void {
    this._name = name
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  public get projects(): Project[] {
    return this._projects
  }
  public set projects(value: Project[]) {
    this._projects = value
  }
  //

  addProject(project: Project): void {
    this.projects.push(project)
  }
}

class User implements IUser {
  private readonly _id: string = generateId()
  private _name: string = ''

  constructor(name: string) {
    this.name = name
  }

  // setters and getters
  public get id(): string {
    return this._id
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  //
}

class Task implements ITask {
  private _id: string = ''
  private _title: string = ''
  private _durationInMin: number = 0
  private _completed: boolean = false
  private _develop: User | null = null

  constructor(
    title: string,
    durationInMin: number,
    completed: boolean,
    develop: User,
    id?: string
  ) {
    this.title = title
    this.durationInMin = durationInMin
    this.completed = completed
    this.develop = develop
    this.id = id ? id : generateId()
  }

  public getInfo(): string {
    return `id: ${this.id} // title: ${this.title} // status: ${
      this.completed ? 'completed' : 'not completed'
    }`
  }

  // setters and getters
  public get title(): string {
    return this._title
  }
  public set title(value: string) {
    this._title = value
  }
  public get durationInMin(): number {
    return this._durationInMin
  }
  public set durationInMin(value: number) {
    this._durationInMin = value
  }
  public get completed(): boolean {
    return this._completed
  }
  public set completed(value: boolean) {
    this._completed = value
  }
  public get develop(): User {
    return this._develop!
  }
  public set develop(value: User) {
    this._develop = value
  }
  public get id(): string {
    return this._id
  }
  public set id(value: string) {
    this._id = value
  }
  //
}

class Project implements IProject {
  private _tasks: Task[] = []
  constructor(tasks: Task[]) {
    this.tasks = tasks
  }

  public get tasks(): Task[] {
    return this._tasks
  }
  public set tasks(value: Task[]) {
    this._tasks = value
  }

  addTask(task: Task): void {
    this.tasks.push(task)
  }

  editTask(taskId: string, task: Omit<Partial<Task>, 'id'>): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId)
    if (taskIndex < 0) throw new Error('There is no such id')

    const { id, title, durationInMin, completed, develop } = this.tasks[taskIndex]

    // const editedTask: Omit<Task, 'getInfo' | 'id'> = {...this.tasks[taskIndex], ...task,}
    const editedTask: Omit<Task, 'getInfo' | 'id'> = {
      title,
      durationInMin,
      completed,
      develop,
      ...task,
      // develop User copy
    }

    // const editedTask ={
    //   ...this.tasks[taskIndex],
    //   ...task,
    // }

    this.tasks[taskIndex] = new Task(
      editedTask.title,
      editedTask.durationInMin,
      editedTask.completed,
      editedTask.develop,
      id
    )

    // this.tasks[taskIndex] = new Task(...Object.values(editedTask))
  }

  deleteTask(id: string): void {
    const tasksAfterDeleting = this.tasks.filter((task) => task.id !== id)

    if (tasksAfterDeleting.length === this.tasks.length)
      throw new Error('There is no such id')

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

export { User, Task, Project, App }

import {User,Task, Project, App} from './classes'

interface IApp {
    name: string
    setName(name: string): void
    projects: Project[]
    addProject(project: Project): void
  }
  
  interface IUser {
    id: string
    name: string
  }
  
  interface ITask {
    id: string
    title: string
    durationInMin: number
    completed: boolean
    develop: User
    getInfo(): string
  }
  
  interface IProject {
    tasks: Task[]
    addTask(task: Task): void
    editTask(id: string, task: Partial<Task>): void
    deleteTask(id: string): void
    getTotalTime(): number
    getAllTasksByDeveloper(id: string): Task[]
}

export type {IApp, ITask, IUser, IProject}
import { Injectable } from '@nestjs/common';
import { CreateTasks } from './dto/create.task.dto';

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  getOneTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  postTasks(task: CreateTasks) {
    return this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
  }

  putTasks() {
    return 'Actualizando Tareas';
  }
  eliminarTasks() {
    return 'Eliminando Tareas';
  }
  ParcharTasks() {
    return 'Parchando Tareas';
  }
}

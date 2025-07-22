import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  task = [
    {
      id: 1,
      task: 'task1',
    },
    {
      id: 2,
      task: 'task2',
    },
    {
      id: 3,
      task: 'task3',
    },
  ];

  getTasks() {
    return this.task;
  }

  postTasks() {
    return 'Creando Tareas';
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

import { Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/create.task.dto';

@Injectable()
export class TasksService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  getOneTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  postTasks(task: CreateTasksDto) {
    /* Para que createTasks devuelva la tarea creada, necesitarías modificar el método postTasks en tu servicio para que:

  1. Cree la nueva tarea con un ID */

    const newTask = {
      ...this.tasks,
      id: this.tasks.length + 1,
    };

    /*     2. Añada la tarea al array */

    this.tasks.push({
      newTask,
    });

    // 3. Devuelva la tarea creada, no el resultado de push()

    return newTask;
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

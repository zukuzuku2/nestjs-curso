import { Injectable } from '@nestjs/common';
import { CreateTasksDto } from './dto/create.task.dto';

// Decorador que permite inyectar este servicio en otros lugares
@Injectable()
export class TasksService {
  // Array privado que simula una base de datos en memoria
  private tasks: any[] = [];

  // Devuelve todas las tareas del array
  getTasks() {
    return this.tasks;
  }

  // Busca y devuelve una tarea específica por ID
  getOneTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  // Crea una nueva tarea y la añade al array
  postTasks(task: CreateTasksDto) {
    // 1. Crea la nueva tarea con un ID autogenerado
    const newTask = {
      ...task,
      id: this.tasks.length + 1, // Genera ID basado en la longitud del array
    };

    // 2. Añade la tarea al array
    this.tasks.push({
      newTask,
    });

    // 3. Devuelve la tarea creada
    return newTask;
  }

  // Simula actualizar tareas (solo devuelve mensaje)
  putTasks() {
    return 'Actualizando Tareas';
  }

  // Simula eliminar tareas (solo devuelve mensaje)
  eliminarTasks() {
    return 'Eliminando Tareas';
  }

  // Simula actualizar parcialmente tareas (solo devuelve mensaje)
  ParcharTasks() {
    return 'Parchando Tareas';
  }
}

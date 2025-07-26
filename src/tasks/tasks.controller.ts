import {
  Body, // Para obtener datos del cuerpo de la petición
  Controller, // Decorador para definir un controlador
  Delete, // Decorador para rutas DELETE
  Get, // Decorador para rutas GET
  Param, // Para obtener parámetros de la URL
  Patch, // Decorador para rutas PATCH
  Post, // Decorador para rutas POST
  Put, // Decorador para rutas PUT
  UsePipes, // Para aplicar pipes de validación
  ValidationPipe, // Pipe que valida datos automáticamente
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create.task.dto';

// Define que este controlador maneja las rutas que empiecen con '/tasks'
@Controller('/tasks')
export class TasksController {
  // Inyección de dependencias: recibe el servicio de tareas
  constructor(private taskService: TasksService) {}

  // GET /tasks - Obtiene todas las tareas
  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  // GET /tasks/:id - Obtiene una tarea específica por ID
  @Get('/:id')
  getTask(@Param('id') id: string) {
    // Convierte el ID de string a número
    return this.taskService.getOneTask(parseInt(id));
  }

  // POST /tasks - Crea una nueva tarea con validación
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true })) // Aplica validación automática usando el DTO
  createTasks(@Body() task: CreateTasksDto) {
    return this.taskService.postTasks(task);
  }

  // PUT /tasks - Actualiza tareas completamente
  @Put()
  updateTasks() {
    return this.taskService.putTasks();
  }

  // DELETE /tasks - Elimina tareas
  @Delete()
  deleteTasks() {
    return this.taskService.eliminarTasks();
  }

  // PATCH /tasks - Actualiza parcialmente el estado de las tareas
  @Patch()
  updateTasksStatus() {
    return this.taskService.putTasks();
  }
}

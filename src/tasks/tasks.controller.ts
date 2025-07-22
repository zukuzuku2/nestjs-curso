import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTasks() {
    return this.taskService.postTasks();
  }
  @Put()
  updateTasks() {
    return this.taskService.putTasks();
  }
  @Delete()
  deleteTasks() {
    return this.taskService.eliminarTasks();
  }
  @Patch()
  updateTasksStatus() {
    return this.taskService.putTasks();
  }
}

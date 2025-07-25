import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTasksDto } from './dto/create.task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getOneTask(parseInt(id));
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTasks(@Body() task: CreateTasksDto) {
    return this.taskService.postTasks(task);
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

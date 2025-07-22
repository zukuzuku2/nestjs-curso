import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createTasks() {
    return this.usersService.postUsers();
  }
  @Put() // --> Actualiza todo el objeto
  updateTasks() {
    return this.usersService.putUsers();
  }
  @Delete()
  deleteTasks() {
    return this.usersService.eliminarUsers();
  }
  @Patch() // --> Actualiza parcialmente un objeto
  updateTasksStatus() {
    return this.usersService.ParcharUsers();
  }
}

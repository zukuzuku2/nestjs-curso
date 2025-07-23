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
  createUsers() {
    return this.usersService.postUsers();
  }
  @Put() // --> Actualiza todo el objeto
  updateUsers() {
    return this.usersService.putUsers();
  }
  @Delete()
  deleteUsers() {
    return this.usersService.eliminarUsers();
  }
  @Patch() // --> Actualiza parcialmente un objeto
  updateUsersStatus() {
    return this.usersService.ParcharUsers();
  }
}

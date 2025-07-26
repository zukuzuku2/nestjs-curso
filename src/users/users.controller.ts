import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create.user.dto';

// Define que este controlador maneja las rutas que empiecen con '/users'
@Controller('users')
export class UsersController {
  // Inyección de dependencias: recibe el servicio de usuarios
  constructor(private usersService: UsersService) {}

  // GET /users - Obtiene todos los usuarios
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  // POST /users - Crea un nuevo usuario
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createUsers(@Body() user: CreateUsersDto) {
    return this.usersService.postUsers(user);
  }

  // PUT /users - Actualiza todo el objeto usuario
  @Put()
  updateUsers() {
    return this.usersService.putUsers();
  }

  // DELETE /users - Elimina usuarios
  @Delete()
  deleteUsers() {
    return this.usersService.eliminarUsers();
  }

  // PATCH /users - Actualiza parcialmente un objeto usuario
  @Patch()
  updateUsersStatus() {
    return this.usersService.ParcharUsers();
  }
}

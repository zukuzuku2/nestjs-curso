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
  Param,        // Para obtener parámetros de la URL
  ParseBoolPipe, // NUEVO: Pipe que convierte string a boolean automáticamente
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

  // NUEVO: GET /users/active/:status - Verifica si un usuario está activo
  @Get('active/:status')
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    // ParseBoolPipe convierte 'true'/'false' string a boolean automáticamente
    return this.usersService.isUserActive(status);
  }

  // POST /users - Crea un nuevo usuario con validación
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true })) // NUEVO: whitelist elimina propiedades no definidas en el DTO
  createUsers(@Body() user: CreateUsersDto) {
    // NUEVO: Usa el DTO para validar datos
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

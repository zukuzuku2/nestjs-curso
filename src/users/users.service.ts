import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create.user.dto';

// Interface que define la estructura de un usuario

// Decorador que permite inyectar este servicio en otros lugares
@Injectable()
export class UsersService {
  // Array privado que simula una base de datos con usuarios de ejemplo
  private users: any[] = [];

  // Devuelve todos los usuarios del array
  getUsers() {
    return this.users;
  }

  // Simula crear un usuario (devuelve un usuario fijo)
  postUsers(user: CreateUsersDto) {
    const newUser = {
      id: this.users.length + 1,
      name: user.name,
      phone: user.phone,
    };
    this.users.push(newUser);
    return newUser.id;
  }

  // Simula actualizar usuarios (solo devuelve mensaje)
  putUsers() {
    return 'Actualizando Usuarios';
  }

  // Simula eliminar usuarios (solo devuelve mensaje)
  eliminarUsers() {
    return 'Eliminando Usuarios';
  }

  // Simula actualizar parcialmente usuarios (solo devuelve mensaje)
  ParcharUsers() {
    return 'Parchando Usuarios';
  }
}

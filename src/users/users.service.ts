import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create.user.dto';

// Interface que define la estructura de un usuario

// Decorador que permite inyectar este servicio en otros lugares
@Injectable()
export class UsersService {
  // CAMBIO: Array privado vacío (antes tenía usuarios de ejemplo)
  private users: any[] = [];

  // Devuelve todos los usuarios del array
  getUsers() {
    return this.users;
  }

  // MEJORADO: Ahora crea usuarios reales usando el DTO
  postUsers(user: CreateUsersDto) {
    const newUser = {
      id: this.users.length + 1, // Genera ID automáticamente
      name: user.name, // Usa el nombre del DTO
      phone: user.phone, // Usa el teléfono del DTO
    };
    this.users.push(newUser); // Añade el usuario al array
    return newUser.id; // CAMBIO: Devuelve solo el ID (antes devolvía usuario fijo)
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
  // NUEVO: Método que verifica el estado activo de un usuario
  isUserActive(status: boolean) {
    return status; // Simplemente devuelve el estado recibido
  }
}

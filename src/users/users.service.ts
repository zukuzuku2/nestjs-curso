import { Injectable } from '@nestjs/common';

export interface Users {
  id: number;
  name: string;
  phone: string;
}

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Jose',
      phone: '964748728',
    },
    {
      id: 2,
      name: 'Elisa',
      phone: '964748720',
    },
    {
      id: 3,
      name: 'Maytee',
      phone: '964748723',
    },
  ];

  getUsers() {
    return this.users;
  }
  postUsers(): Users {
    return { id: 1, name: 'Jose', phone: '964748728' };
  }

  putUsers() {
    return 'Actualizando Usuarios';
  }
  eliminarUsers() {
    return 'Eliminando Usuarios';
  }
  ParcharUsers() {
    return 'Parchando Usuarios';
  }
}

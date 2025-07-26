import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

// Decorador que define este como un módulo de NestJS
@Module({
  controllers: [UsersController], // Registra el controlador de usuarios
  providers: [UsersService],      // Registra el servicio de usuarios para inyección
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

// Decorador que define este como un módulo de NestJS
@Module({
  controllers: [AuthController], // Registra el controlador de autenticación (vacío)
  providers: [AuthService]       // Registra el servicio de autenticación (vacío)
})
export class AuthModule {}

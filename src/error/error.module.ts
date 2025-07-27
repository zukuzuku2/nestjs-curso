import { Module } from '@nestjs/common';
import { ErrorController } from './error.controller';
import { ErrorService } from './error.service';

// NUEVO MÓDULO: Maneja páginas de error del servidor
@Module({
  controllers: [ErrorController], // Registra el controlador de errores
  providers: [ErrorService]       // Registra el servicio de errores
})
export class ErrorModule {}
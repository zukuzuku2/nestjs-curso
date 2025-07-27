import { NotFoundService } from './notFound.service';
import { NotFoundController } from './notFound.controller';
import { Module } from '@nestjs/common';

// NUEVO MÓDULO: Maneja páginas no encontradas (404)
@Module({
  controllers: [NotFoundController], // Registra el controlador de páginas no encontradas
  providers: [NotFoundService],      // Registra el servicio de páginas no encontradas
})
export class NotFoundModule {}
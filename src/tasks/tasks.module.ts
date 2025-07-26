import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

// Decorador que define este como un módulo de NestJS
@Module({
  controllers: [TasksController], // Registra el controlador de tareas
  providers: [TasksService],      // Registra el servicio de tareas para inyección
})
export class TasksModule {}

import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

// Decorador que define este como un módulo de NestJS
@Module({
  controllers: [ProjectsController], // Registra el controlador de proyectos (vacío)
  providers: [ProjectsService]       // Registra el servicio de proyectos (vacío)
})
export class ProjectsModule {}

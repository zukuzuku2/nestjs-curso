import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { NotFoundModule } from './notfound/notFound.module';
import { ErrorModule } from './error/error.module';

// Decorador que define este como el módulo principal de la aplicación
@Module({
  // Importa todos los módulos de la aplicación
  imports: [
    ProjectsModule,  // Módulo de proyectos (vacío)
    TasksModule,     // Módulo de tareas (completo con CRUD)
    AuthModule,      // Módulo de autenticación (vacío)
    UsersModule,     // Módulo de usuarios (con CRUD y validación)
    NotFoundModule,  // NUEVO: Módulo para páginas 404
    ErrorModule,     // NUEVO: Módulo para errores 500
  ],
})
export class AppModule {}

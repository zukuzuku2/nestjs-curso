import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// Decorador que define este como el módulo principal de la aplicación
@Module({
  // Importa todos los módulos de la aplicación (proyectos, tareas, auth, usuarios)
  imports: [ProjectsModule, TasksModule, AuthModule, UsersModule],
})
export class AppModule {}

import {
  MiddlewareConsumer, // NUEVO: Para configurar middlewares
  Module,
  NestModule,         // NUEVO: Interface para módulos que usan middleware
  RequestMapping,     // NUEVO: Para mapear rutas (no usado en este ejemplo)
  RequestMethod,      // NUEVO: Enum con métodos HTTP (GET, POST, etc.)
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthMiddleware } from './auth/auth.middleware'; // NUEVO: Importa el middleware personalizado

// Decorador que define este como un módulo de NestJS
@Module({
  controllers: [UsersController], // Registra el controlador de usuarios
  providers: [UsersService],      // Registra el servicio de usuarios para inyección
})
// NUEVO: Implementa NestModule para poder configurar middlewares
export class UsersModule implements NestModule {
  // Método requerido por NestModule - configura middlewares
  configure(consumer: MiddlewareConsumer) {
    // Aplica AuthMiddleware solo a la ruta GET /users
    consumer.apply(AuthMiddleware).forRoutes({
      path: '/users',              // Ruta específica
      method: RequestMethod.GET,   // Solo para peticiones GET
    });
  }
}

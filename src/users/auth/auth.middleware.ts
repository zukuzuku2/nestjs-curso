import {
  HttpException,    // Para lanzar excepciones HTTP personalizadas
  HttpStatus,       // Enum con códigos de estado HTTP estándar
  Injectable,       // Decorador para inyección de dependencias
  NestMiddleware,   // Interface que deben implementar los middlewares
} from '@nestjs/common';
import { Request, Response } from 'express';

// NUEVO MIDDLEWARE: Maneja autenticación básica por token
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  // Método requerido por NestMiddleware - se ejecuta en cada petición
  use(req: Request, res: Response, next: () => void) {
    // Extrae el header 'authorization' de la petición
    const { authorization } = req.headers;

    // Verifica si existe el header de autorización
    if (!authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED); // 401
    }
    
    // Verifica si el token es válido (hardcodeado para ejemplo)
    if (authorization !== 'xyz123') {
      throw new HttpException('Frobidden', HttpStatus.FORBIDDEN); // 403 (typo: debería ser "Forbidden")
    }
    
    // Si todo está bien, continúa con la siguiente función
    next();
  }
}
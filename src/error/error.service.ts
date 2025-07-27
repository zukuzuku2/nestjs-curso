import { HttpCode, Injectable } from '@nestjs/common';

// NUEVO: Decorador que permite inyectar este servicio en otros lugares
@Injectable()
export class ErrorService {
  // Método que devuelve error 500 (Internal Server Error)
  @HttpCode(500) // Establece el código de estado HTTP a 500
  getErrorPage() {
    return ' Error Route';
  }
}
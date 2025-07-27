import { HttpCode, Injectable } from '@nestjs/common';

// NUEVO: Decorador que permite inyectar este servicio en otros lugares
@Injectable()
export class NotFoundService {
  // Método que devuelve error 404 (Not Found)
  @HttpCode(404) // Establece el código de estado HTTP a 404
  getPageNotFound() {
    return '404 Page Not Found';
  }
}
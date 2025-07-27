import { Controller, Get } from '@nestjs/common';
import { ErrorService } from './error.service';

// NUEVO: Define que este controlador maneja las rutas que empiecen con '/error'
@Controller('error')
export class ErrorController {
  // Inyección de dependencias: recibe el servicio de errores
  constructor(private errorService: ErrorService) {}
  
  // GET /error - Devuelve página de error 500
  @Get()
  getErrorPage() {
    return this.errorService.getErrorPage();
  }
}
import { Controller, Get } from '@nestjs/common';
import { NotFoundService } from './notFound.service';

// NUEVO: Define que este controlador maneja las rutas que empiecen con '/notFound'
@Controller('notFound')
export class NotFoundController {
  // Inyección de dependencias: recibe el servicio de páginas no encontradas
  constructor(private notfoundService: NotFoundService) {}
  
  // GET /notFound - Devuelve página 404
  @Get()
  getPageNotFound() {
    return this.notfoundService.getPageNotFound();
  }
}
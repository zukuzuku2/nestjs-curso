import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Función principal que arranca la aplicación
async function bootstrap() {
  // Crea la aplicación NestJS usando el módulo principal
  const app = await NestFactory.create(AppModule);
  // Pone el servidor a escuchar en puerto 3000 (o variable de entorno)
  await app.listen(process.env.PORT ?? 3000);
}
// Ejecuta la función de arranque
bootstrap();

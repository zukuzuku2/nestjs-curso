# Curso NestJS

## Descripción

Proyecto de aprendizaje de NestJS con módulos de autenticación, usuarios, proyectos y tareas.

## Requisitos previos para configurar en otro PC

### 1. Instalar Node.js y npm
- Descargar e instalar Node.js desde [nodejs.org](https://nodejs.org/)
- Versión recomendada: Node.js 18.x o superior
- npm se instala automáticamente con Node.js

### 2. Instalar Git
- Descargar e instalar Git desde [git-scm.com](https://git-scm.com/)
- Configurar Git con tu usuario:
  ```bash
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu.email@ejemplo.com"
  ```

### 3. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd nestjs
```

### 4. Configurar Git para line endings (Windows)
```bash
git config --global core.autocrlf true
```

## Configuración del proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Verificar que todo esté instalado correctamente
```bash
npm run build
```

## Ejecutar el proyecto

```bash
# modo desarrollo
npm run start

# modo desarrollo con recarga automática (recomendado)
npm run start:dev

# modo producción
npm run start:prod
```

## Estructura del proyecto

```
src/
├── auth/           # Módulo de autenticación
├── users/          # Módulo de usuarios
├── projects/       # Módulo de proyectos
├── tasks/          # Módulo de tareas
│   ├── dto/        # Data Transfer Objects
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── tasks.module.ts
├── app.module.ts    # Módulo principal
└── main.ts         # Punto de entrada
```

## Endpoints disponibles

### Tasks
- `GET /tasks` - Obtener todas las tareas
- `GET /tasks/:id` - Obtener una tarea por ID
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks` - Actualizar tareas
- `DELETE /tasks` - Eliminar tareas
- `PATCH /tasks` - Actualizar estado de tareas

### Users
- `GET /users` - Obtener todos los usuarios
- `GET /users/active/:status` - Verificar estado activo de usuario
- `POST /users` - Crear un nuevo usuario
- `PUT /users` - Actualizar usuarios
- `DELETE /users` - Eliminar usuarios
- `PATCH /users` - Actualizar estado de usuarios

### Error & NotFound
- `GET /error` - Página de error 500
- `GET /notFound` - Página de error 404

## Métodos Nativos de NestJS - Guía de Estudio

### 🏠 **Decoradores de Módulos**

#### `@Module(options)`
- **Uso**: Define un módulo de NestJS
- **Opciones**:
  - `imports`: Módulos que este módulo necesita
  - `controllers`: Controladores que pertenecen a este módulo
  - `providers`: Servicios/proveedores disponibles en este módulo
  - `exports`: Proveedores que otros módulos pueden usar
```typescript
@Module({
  imports: [OtherModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
```

### 🎮 **Decoradores de Controladores**

#### `@Controller(path?)`
- **Uso**: Define una clase como controlador
- **Parámetro**: Ruta base opcional
```typescript
@Controller('users') // Todas las rutas empezarán con /users
export class UserController {}
```

### 🚀 **Decoradores de Rutas HTTP**

#### `@Get(path?)`
- **Uso**: Maneja peticiones GET
- **Parámetro**: Ruta específica opcional
```typescript
@Get() // GET /users
findAll() {}

@Get(':id') // GET /users/:id
findOne(@Param('id') id: string) {}
```

#### `@Post(path?)`
- **Uso**: Maneja peticiones POST (crear recursos)
```typescript
@Post() // POST /users
create(@Body() createUserDto: CreateUserDto) {}
```

#### `@Put(path?)`
- **Uso**: Maneja peticiones PUT (actualizar completamente)
```typescript
@Put(':id') // PUT /users/:id
update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {}
```

#### `@Patch(path?)`
- **Uso**: Maneja peticiones PATCH (actualizar parcialmente)
```typescript
@Patch(':id') // PATCH /users/:id
partialUpdate(@Param('id') id: string, @Body() data: Partial<User>) {}
```

#### `@Delete(path?)`
- **Uso**: Maneja peticiones DELETE
```typescript
@Delete(':id') // DELETE /users/:id
remove(@Param('id') id: string) {}
```

### 📝 **Decoradores de Parámetros**

#### `@Param(key?)`
- **Uso**: Extrae parámetros de la URL
```typescript
@Get(':id/:category')
findOne(
  @Param('id') id: string,
  @Param('category') category: string,
  @Param() allParams: any // Todos los parámetros
) {}
```

#### `@Body(key?)`
- **Uso**: Extrae datos del cuerpo de la petición
```typescript
@Post()
create(
  @Body() createUserDto: CreateUserDto, // Todo el cuerpo
  @Body('name') name: string // Solo el campo 'name'
) {}
```

#### `@Query(key?)`
- **Uso**: Extrae parámetros de consulta (?param=value)
```typescript
@Get()
findAll(
  @Query('page') page: number,
  @Query('limit') limit: number,
  @Query() allQuery: any // Todos los query params
) {}
```

#### `@Headers(name?)`
- **Uso**: Extrae headers de la petición
```typescript
@Get()
findAll(
  @Headers('authorization') auth: string,
  @Headers() allHeaders: any
) {}
```

### 🔍 **Pipes (Transformación y Validación)**

#### `@UsePipes(pipe)`
- **Uso**: Aplica pipes a nivel de método o controlador
```typescript
@Post()
@UsePipes(new ValidationPipe({ whitelist: true }))
create(@Body() createUserDto: CreateUserDto) {}
```

#### Pipes Nativos:
- `ValidationPipe`: Valida DTOs usando class-validator
- `ParseIntPipe`: Convierte string a número entero
- `ParseBoolPipe`: Convierte string a boolean
- `ParseArrayPipe`: Convierte string a array
- `ParseUUIDPipe`: Valida y convierte UUID
- `DefaultValuePipe`: Establece valor por defecto

```typescript
@Get(':id')
findOne(@Param('id', ParseIntPipe) id: number) {}

@Get('active/:status')
checkStatus(@Param('status', ParseBoolPipe) isActive: boolean) {}
```

### 🛡️ **Decoradores de Servicios**

#### `@Injectable()`
- **Uso**: Marca una clase como servicio inyectable
```typescript
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
}
```

### 📊 **Decoradores de Respuesta HTTP**

#### `@HttpCode(code)`
- **Uso**: Establece código de estado HTTP personalizado
```typescript
@Post()
@HttpCode(201)
create(@Body() createUserDto: CreateUserDto) {}

@Delete(':id')
@HttpCode(204)
remove(@Param('id') id: string) {}
```

#### `@Header(name, value)`
- **Uso**: Establece headers de respuesta
```typescript
@Get()
@Header('Cache-Control', 'no-cache')
findAll() {}
```

#### `@Redirect(url, statusCode)`
- **Uso**: Redirige a otra URL
```typescript
@Get('redirect')
@Redirect('https://nestjs.com', 301)
redirectToNest() {}
```

### 🔒 **Guards (Autenticación y Autorización)**

#### `@UseGuards(guard)`
- **Uso**: Aplica guards para protección de rutas
```typescript
@UseGuards(AuthGuard, RolesGuard)
@Get('profile')
getProfile() {}
```

### 📝 **Interceptors (Middleware)**

#### `@UseInterceptors(interceptor)`
- **Uso**: Aplica interceptors para transformar request/response
```typescript
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@Get()
findAll() {}
```

### 🛠️ **Exception Filters**

#### `@UseFilters(filter)`
- **Uso**: Maneja excepciones personalizadas
```typescript
@UseFilters(HttpExceptionFilter)
@Get()
findAll() {}
```

### 💫 **Decoradores Avanzados**

#### `@Req()` / `@Request()`
- **Uso**: Accede al objeto request completo
```typescript
@Get()
findAll(@Req() request: Request) {}
```

#### `@Res()` / `@Response()`
- **Uso**: Accede al objeto response completo
```typescript
@Get()
findAll(@Res() response: Response) {
  response.status(200).json({ message: 'OK' });
}
```

#### `@Next()`
- **Uso**: Accede a la función next de Express
```typescript
@Get()
findAll(@Next() next: NextFunction) {}
```

#### `@Session()`
- **Uso**: Accede a datos de sesión
```typescript
@Get()
findAll(@Session() session: Record<string, any>) {}
```

### 🔄 **Lifecycle Hooks**

#### Interfaces de Ciclo de Vida:
- `OnModuleInit`: Se ejecuta cuando el módulo se inicializa
- `OnModuleDestroy`: Se ejecuta cuando el módulo se destruye
- `OnApplicationBootstrap`: Se ejecuta cuando la aplicación arranca
- `OnApplicationShutdown`: Se ejecuta cuando la aplicación se cierra

```typescript
@Injectable()
export class UserService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    console.log('UserService inicializado');
  }
  
  onModuleDestroy() {
    console.log('UserService destruido');
  }
}
```

### 📊 **Configuración de ValidationPipe**

```typescript
// Configuraciones comunes de ValidationPipe
@UsePipes(new ValidationPipe({
  whitelist: true,        // Elimina propiedades no definidas en DTO
  forbidNonWhitelisted: true, // Lanza error si hay propiedades extra
  transform: true,        // Transforma tipos automáticamente
  disableErrorMessages: false, // Muestra mensajes de error detallados
  validateCustomDecorators: true // Valida decoradores personalizados
}))
```

### 🔍 **Ejemplos Prácticos Combinados**

```typescript
@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return this.userService.findAll({ page, limit });
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(
    @Body() createUserDto: CreateUserDto,
    @Headers('authorization') token: string
  ) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  @UseFilters(HttpExceptionFilter)
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.remove(id);
  }
}
```

## 📚 **Consejos de Estudio**

1. **Orden de aprendizaje recomendado**:
   - Decoradores básicos (@Controller, @Get, @Post, etc.)
   - Parámetros (@Param, @Body, @Query)
   - Pipes básicos (ParseIntPipe, ValidationPipe)
   - Servicios (@Injectable)
   - Guards y middleware avanzado

2. **Práctica**:
   - Crea endpoints simples primero
   - Agrega validación gradualmente
   - Experimenta con diferentes pipes
   - Implementa manejo de errores

3. **Recursos adicionales**:
   - [Documentación oficial de NestJS](https://docs.nestjs.com)
   - [NestJS Fundamentals Course](https://courses.nestjs.com)

## Tecnologías utilizadas

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **class-validator** - Validación de datos
- **class-transformer** - Transformación de objetos
- **Jest** - Testing framework
- **ESLint** - Linter
- **Prettier** - Formateador de código

## Ejecutar tests

```bash
# tests unitarios
npm run test

# tests e2e
npm run test:e2e

# cobertura de tests
npm run test:cov
```

## Scripts disponibles

```bash
npm run build          # Compilar el proyecto
npm run format         # Formatear código con Prettier
npm run start          # Iniciar en modo desarrollo
npm run start:dev      # Iniciar con recarga automática
npm run start:debug    # Iniciar en modo debug
npm run start:prod     # Iniciar en modo producción
npm run lint           # Ejecutar ESLint
npm run test           # Ejecutar tests
npm run test:watch     # Ejecutar tests en modo watch
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

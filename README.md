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

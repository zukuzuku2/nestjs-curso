import { IsBoolean, IsString, MinLength } from 'class-validator';

// DTO (Data Transfer Object) que define cómo deben ser los datos para crear una tarea
export class CreateTasksDto {
  // El título debe ser un string con mínimo 1 carácter
  @IsString()    // Valida que sea un string
  @MinLength(1)  // Valida que tenga al menos 1 carácter
  title: string;

  // El estado debe ser un booleano (true/false)
  @IsBoolean()   // Valida que sea true o false
  status: boolean;
}

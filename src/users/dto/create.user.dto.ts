import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

// DTO (Data Transfer Object) que define cómo deben ser los datos para crear un usuario
export class CreateUsersDto {
  // El nombre debe ser un string con mínimo 1 carácter
  @IsString() // Valida que sea un string
  // @MinLength(1) // Valida que tenga al menos 1 carácter
  @IsNotEmpty()
  name: string;

  // El phone debe ser un number
  @IsString() // Valida que sea un string
  @IsNotEmpty()
  phone: string;
}

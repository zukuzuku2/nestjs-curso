import { IsBoolean, IsString, MinLength } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsBoolean()
  status: boolean;
}

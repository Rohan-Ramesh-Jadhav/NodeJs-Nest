import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskesDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

import { IsArray, IsString } from 'class-validator';

export class CreateDebateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly thesis: string;

  @IsString()
  readonly language: string;

  @IsArray()
  readonly tags: string[];

  @IsString()
  readonly backgroundInfo: string;
}

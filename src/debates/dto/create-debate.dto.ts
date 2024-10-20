import {
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDebateDto {
  @IsString()
  @Length(3, 255)
  @ApiProperty({
    example: 'Is Cloning Animals Ethical?',
    description: 'The name of the debate.',
  })
  readonly name: string;

  @IsString()
  @Length(3, 1000)
  @ApiProperty({
    example: 'Cloning animals is ethical.',
    description: 'The thesis of the debate.',
  })
  readonly thesis: string;

  @IsMongoId()
  @ApiProperty({
    example: 'language_object_id',
    description: 'The ObjectId of the language linked to the debate.',
  })
  readonly language: string;

  @IsArray()
  @IsMongoId({ each: true })
  @ApiProperty({
    example: ['tag_object_id_1', 'tag_object_id_2'],
    description: 'Array of tag ObjectIds associated with the debate.',
  })
  readonly tags: string[];

  @IsString()
  @IsOptional()
  @ApiProperty({
    example:
      'Fifteen years after the death of the first cloned mammal, Dolly the Sheep...',
    description: 'Optional background information of the debate.',
  })
  readonly backgroundInfo?: string;
}

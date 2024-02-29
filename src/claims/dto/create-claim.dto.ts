import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClaimDto {
  @Prop()
  @ApiProperty({
    example: 'Cloning animals is ethical.',
    description: 'Thesis of the debate.',
  })
  thesis: string;

  @Prop()
  @ApiProperty({
    example: 'en',
    description: 'Language of the debate. The language is in ISO 639-1 format.',
  })
  language: string;
}

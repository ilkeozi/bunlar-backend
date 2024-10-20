import { ApiProperty } from '@nestjs/swagger';
import { Language } from '../../languages/schemas/language.schema';
import { Tag } from '../../tags/schemas/tag.schema';

export class DebateDto {
  @ApiProperty({
    example: '64c2d05f84ae9a9d5c9b4b8f',
    description: 'The unique identifier of the debate.',
  })
  readonly _id: string;

  @ApiProperty({
    example: 'Is Cloning Animals Ethical?',
    description: 'Name of the debate.',
  })
  readonly name: string;

  @ApiProperty({
    example: 'is-cloning-animals-ethical',
    description: 'Slug for the debate, used in URLs and filtering.',
  })
  readonly slug: string;

  @ApiProperty({
    example: 'Cloning animals is ethical.',
    description: 'Thesis of the debate.',
  })
  readonly thesis: string;

  @ApiProperty({
    type: () => Language,
    description: 'The language object of the debate.',
  })
  readonly language: Language;

  @ApiProperty({
    type: [Tag],
    description: 'Array of tag objects associated with the debate.',
  })
  readonly tags: Tag[];

  @ApiProperty({
    example:
      'Fifteen years after the death of the first cloned mammal, Dolly the Sheep...',
    description: 'Background information of the debate.',
  })
  readonly backgroundInfo?: string;

  @ApiProperty({
    example: 'open',
    description: 'The current status of the debate.',
  })
  readonly status: string;

  @ApiProperty({
    example: '2024-10-20T12:34:56.789Z',
    description: 'The date when the debate was created.',
  })
  readonly createdAt: Date;

  @ApiProperty({
    example: '2024-10-20T12:34:56.789Z',
    description: 'The date when the debate was last updated.',
  })
  readonly updatedAt: Date;
}

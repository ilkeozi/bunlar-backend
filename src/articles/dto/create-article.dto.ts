import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @Prop({ required: true })
  @ApiProperty({
    example: 'Cloning animals is ethical.',
    description: 'Title of the article.',
  })
  title: string;

  @Prop({ required: true })
  @ApiProperty({
    example: 'This is a sample article.',
    description: 'Content of the article. The content is in Markdown format.',
  })
  content: string;

  @Prop()
  @ApiProperty({
    example: 'An article about cloning animals.',
    description: 'A short description of the article.',
  })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

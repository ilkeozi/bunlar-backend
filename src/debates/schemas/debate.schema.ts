import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Debate {
  @Prop()
  @ApiProperty({
    example: 'Is Cloning Animals Ethical?',
    description: 'Name of the debate.',
  })
  name: string;

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

  @Prop()
  @ApiProperty({
    example: 'Politics, Economy, History, Culture, Geography',
    description: 'Tags related to the debate. The tags are comma separated.',
  })
  tags: string[];

  @Prop()
  @ApiProperty({
    example:
      'Fifteen years after the death of the first cloned mammal, Dolly the Sheep, Chinese scientists have cloned the first non-human primates. The discussion about the ethics of animal cloning has resurfaced, with the pros and cons being the subject of much debate among scientists and animal activists alike.    ',
    description: 'Background information of the debate.',
  })
  backgroundInfo: string;
}

export const DebateSchema = SchemaFactory.createForClass(Debate);

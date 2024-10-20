import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Language } from '../../languages/schemas/language.schema';

@Schema({ timestamps: true })
export class Debate extends Document {
  @Prop({ required: true })
  @ApiProperty({
    example: 'Is Cloning Animals Ethical?',
    description: 'Name of the debate.',
  })
  name: string;

  @Prop({ required: true, unique: true, index: true })
  @ApiProperty({
    example: 'is-cloning-animals-ethical',
    description: 'Slug for the debate, used in URLs and filtering.',
  })
  slug: string;

  @Prop({ required: true })
  @ApiProperty({
    example: 'Cloning animals is ethical.',
    description: 'Thesis of the debate.',
  })
  thesis: string;

  @Prop({ type: Types.ObjectId, ref: 'Language', required: true, index: true })
  @ApiProperty({
    example: 'en',
    description: 'Language of the debate, linked to the Language schema.',
  })
  language: Language;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Tag' }], index: true })
  @ApiProperty({
    example: ['politics', 'science'],
    description: 'Array of tag references associated with the debate.',
  })
  tags: Types.ObjectId[];

  @Prop()
  @ApiProperty({
    example:
      'Fifteen years after the death of the first cloned mammal, Dolly the Sheep...',
    description: 'Background information of the debate.',
  })
  backgroundInfo: string;

  @Prop({ default: 'open', index: true })
  @ApiProperty({
    example: 'open',
    description: 'The current status of the debate (open/closed).',
  })
  status: string;

  @Prop({ type: Date })
  @ApiProperty({
    example: '2024-10-20T12:34:56.789Z',
    description: 'The date when the debate was created.',
  })
  createdAt?: Date; // Declare it as optional

  @Prop({ type: Date })
  @ApiProperty({
    example: '2024-10-21T12:34:56.789Z',
    description: 'The date when the debate was last updated.',
  })
  updatedAt?: Date; // Declare it as optional
}

export const DebateSchema = SchemaFactory.createForClass(Debate);

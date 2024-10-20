import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Language extends Document {
  @Prop({ required: true, unique: true })
  @ApiProperty({
    example: 'English',
    description: 'The name of the language.',
  })
  name: string;

  @Prop({ required: true, unique: true })
  @ApiProperty({
    example: 'en',
    description: 'The ISO 639-1 language code.',
  })
  code: string;

  @Prop({ default: Date.now })
  @ApiProperty({
    example: '2024-10-20T12:34:56.789Z',
    description: 'Date when the language was added.',
  })
  createdAt: Date;
}

export const LanguageSchema = SchemaFactory.createForClass(Language);

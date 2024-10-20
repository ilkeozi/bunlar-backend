import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Tag extends Document {
  @Prop({ required: true, unique: true })
  @ApiProperty({
    example: 'Politics',
    description: 'The name of the tag.',
  })
  name: string;

  @Prop({ required: true, unique: true })
  @ApiProperty({
    example: 'politics',
    description: 'Slug for the tag, used in URLs and filtering.',
  })
  slug: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TagSchema = SchemaFactory.createForClass(Tag);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Country {
  @Prop()
  @ApiProperty({
    example: 'Italy',
    description: 'Name of the country in english.',
  })
  name: string;

  @Prop()
  @ApiProperty({
    example: 'IT',
    description: ' ISO 3166 Alpha2Code of the country.',
  })
  alpha2Code: string;

  @Prop()
  @ApiProperty({
    example: 'ITA',
    description: 'ISO 3166 Alpha3Code of the country.',
  })
  alpha3Code: string;

  @Prop()
  @ApiProperty({
    example: 380,
    description: 'ISO 3166 NumericCode of the country.',
  })
  numericCode: number;

  @Prop()
  @ApiProperty({
    example: 'İtalya',
    description: 'Name of the country in turkish.',
  })
  nameTurkish: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);

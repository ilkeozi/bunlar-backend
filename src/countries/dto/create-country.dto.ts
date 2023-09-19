import { IsInt, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsString()
  readonly alpha2Code: string;

  @IsString()
  readonly alpha3Code: string;

  @IsString()
  readonly numericCode: number;

  @IsString()
  readonly nameTurkish: string;
}

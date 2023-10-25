import { IsInt, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly alpha2Code: string;

  @IsString()
  readonly alpha3Code: string;

  @IsInt()
  readonly numericCode: number;

  @IsString()
  readonly nameTurkish: string;
}

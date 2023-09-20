import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ConfirmRegistrationDto {
  @IsEmail()
  @ApiProperty({
    example: 'john.doe@acme.com',
    description: 'Email address of the user.',
  })
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: 'Verification code received via email.',
  })
  readonly code: string;
}

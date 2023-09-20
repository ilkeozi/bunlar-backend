import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({
    example: 'john.doe@acme.com',
    description: 'Email address of the user.',
  })
  readonly email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d@$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
    { message: 'invalid password' },
  )
  @ApiProperty({
    example: 'SomeComplexPassword123!',
    description:
      'Password of the user. Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.',
  })
  readonly password: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class LoginResponse {
  @ApiProperty({
    description: 'Access token of the user.',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Refresh token of the user.',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  })
  refreshToken: string;
}

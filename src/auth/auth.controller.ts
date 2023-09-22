import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConfirmRegistrationDto } from './dto/confirm-registraton.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({
    summary: 'Registers a new user.',
    description: 'Registers a new user.',
  })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Logs in a user.', description: 'Logs in a user.' })
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('/confirm')
  @ApiOperation({
    summary: 'Confirms a user registration.',
    description: 'Confirms a user registration.',
  })
  async confirm(@Body() confirmRegistrationDto: ConfirmRegistrationDto) {
    return this.authService.confirmRegistration(confirmRegistrationDto);
  }
}

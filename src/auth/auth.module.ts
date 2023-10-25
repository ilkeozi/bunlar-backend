import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRegisteredListener } from './listeners/user-registered.listener';
import { UserLoginListener } from './listeners/user-login.listener';
import { RegistrationConfirmedListener } from './listeners/registration-confirmed.listener';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [
    AuthService,
    UserRegisteredListener,
    UserLoginListener,
    RegistrationConfirmedListener,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}

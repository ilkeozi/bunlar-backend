import { Injectable } from '@nestjs/common';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  ICognitoUserData,
} from 'amazon-cognito-identity-js';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfirmRegistrationDto } from './dto/confirm-registraton.dto';
import { UserLoginEvent } from './events/user-login.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AuthService {
  private userPool: CognitoUserPool;

  constructor(private eventEmitter: EventEmitter2) {
    this.userPool = new CognitoUserPool({
      UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
      ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    });
  }

  async register(registerUserDto: RegisterUserDto) {
    const { email, password } = registerUserDto;

    const userAttributes: CognitoUserAttribute[] = [];
    const validationData: CognitoUserAttribute[] = [];
    const clientMetadata = null;

    const result = new Promise((resolve, reject) => {
      this.userPool.signUp(
        email,
        password,
        userAttributes,
        validationData,
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
        clientMetadata,
      );
    });

    return result;
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const userData: ICognitoUserData = {
      Username: email,
      Pool: this.userPool,
    };

    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    const cognitoUser = new CognitoUser(userData);

    const result = new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          resolve({
            accessToken: result.getAccessToken().getJwtToken(),
            refreshToken: result.getRefreshToken().getToken(),
          });
          const userLoginEvent = new UserLoginEvent();
          userLoginEvent.email = email;
          this.eventEmitter.emit('auth.user-login', userLoginEvent);
        },
        onFailure: (error) => {
          reject(error);
        },
      });
    });

    return result;
  }

  async confirmRegistration(confirmRegistrationDto: ConfirmRegistrationDto) {
    const { email, code } = confirmRegistrationDto;

    const userData: ICognitoUserData = {
      Username: email,
      Pool: this.userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    const result = new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(code, true, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
    return result;
  }
  async forgotPassword() {
    return 'forgotPassword';
  }

  async changePassword() {
    return 'changePassword';
  }
}

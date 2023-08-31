import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateUser(token: string) {
    throw new Error('Method not implemented.');
  }
}

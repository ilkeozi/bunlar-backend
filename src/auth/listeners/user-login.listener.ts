import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserLoginEvent } from '../events/user-login.event';

@Injectable()
export class UserLoginListener {
  @OnEvent('auth.user-login')
  handleUserLogin(event: UserLoginEvent) {
    // handle and process "UserLoginEvent" event
    console.log(event);
  }
}

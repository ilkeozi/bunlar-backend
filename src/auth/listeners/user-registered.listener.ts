import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserRegisteredEvent } from '../events/user-registered.event';

@Injectable()
export class UserRegisteredListener {
  @OnEvent('auth.user-registered')
  handleUserRegistered(event: UserRegisteredEvent) {
    // handle and process "UserRegisteredEvent" event
    console.log(event);
  }
}

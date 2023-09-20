import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { RegistrationConfirmedEvent } from '../events/registration-confirmed.event';

@Injectable()
export class RegistrationConfirmedListener {
  @OnEvent('auth.registration-confirmed')
  handleRegistrationConfirmed(event: RegistrationConfirmedEvent) {
    // handle and process "RegistrationConfirmedEvent" event
    console.log(event);
  }
}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CountryCreatedEvent } from '../events/country-created.event';

@Injectable()
export class CountryCreatedListener {
  @OnEvent('order.created')
  handleCountryCreatedEvent(event: CountryCreatedEvent) {
    // handle and process "CountryCreatedEvent" event
    console.log(event);
  }
}

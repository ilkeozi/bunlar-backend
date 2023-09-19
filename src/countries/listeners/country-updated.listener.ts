import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CountryUpdatedEvent } from '../events/country-updated.event';

@Injectable()
export class CountryUpdatedListener {
  @OnEvent('country.updated')
  handleCountryUpdatedEvent(event: CountryUpdatedEvent) {
    // handle and process "CountryUpdatedEvent" event
    console.log(event);
  }
}

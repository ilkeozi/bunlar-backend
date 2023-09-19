import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CountryDeletedEvent } from '../events/country-deleted.event';

@Injectable()
export class CountryDeletedListener {
  @OnEvent('country.deleted')
  handleCountryDeletedEvent(event: CountryDeletedEvent) {
    // handle and process "CountryDeletedEvent" event
    console.log(event);
  }
}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClaimCreatedEvent } from '../events/claim-created.event';

@Injectable()
export class ClaimCreatedListener {
  @OnEvent('claim.created')
  handleClaimCreatedEvent(event: ClaimCreatedEvent) {
    // handle and process "ClaimCreatedEvent" event
    console.log(event);
  }
}

import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClaimUpdatedEvent } from '../events/claim-updated.event';

@Injectable()
export class ClaimUpdatedListener {
  @OnEvent('claim.updated')
  handleClaimUpdatedEvent(event: ClaimUpdatedEvent) {
    // handle and process "ClaimUpdatedEvent" event
    console.log(event);
  }
}

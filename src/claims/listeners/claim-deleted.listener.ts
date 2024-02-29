import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ClaimDeletedEvent } from '../events/claim-deleted.event';

@Injectable()
export class ClaimDeletedListener {
  @OnEvent('claim.deleted')
  handleClaimDeletedEvent(event: ClaimDeletedEvent) {
    // handle and process "ClaimDeletedEvent" event
    console.log(event);
  }
}

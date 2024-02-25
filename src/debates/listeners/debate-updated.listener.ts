import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DebateUpdatedEvent } from '../events/debate-updated.event';

@Injectable()
export class DebateUpdatedListener {
  @OnEvent('debate.updated')
  handleDebateUpdateEvent(event: DebateUpdatedEvent) {
    console.log(event);
  }
}

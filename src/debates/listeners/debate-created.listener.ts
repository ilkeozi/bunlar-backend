import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DebateCreatedEvent } from '../events/debate-created.event';

@Injectable()
export class DebateCreatedListener {
  @OnEvent('debate.created')
  handleDebateCreatedEvent(event: DebateCreatedEvent) {
    console.log(event);
  }
}

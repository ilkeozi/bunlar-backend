import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DebateDeletedEvent } from '../events/debate-deleted.event';

@Injectable()
export class DebateDeletedListener {
  @OnEvent('debate.deleted')
  handleDebateDeletedEvent(event: DebateDeletedEvent) {
    console.log(event);
  }
}

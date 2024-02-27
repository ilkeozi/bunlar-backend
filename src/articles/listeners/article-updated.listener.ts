import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ArticleUpdatedEvent } from '../events/article-updated.event';

@Injectable()
export class ArticleUpdatedListener {
  @OnEvent('article.updated')
  handleArticleUpdatedEvent(event: ArticleUpdatedEvent) {
    console.log(event);
  }
}

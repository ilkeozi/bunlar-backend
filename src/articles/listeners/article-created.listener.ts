import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ArticleCreatedEvent } from '../events/article-created.event';

@Injectable()
export class ArticleCreatedListener {
  @OnEvent('article.created')
  handleArticleCreatedEvent(event: ArticleCreatedEvent) {
    console.log(event);
  }
}

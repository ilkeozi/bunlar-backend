import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ArticleDeletedEvent } from '../events/article-deleted.event';

@Injectable()
export class ArticleDeletedListener {
  @OnEvent('article.deleted')
  handleArticleDeletedEvent(event: ArticleDeletedEvent) {
    console.log(event);
  }
}

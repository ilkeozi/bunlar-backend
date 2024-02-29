import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ArticleCreatedEvent } from './events/article-created.event';
import { ArticleUpdatedEvent } from './events/article-updated.event';
import { ArticleDeletedEvent } from './events/article-deleted.event';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    const createdItem = await this.articleModel.create(createArticleDto);

    const articleCreatedEvent = new ArticleCreatedEvent();
    articleCreatedEvent.title = createdItem.title;
    this.eventEmitter.emit('article.created', articleCreatedEvent);

    return createdItem;
  }

  async findAll(): Promise<Article[]> {
    const items = await this.articleModel.find().exec();

    if (!items) {
      throw new NotFoundException(`Articles not found`);
    }
    return items;
  }

  async findOne(id: string): Promise<Article> {
    const item = await this.articleModel.findOne({ _id: id }).exec();

    if (!item) {
      throw new NotFoundException(`Article ${id} not found`);
    }
    return item;
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const updatedItem = await this.articleModel.findByIdAndUpdate(
      id,
      updateArticleDto,
    );

    const articleUpdatedEvent = new ArticleUpdatedEvent();
    articleUpdatedEvent.title = updatedItem.title;
    this.eventEmitter.emit('article.updated', articleUpdatedEvent);
    return updatedItem;
  }

  async remove(id: string): Promise<Article> {
    const deletedArticle = await this.articleModel.findByIdAndRemove(id).exec();
    const articleDeletedEvent = new ArticleDeletedEvent();
    articleDeletedEvent.title = deletedArticle.title;
    this.eventEmitter.emit('article.deleted', articleDeletedEvent);

    return deletedArticle;
  }
}

import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticleCreatedListener } from './listeners/article-created.listener';
import { ArticleUpdatedListener } from './listeners/article-updated.listener';
import { ArticleDeletedListener } from './listeners/article-deleted.listener';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticlesController],
  providers: [
    ArticlesService,
    ArticleCreatedListener,
    ArticleUpdatedListener,
    ArticleDeletedListener,
  ],
})
export class ArticlesModule {}

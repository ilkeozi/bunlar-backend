import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CountriesModule } from './countries/countries.module';
import { LanguagesModule } from './languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import helmet from 'helmet';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DebatesModule } from './debates/debates.module';
import { ClaimsModule } from './claims/claims.module';
import { ArticlesModule } from './articles/articles.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.local.env', '.env.development', '.env.production'],
    }),
    CoreModule,
    AuthModule,
    ArticlesModule,
    ClaimsModule,
    CountriesModule,
    DebatesModule,
    LanguagesModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20,
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100,
      },
    ]),
    TagsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes('none');
  }
}

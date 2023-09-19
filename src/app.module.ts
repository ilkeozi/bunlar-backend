import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CountriesModule } from './countries/countries.module';
import { LanguagesModule } from './languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import helmet from 'helmet';
import { EventEmitterModule } from '@nestjs/event-emitter';

const dbUri =
  'mongodb+srv://bunlar-mongo-db-user:0gxIg0mSFbrkyFPg@bunlar-mongo-db-prod.ornxx01.mongodb.net/?retryWrites=true&w=majority';
@Module({
  imports: [
    EventEmitterModule.forRoot(),
    CoreModule,
    CountriesModule,
    LanguagesModule,
    MongooseModule.forRoot(dbUri),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes('cats');
  }
}

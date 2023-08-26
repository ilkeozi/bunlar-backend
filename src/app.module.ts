import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CountriesModule } from './countries/countries.module';
import { LanguagesModule } from './languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import helmet from 'helmet';

const dbUri =
  'mongodb+srv://bunlar-mongo-db-user:0gxIg0mSFbrkyFPg@bunlar-mongo-db-prod.ornxx01.mongodb.net/?retryWrites=true&w=majority';
@Module({
  imports: [
    CoreModule,
    CatsModule,
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

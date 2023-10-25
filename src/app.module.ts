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

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: ['.local.env', '.env.development', '.env.production'],
    }),
    CoreModule,
    AuthModule,
    CountriesModule,
    LanguagesModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(helmet(), LoggerMiddleware).forRoutes('none');
  }
}

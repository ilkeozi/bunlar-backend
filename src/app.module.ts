import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import helmet from 'helmet';
import cors from 'cors';

@Module({
  imports: [CoreModule, CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors(), helmet(), LoggerMiddleware).forRoutes('cats');
  }
}

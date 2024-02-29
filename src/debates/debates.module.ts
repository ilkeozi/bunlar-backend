import { Module } from '@nestjs/common';
import { DebatesService } from './debates.service';
import { DebatesController } from './debates.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { MongooseModule } from '@nestjs/mongoose';
import { Debate, DebateSchema } from './schemas/debate.schema';
import { DebateDeletedListener } from './listeners/debate-deleted.listener';
import { DebateUpdatedListener } from './listeners/debate-updated.listener';
import { DebateCreatedListener } from './listeners/debate-created.listener';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Debate.name, schema: DebateSchema }]),
  ],
  controllers: [DebatesController],
  providers: [
    DebatesService,
    DebateCreatedListener,
    DebateUpdatedListener,
    DebateDeletedListener,
  ],
})
export class DebatesModule {}

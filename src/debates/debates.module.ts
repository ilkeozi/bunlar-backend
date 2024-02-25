import { Module } from '@nestjs/common';
import { DebatesService } from './debates.service';
import { DebatesController } from './debates.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { MongooseModule } from '@nestjs/mongoose';
import { Debate, DebateSchema } from './schemas/debate.schema';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Debate.name, schema: DebateSchema }]),
  ],
  controllers: [DebatesController],
  providers: [DebatesService],
})
export class DebatesModule {}

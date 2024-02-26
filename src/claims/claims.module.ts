import { Module } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { ClaimsController } from './claims.controller';
import { ClaimCreatedListener } from './listeners/claim-created.listener';
import { ClaimUpdatedListener } from './listeners/claim-updated.listener';
import { ClaimDeletedListener } from './listeners/claim-deleted.listener';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { Claim, ClaimSchema } from './schemas/claim.schema';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Claim.name, schema: ClaimSchema }]),
  ],
  controllers: [ClaimsController],
  providers: [
    ClaimsService,
    ClaimCreatedListener,
    ClaimUpdatedListener,
    ClaimDeletedListener,
  ],
})
export class ClaimsModule {}

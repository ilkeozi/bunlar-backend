import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Claim } from './schemas/claim.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ClaimCreatedEvent } from './events/claim-created.event';
import { ClaimUpdatedEvent } from './events/claim-updated.event';
import { ClaimDeletedEvent } from './events/claim-deleted.event';

@Injectable()
export class ClaimsService {
  constructor(
    @InjectModel(Claim.name) private readonly claimModel: Model<Claim>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createClaimDto: CreateClaimDto): Promise<Claim> {
    const createdItem = await this.claimModel.create(createClaimDto);

    const claimCreatedEvent = new ClaimCreatedEvent();
    claimCreatedEvent.thesis = createdItem.thesis;
    this.eventEmitter.emit('debate.created', claimCreatedEvent);

    return createdItem;
  }

  async findAll(): Promise<Claim[]> {
    const items = await this.claimModel.find().exec();

    if (!items) {
      throw new NotFoundException(`Claims not found`);
    }
    return items;
  }

  async findOne(id: string): Promise<Claim> {
    const item = await this.claimModel.findOne({ _id: id }).exec();

    if (!item) {
      throw new NotFoundException(`Claim ${id} not found`);
    }
    return item;
  }

  async update(id: string, updateClaimDto: UpdateClaimDto): Promise<Claim> {
    const updatedItem = await this.claimModel.findByIdAndUpdate(
      id,
      updateClaimDto,
    );

    const claimUpdatedEvent = new ClaimUpdatedEvent();
    claimUpdatedEvent.thesis = updatedItem.thesis;
    this.eventEmitter.emit('claim.updated', claimUpdatedEvent);
    return updatedItem;
  }

  async remove(id: string): Promise<Claim> {
    const deletedClaim = await this.claimModel.findByIdAndRemove(id).exec();
    const claimDeletedEvent = new ClaimDeletedEvent();
    claimDeletedEvent.thesis = deletedClaim.thesis;
    this.eventEmitter.emit('claim.deleted', claimDeletedEvent);

    return deletedClaim;
  }
}

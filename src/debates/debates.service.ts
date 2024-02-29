import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDebateDto } from './dto/create-debate.dto';
import { UpdateDebateDto } from './dto/update-debate.dto';
import { Debate } from './schemas/debate.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { DebateCreatedEvent } from './events/debate-created.event';
import { DebateUpdatedEvent } from './events/debate-updated.event';
import { DebateDeletedEvent } from './events/debate-deleted.event';

@Injectable()
export class DebatesService {
  constructor(
    @InjectModel(Debate.name) private readonly debateModel: Model<Debate>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createDebateDto: CreateDebateDto): Promise<Debate> {
    const createdItem = await this.debateModel.create(createDebateDto);

    const debateCreatedEvent = new DebateCreatedEvent();
    debateCreatedEvent.name = createdItem.name;
    this.eventEmitter.emit('debate.created', debateCreatedEvent);

    return createdItem;
  }

  async findAll(): Promise<Debate[]> {
    const items = await this.debateModel.find().exec();

    if (!items) {
      throw new NotFoundException(`Countries not found`);
    }
    return items;
  }

  async findOne(id: string): Promise<Debate> {
    const item = await this.debateModel.findOne({ _id: id }).exec();

    if (!item) {
      throw new NotFoundException(`Country ${id} not found`);
    }
    return item;
  }

  async update(id: string, updateDebateDto: UpdateDebateDto): Promise<Debate> {
    const updatedItem = await this.debateModel.findByIdAndUpdate(
      id,
      updateDebateDto,
    );

    const debateUpdatedEvent = new DebateUpdatedEvent();
    debateUpdatedEvent.name = updatedItem.name;
    this.eventEmitter.emit('debate.updated', debateUpdatedEvent);
    return updatedItem;
  }

  async remove(id: string): Promise<Debate> {
    const deletedDebate = await this.debateModel.findByIdAndRemove(id).exec();
    const debateDeletedEvent = new DebateDeletedEvent();
    debateDeletedEvent.name = deletedDebate.name;
    this.eventEmitter.emit('debate.deleted', debateDeletedEvent);

    return deletedDebate;
  }
}

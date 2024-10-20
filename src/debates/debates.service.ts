import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDebateDto } from './dto/create-debate.dto';
import { UpdateDebateDto } from './dto/update-debate.dto';
import { DebateDto } from './dto/debate.dto';
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

  async create(createDebateDto: CreateDebateDto): Promise<DebateDto> {
    const createdItem = await this.debateModel.create(createDebateDto);
    await createdItem.populate('tags language');

    const debateCreatedEvent = new DebateCreatedEvent();
    debateCreatedEvent.name = createdItem.name;
    this.eventEmitter.emit('debate.created', debateCreatedEvent);

    return this.toDebateDto(createdItem);
  }

  async findAll(): Promise<DebateDto[]> {
    const items = await this.debateModel
      .find()
      .populate('tags language')
      .exec();

    if (!items || items.length === 0) {
      throw new NotFoundException('No debates found');
    }

    return items.map(this.toDebateDto);
  }

  async findOne(id: string): Promise<DebateDto> {
    const item = await this.debateModel
      .findById(id)
      .populate('tags language')
      .exec();

    if (!item) {
      throw new NotFoundException(`Debate with ID ${id} not found`);
    }

    return this.toDebateDto(item);
  }

  async update(
    id: string,
    updateDebateDto: UpdateDebateDto,
  ): Promise<DebateDto> {
    const updatedItem = await this.debateModel
      .findByIdAndUpdate(id, updateDebateDto, { new: true })
      .populate('tags language')
      .exec();

    if (!updatedItem) {
      throw new NotFoundException(`Debate with ID ${id} not found`);
    }

    const debateUpdatedEvent = new DebateUpdatedEvent();
    debateUpdatedEvent.name = updatedItem.name;
    this.eventEmitter.emit('debate.updated', debateUpdatedEvent);

    return this.toDebateDto(updatedItem);
  }

  async remove(id: string): Promise<DebateDto> {
    const deletedDebate = await this.debateModel
      .findByIdAndRemove(id)
      .populate('tags language')
      .exec();

    if (!deletedDebate) {
      throw new NotFoundException(`Debate with ID ${id} not found`);
    }

    const debateDeletedEvent = new DebateDeletedEvent();
    debateDeletedEvent.name = deletedDebate.name;
    this.eventEmitter.emit('debate.deleted', debateDeletedEvent);

    return this.toDebateDto(deletedDebate);
  }

  private toDebateDto(debate: Debate): DebateDto {
    return {
      _id: debate._id.toString(),
      name: debate.name,
      slug: debate.slug,
      thesis: debate.thesis,
      language: debate.language,
      tags: debate.tags as any[],
      backgroundInfo: debate.backgroundInfo,
      status: debate.status,
      createdAt: debate.createdAt,
      updatedAt: debate.updatedAt,
    };
  }
}

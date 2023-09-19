import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './schemas/countries.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CountryCreatedEvent } from './events/country-created.event';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CountryUpdatedEvent } from './events/country-updated.event';
import { CountryDeletedEvent } from './events/country-deleted.event';

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdItem = await this.countryModel.create(createCountryDto);

    const countryCreatedEvent = new CountryCreatedEvent();
    countryCreatedEvent.name = createdItem.name;
    this.eventEmitter.emit('country.created', countryCreatedEvent);

    return createdItem;
  }

  async findAll() {
    return this.countryModel.find().exec();
  }

  async findOne(id: string) {
    return this.countryModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    const updatedItem = await this.countryModel.findByIdAndUpdate(
      id,
      updateCountryDto,
    );

    const countryUpdatedEvent = new CountryUpdatedEvent();
    countryUpdatedEvent.name = updatedItem.name;
    this.eventEmitter.emit('country.updated', countryUpdatedEvent);
    return updatedItem;
  }

  async remove(id: string) {
    const deletedCountry = await this.countryModel.findByIdAndRemove(id).exec();
    const countryDeletedEvent = new CountryDeletedEvent();
    countryDeletedEvent.name = deletedCountry.name;
    this.eventEmitter.emit('country.deleted', countryDeletedEvent);

    return deletedCountry;
  }
}

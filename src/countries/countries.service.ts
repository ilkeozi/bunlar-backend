import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './schemas/countries.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CountryCreatedEvent } from './events/country-created.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

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

  async findOne(id: number) {
    return this.countryModel.findOne({ _id: id }).exec();
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  async remove(id: number) {
    const deletedCountry = await this.countryModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCountry;
  }
}

import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { CountriesService } from './countries.service';
import { Country } from './schemas/countries.schema';
import { EventEmitter2 } from '@nestjs/event-emitter';

const mockCountry = {
  name: 'country #1',
  breed: 'Breed #1',
  alpha2Code: 'Code #1',
  alpha3Code: 'Code #2',
  numericCode: 1,
  nameTurkish: 'Country #1',
  age: 4,
};

describe('Countries Service', () => {
  let service: CountriesService;
  let model: Model<Country>;

  const countriesArray = [
    {
      name: 'Country #1',
      breed: 'Bread #1',
      alpha2Code: 'Code #1',
      alpha3Code: 'Code #2',
      numericCode: 1,
      nameTurkish: 'Country #1',
      age: 4,
    },
    {
      name: 'Country #2',
      breed: 'Breed #2',
      alpha2Code: 'Code #3',
      alpha3Code: 'Code #4',
      numericCode: 2,
      nameTurkish: 'Country #2',
      age: 3,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountriesService,
        {
          provide: getModelToken('Country'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockCountry),
            constructor: jest.fn().mockResolvedValue(mockCountry),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
        EventEmitter2,
      ],
    }).compile();

    service = module.get<CountriesService>(CountriesService);
    model = module.get<Model<Country>>(getModelToken('Country'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all countries', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(countriesArray),
    } as any);
    const Countries = await service.findAll();
    expect(Countries).toEqual(countriesArray);
  });

  it('should insert a new country', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        name: 'country #1',
        breed: 'Breed #1',
        alpha2Code: 'Code #1',
        alpha3Code: 'Code #2',
        numericCode: 1,
        nameTurkish: 'Country #1',
        age: 4,
      } as any),
    );
    const newcountry = await service.create({
      name: 'country #1',
      breed: 'Breed #1',
      alpha2Code: 'Code #1',
      alpha3Code: 'Code #2',
      numericCode: 1,
      nameTurkish: 'Country #1',
      age: 4,
    });
    expect(newcountry).toEqual(mockCountry);
  });
});

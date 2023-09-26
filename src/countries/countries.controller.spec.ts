import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountriesService } from './countries.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('Countries Controller', () => {
  let controller: CountriesController;
  let service: CountriesService;
  const createCountryDto: CreateCountryDto = {
    name: 'Country #1',
    alpha2Code: 'Code #1',
    alpha3Code: 'Code #2',
    numericCode: 1,
    nameTurkish: 'Country #1',
  };

  const mockCountry = {
    name: 'Country #1',
    alpha2Code: 'Code #1',
    alpha3Code: 'Code #2',
    numericCode: 1,
    nameTurkish: 'Country #1',
    _id: 'a id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [
        {
          provide: CountriesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Country #1',
                alpha2Code: 'Code #1',
                alpha3Code: 'Code #2',
                numericCode: 1,
                nameTurkish: 'Country #1',
              },
              {
                name: 'Country #2',
                alpha2Code: 'Code #3',
                alpha3Code: 'Code #4',
                numericCode: 2,
                nameTurkish: 'Country #2',
              },
              {
                name: 'Country #3',
                alpha2Code: 'Code #5',
                alpha3Code: 'Code #6',
                numericCode: 3,
                nameTurkish: 'Country #3',
              },
            ]),
            create: jest.fn().mockResolvedValue(createCountryDto),
          },
        },
      ],
      imports: [CacheModule.register()],
    }).compile();

    controller = module.get<CountriesController>(CountriesController);
    service = module.get<CountriesService>(CountriesService);
  });

  describe('create()', () => {
    it('should create a new Country', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockCountry);

      await controller.create(createCountryDto);
      expect(createSpy).toHaveBeenCalledWith(createCountryDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of Countries', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Country #1',
          alpha2Code: 'Code #1',
          alpha3Code: 'Code #2',
          numericCode: 1,
          nameTurkish: 'Country #1',
        },
        {
          name: 'Country #2',
          alpha2Code: 'Code #3',
          alpha3Code: 'Code #4',
          numericCode: 2,
          nameTurkish: 'Country #2',
        },
        {
          name: 'Country #3',
          alpha2Code: 'Code #5',
          alpha3Code: 'Code #6',
          numericCode: 3,
          nameTurkish: 'Country #3',
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});

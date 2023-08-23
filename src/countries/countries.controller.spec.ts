import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './countries.controller';
import { CreateCountryDto } from './dto/create-country.dto';
import { CountriesService } from './countries.service';

describe('Countries Controller', () => {
  let controller: CountriesController;
  let service: CountriesService;
  const createCountryDto: CreateCountryDto = {
    name: 'Country #1',
    breed: 'Breed #1',
    age: 4,
  };

  const mockCountry = {
    name: 'Country #1',
    breed: 'Breed #1',
    age: 4,
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
                breed: 'Bread #1',
                age: 4,
              },
              {
                name: 'Country #2',
                breed: 'Breed #2',
                age: 3,
              },
              {
                name: 'Country #3',
                breed: 'Breed #3',
                age: 2,
              },
            ]),
            create: jest.fn().mockResolvedValue(createCountryDto),
          },
        },
      ],
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
          breed: 'Bread #1',
          age: 4,
        },
        {
          name: 'Country #2',
          breed: 'Breed #2',
          age: 3,
        },
        {
          name: 'Country #3',
          breed: 'Breed #3',
          age: 2,
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});

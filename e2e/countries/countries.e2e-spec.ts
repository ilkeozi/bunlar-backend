import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { CountriesModule } from '../../src/countries/countries.module';
import { CountriesService } from '../../src/countries/countries.service';
import { CoreModule } from '../../src/core/core.module';

describe('Countries', () => {
  const countriesService = { findAll: () => ['test'] };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CountriesModule, CoreModule],
    })
      .overrideProvider(CountriesService)
      .useValue(countriesService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET countries`, () => {
    return request(app.getHttpServer()).get('/countries').expect(200).expect({
      data: countriesService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});

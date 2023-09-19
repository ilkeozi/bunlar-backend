import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';
import { Country, CountrySchema } from './schemas/countries.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryCreatedListener } from './listeners/country-created.listener';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register(),
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  controllers: [CountriesController],
  providers: [CountriesService, CountryCreatedListener],
})
export class CountriesModule {}

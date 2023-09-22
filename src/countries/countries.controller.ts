import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DocumentCreate } from 'src/common/decorators/document-create.decorator';
import { DocumentUpdate } from 'src/common/decorators/document-update.decorator';
import { DocumentFindOne } from 'src/common/decorators/document-findone.decorator';
import { DocumentFindAll } from 'src/common/decorators/document-findall.decorator';
import { DocumentDelete } from 'src/common/decorators/document-delete.decorator';

@Controller('countries')
@ApiTags('Countries')
@UseInterceptors(CacheInterceptor)
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Post()
  @DocumentCreate('country')
  create(@Body() createCountryDto: CreateCountryDto) {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  @DocumentFindAll('countries')
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(':id')
  @DocumentFindOne('country')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  @Patch(':id')
  @DocumentUpdate('country')
  update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    return this.countriesService.update(id, updateCountryDto);
  }

  @Delete(':id')
  @DocumentDelete('country')
  remove(@Param('id') id: string) {
    return this.countriesService.remove(id);
  }
}

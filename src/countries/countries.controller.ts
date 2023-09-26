import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DocumentCreate } from '../common/decorators/document-create.decorator';
import { DocumentUpdate } from '../common/decorators/document-update.decorator';
import { DocumentFindOne } from '../common/decorators/document-findone.decorator';
import { DocumentFindAll } from '../common/decorators/document-findall.decorator';
import { DocumentDelete } from '../common/decorators/document-delete.decorator';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
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

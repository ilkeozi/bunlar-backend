import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiTags } from '@nestjs/swagger';
import { DocumentCreate } from 'src/common/decorators/document-create.decorator';
import { DocumentFindAll } from 'src/common/decorators/document-findall.decorator';
import { DocumentFindOne } from 'src/common/decorators/document-findone.decorator';
import { DocumentUpdate } from 'src/common/decorators/document-update.decorator';
import { DocumentDelete } from 'src/common/decorators/document-delete.decorator';

@Controller('languages')
@ApiTags('Languages')
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Post()
  @DocumentCreate('language')
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languagesService.create(createLanguageDto);
  }

  @Get()
  @DocumentFindAll('languages')
  findAll() {
    return this.languagesService.findAll();
  }

  @Get(':id')
  @DocumentFindOne('language')
  findOne(@Param('id') id: string) {
    return this.languagesService.findOne(+id);
  }

  @Patch(':id')
  @DocumentUpdate('language')
  update(
    @Param('id') id: string,
    @Body() updateLanguageDto: UpdateLanguageDto,
  ) {
    return this.languagesService.update(+id, updateLanguageDto);
  }

  @Delete(':id')
  @DocumentDelete('language')
  remove(@Param('id') id: string) {
    return this.languagesService.remove(+id);
  }
}

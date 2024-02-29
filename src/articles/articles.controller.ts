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
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DocumentCreate } from 'src/common/decorators/document-create.decorator';
import { DocumentFindAll } from 'src/common/decorators/document-findall.decorator';
import { DocumentFindOne } from 'src/common/decorators/document-findone.decorator';
import { DocumentUpdate } from 'src/common/decorators/document-update.decorator';
import { DocumentDelete } from 'src/common/decorators/document-delete.decorator';

@Controller('articles')
@ApiTags('Articles')
@UseInterceptors(CacheInterceptor)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @DocumentCreate('article')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @DocumentFindAll('articles')
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @DocumentFindOne('article')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  @DocumentUpdate('article')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @DocumentDelete('article')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}

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
import { DebatesService } from './debates.service';
import { CreateDebateDto } from './dto/create-debate.dto';
import { UpdateDebateDto } from './dto/update-debate.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DocumentFindAll } from '../common/decorators/document-findall.decorator';
import { DocumentFindOne } from '../common/decorators/document-findone.decorator';
import { DocumentUpdate } from '../common/decorators/document-update.decorator';
import { DocumentDelete } from '../common/decorators/document-delete.decorator';
import { DocumentCreate } from '../common/decorators/document-create.decorator';

@Controller('debates')
@ApiTags('Debates')
@UseInterceptors(CacheInterceptor)
export class DebatesController {
  constructor(private readonly debatesService: DebatesService) {}

  @Post()
  @DocumentCreate('debate')
  create(@Body() createDebateDto: CreateDebateDto) {
    return this.debatesService.create(createDebateDto);
  }

  @Get()
  @Get()
  /*  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt') */
  @DocumentFindAll('debates')
  findAll() {
    return this.debatesService.findAll();
  }

  @Get(':id')
  @DocumentFindOne('debate')
  findOne(@Param('id') id: string) {
    return this.debatesService.findOne(id);
  }

  @Patch(':id')
  @DocumentUpdate('debate')
  update(@Param('id') id: string, @Body() updateDebateDto: UpdateDebateDto) {
    return this.debatesService.update(id, updateDebateDto);
  }

  @Delete(':id')
  @DocumentDelete('debate')
  remove(@Param('id') id: string) {
    return this.debatesService.remove(id);
  }
}

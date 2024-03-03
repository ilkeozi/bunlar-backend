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
import { ClaimsService } from './claims.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { DocumentCreate } from '../common/decorators/document-create.decorator';
import { DocumentFindAll } from '../common/decorators/document-findall.decorator';
import { DocumentFindOne } from '../common/decorators/document-findone.decorator';
import { DocumentUpdate } from '../common/decorators/document-update.decorator';
import { DocumentDelete } from '../common/decorators/document-delete.decorator';
@Controller('claims')
@ApiTags('Claims')
@UseInterceptors(CacheInterceptor)
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post()
  @DocumentCreate('claim')
  create(@Body() createClaimDto: CreateClaimDto) {
    return this.claimsService.create(createClaimDto);
  }

  @Get()
  @DocumentFindAll('claims')
  findAll() {
    return this.claimsService.findAll();
  }

  @Get(':id')
  @DocumentFindOne('claim')
  findOne(@Param('id') id: string) {
    return this.claimsService.findOne(id);
  }

  @Patch(':id')
  @DocumentUpdate('claim')
  update(@Param('id') id: string, @Body() updateClaimDto: UpdateClaimDto) {
    return this.claimsService.update(id, updateClaimDto);
  }

  @Delete(':id')
  @DocumentDelete('claim')
  remove(@Param('id') id: string) {
    return this.claimsService.remove(id);
  }
}

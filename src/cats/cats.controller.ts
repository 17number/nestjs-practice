import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ListAllEntities } from './dto/list-all-entities.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: ListAllEntities): string {
    // some logic
    return 'All cats';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    // some logic
    return 'New cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    // some logic
    return `Update cat(id ${id})`;
  }
}

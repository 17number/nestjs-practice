import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'All cats';
  }

  @Post()
  create(): string {
    return 'New cat';
  }
}

import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'All cats';
  }

  @Get('async')
  async findAllAsync(): Promise<string> {
    return 'All cats(async)';
  }

  @Post()
  create(): string {
    return 'New cat';
  }
}

import { Controller, Get, Post, Req } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: FastifyRequest): string {
    console.log({request});
    return 'All cats';
  }

  @Post()
  create(): string {
    return 'New cat';
  }
}

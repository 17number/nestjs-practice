import { Controller, Get, Post, Req, HttpCode } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(204)
  findAll(@Req() request: FastifyRequest): string {
    console.log({request});
    return 'All cats';
  }

  @Post()
  @HttpCode(202)
  create(): string {
    return 'New cat';
  }
}

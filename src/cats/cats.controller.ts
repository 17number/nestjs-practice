import { Controller, Get, Post, Req, Header, Redirect } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Controller('cats')
export class CatsController {
  @Get()
  @Header('Foo', 'Bar')
  findAll(@Req() request: FastifyRequest): string {
    console.log({request});
    return 'All cats';
  }

  @Post()
  create(): string {
    return 'New cat';
  }

  @Get('redirect')
  @Redirect('/cats')
  redirect() {
    console.log('redirect override');
    return { url: '/', statusCode: 301 };
  }
}

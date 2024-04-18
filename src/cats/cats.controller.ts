import {
  Controller,
  Get,
  Req,
  Param,
  ParseIntPipe
} from '@nestjs/common';

import { Request } from 'express';

@Controller('cats')
export class CatsController {


  @Get()
  findAll(): string {
    return 'all cats';
  }

  @Get('/:id')
  findOne(
    @Param('id', new ParseIntPipe()) id,
    @Req() request: Request
  ): Request {
    return id;
  }

}

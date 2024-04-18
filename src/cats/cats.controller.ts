import {
  Controller,
  Get,
  Req,
  Param,
  ParseIntPipe
} from '@nestjs/common';

import { Request } from 'express';


type FindOneResT = {
  id: number
  headers: {[key: string]: (string | string[])}
}

@Controller('cats')
export class CatsController {


  @Get()
  findAll(): string {
    return 'all cats';
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe()) id,
    @Req() request: Request
  ): FindOneResT {
    return {
      id,
      headers: request.headers
    };
  }

}

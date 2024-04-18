import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {


  @Get()
  findAll(): string {
    return 'all cats';
  }

  @Get('42')
  findOne(): string {
    return 'one particular cat';
  }

}

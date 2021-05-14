import { ApodService } from './apod.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Astronomy Picture of the Day')
@Controller('apod')
export class ApodController {
  constructor(private readonly apodService: ApodService) {}

  @Get()
  async getApod() {
    return await this.apodService.getApod();
  }
}

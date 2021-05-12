import { RoverPhotosService } from './rover-photos.service';
import { Controller, Get, Query } from '@nestjs/common';
import { RoverPhotosQueries } from './interfaces/rover-photos-queries.interface';

@Controller('rover-photos')
export class RoverPhotosController {
  constructor(private readonly roverPhotosService: RoverPhotosService) {}

  @Get()
  async fetchRoversPhotos(@Query() queries: RoverPhotosQueries): Promise<any> {
    return await this.roverPhotosService.getRoversPhotos(queries);
  }
}

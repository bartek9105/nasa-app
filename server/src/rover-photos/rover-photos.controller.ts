import { RoverPhotosService } from './rover-photos.service';
import { Controller, Get, Query } from '@nestjs/common';
import { RoverPhotosQueries } from './interfaces/rover-photos-queries.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mars rovers photos')
@Controller('rover-photos')
export class RoverPhotosController {
  constructor(private readonly roverPhotosService: RoverPhotosService) {}

  @Get()
  async getRoversPhotos(@Query() queries: RoverPhotosQueries) {
    try {
      return await this.roverPhotosService.getRoversPhotos(queries);
    } catch (error) {
      throw error;
    }
  }
}

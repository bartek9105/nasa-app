import { RoverPhotosService } from './rover-photos.service';
import { Controller, Get } from '@nestjs/common';

@Controller('rover-photos')
export class RoverPhotosController {
  constructor(private readonly roverPhotosService: RoverPhotosService) {}

  @Get()
  async fetchRoverPhotos(): Promise<any> {
    return await this.roverPhotosService.fetchRoversPhotos();
  }
}

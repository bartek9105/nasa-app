import { Controller, Get } from '@nestjs/common';
import { PerservanceWeather } from './perservance-weather.interface';
import { PerservanceWeatherService } from './perservance-weather.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Perservance weather data')
@Controller('perservance-weather')
export class PerservanceWeatherController {
  constructor(
    private readonly perservanceWeatherService: PerservanceWeatherService,
  ) {}

  @Get()
  async getPerservanceWeathers(): Promise<PerservanceWeather[]> {
    try {
      return await this.perservanceWeatherService.getPerservanceWeathers();
    } catch (error) {
      throw error;
    }
  }
}

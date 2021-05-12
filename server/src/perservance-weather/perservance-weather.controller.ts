import { Controller, Get } from '@nestjs/common';
import { PerservanceWeather } from './perservance-weather.interface';
import { PerservanceWeatherService } from './perservance-weather.service';

@Controller('perservance-weather')
export class PerservanceWeatherController {
  constructor(
    private readonly perservanceWeatherService: PerservanceWeatherService,
  ) {}

  @Get()
  getPerservanceWeathers(): Promise<PerservanceWeather[]> {
    return this.perservanceWeatherService.getPerservanceWeathers();
  }
}

import { HttpService, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PerservanceWeather } from './perservance-weather.interface';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class PerservanceWeatherService {
  private readonly logger = new Logger(PerservanceWeatherService.name);

  constructor(
    private httpService: HttpService,
    @InjectModel('PerservanceWeather')
    private readonly perservanceWeatherModel: Model<PerservanceWeather>,
  ) {}

  @Cron('59 23 * * *')
  async fetchPerservanceWeather(): Promise<PerservanceWeather[]> {
    const apiUrl =
      'https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json';
    const response = await this.httpService.get(apiUrl).toPromise();

    const lastSolWeatherData =
      response.data.sols[response.data.sols.length - 1];

    await this.deletePerservanceWeather();
    await this.savePerservanceWeather(lastSolWeatherData);

    this.logger.log('Fetched and saved new data');

    return lastSolWeatherData;
  }

  async savePerservanceWeather(
    perservanceWeatherDto: PerservanceWeather,
  ): Promise<PerservanceWeather> {
    const newWeather = new this.perservanceWeatherModel(perservanceWeatherDto);
    return await newWeather.save();
  }

  async deletePerservanceWeather() {
    await this.perservanceWeatherModel.deleteMany({});
  }

  async getPerservanceWeathers(): Promise<PerservanceWeather[]> {
    return await this.perservanceWeatherModel.find();
  }
}

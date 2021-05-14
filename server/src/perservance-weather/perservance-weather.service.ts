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

    try {
      const response = await this.httpService.get(apiUrl).toPromise();

      const lastSolWeatherData =
        response.data.sols[response.data.sols.length - 1];

      await this.deletePerservanceWeather();
      await this.savePerservanceWeather(lastSolWeatherData);

      this.logger.log('Fetched and saved new data');

      return lastSolWeatherData;
    } catch (error) {
      throw error;
    }
  }

  async savePerservanceWeather(
    perservanceWeatherDto: PerservanceWeather,
  ): Promise<PerservanceWeather> {
    try {
      const newWeather = new this.perservanceWeatherModel(
        perservanceWeatherDto,
      );
      return await newWeather.save();
    } catch (error) {
      throw error;
    }
  }

  async deletePerservanceWeather() {
    try {
      await this.perservanceWeatherModel.deleteMany({});
    } catch (error) {
      throw error;
    }
  }

  async getPerservanceWeathers(): Promise<PerservanceWeather[]> {
    try {
      return await this.perservanceWeatherModel.find();
    } catch (error) {
      throw error;
    }
  }
}

import { HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PerservanceWeather } from './perservance-weather.interface';
import { Model } from 'mongoose';

export class PerservanceWeatherService {
  constructor(
    private httpService: HttpService,
    @InjectModel('PerservanceWeather')
    private readonly perservanceWeatherModel: Model<PerservanceWeather>,
  ) {}

  async fetchPerservanceWeather(): Promise<PerservanceWeather[]> {
    const apiUrl =
      'https://mars.nasa.gov/rss/api/?feed=weather&category=mars2020&feedtype=json';
    const response = await this.httpService.get(apiUrl).toPromise();

    const lastSolWeatherData =
      response.data.sols[response.data.sols.length - 1];

    this.savePerservanceWeather(lastSolWeatherData);

    return lastSolWeatherData;
  }

  async savePerservanceWeather(
    perservanceWeatherDto: PerservanceWeather,
  ): Promise<PerservanceWeather> {
    const newWeather = new this.perservanceWeatherModel(perservanceWeatherDto);
    return await newWeather.save();
  }

  async getPerservanceWeathers(): Promise<PerservanceWeather[]> {
    return await this.perservanceWeatherModel.find();
  }
}

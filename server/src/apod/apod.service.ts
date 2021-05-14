import { Apod } from './apod.interface';
import { Injectable, HttpService, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class ApodService {
  private readonly logger = new Logger(ApodService.name);

  constructor(
    private httpService: HttpService,
    @InjectModel('Apod') private readonly apodModel: Model<Apod>,
  ) {}

  @Cron('41 20 * * *')
  async fetchApod(): Promise<Apod> {
    const currentDate = new Date().toISOString().split('T')[0];
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=${process.env.NASA_API_KEY}`;
    try {
      const response = await this.httpService.get(apiUrl).toPromise();
      await this.saveApod(response.data);

      this.logger.log('Fetched and saved new data');

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async saveApod(apodDto: Apod): Promise<Apod> {
    try {
      const newApod = new this.apodModel(apodDto);
      return await newApod.save();
    } catch (error) {
      throw error;
    }
  }

  async getApod(): Promise<Apod[]> {
    try {
      return await this.apodModel.find().sort({ date: -1 });
    } catch (error) {
      throw error;
    }
  }
}
